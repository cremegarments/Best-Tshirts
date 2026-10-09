import {randomUUID} from "node:crypto";
import {NextResponse} from "next/server";
import {services} from "@/lib/site";
import {saveRfq,storeReady,submitAllowed,type Rfq} from "@/lib/rfq";
import {ownerEmail,customerEmail} from "@/lib/rfq-email";

export const runtime="nodejs";
const allowedServices = new Set([...services.map(s=>s.title),"Not sure yet"]);
const sourcingCategories=new Set(["Corporate / office","Promotional merchandise","Apparel / uniforms","Packaging / displays","Hospitality / facilities","Other / specialty product"]);
const str=(v:unknown,max=1000)=>typeof v==="string"?v.trim().slice(0,max):"";
const MAX_BODY=3100000;
type Attachment={filename:string;content:string};
function parseAttachment(value:unknown):Attachment|undefined{
 if(!value)return undefined;
 if(!value||typeof value!=="object"||Array.isArray(value))throw new Error("Invalid attachment");
 const a=value as Record<string,unknown>;
 const filename=str(a.name,120).replace(/[^\w.\- ()]/g,"_").replace(/^\.+/,"")||"attachment";
 const base64=str(a.base64,2800000);
 if(!/^[A-Za-z0-9+/]+={0,2}$/.test(base64))throw new Error("Invalid attachment content");
 const data=Buffer.from(base64,"base64");
 if(!data.length||data.length>2*1024*1024)throw new Error("File must be 2 MB or smaller");
 const pdf=data.subarray(0,5).toString()==="%PDF-";
 const png=data.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
 const jpg=data.length>3 && data[0]===255 && data[1]===216 && data[2]===255;
 if(!(pdf||png||jpg))throw new Error("Only PDF, PNG, or JPEG files are accepted");
 const ext=pdf?".pdf":png?".png":".jpg";
 if(!filename.toLowerCase().endsWith(ext) && !(jpg&&filename.toLowerCase().endsWith(".jpeg")))throw new Error("File extension does not match file type");
 return {filename,content:base64};
}
export async function POST(request:Request){
 try{
  const size=Number(request.headers.get("content-length")||0);
  if(size>MAX_BODY)return NextResponse.json({message:"The attachment is too large. Please use a file under 2 MB."},{status:413});
  const raw=await request.text();
  if(raw.length>MAX_BODY)return NextResponse.json({message:"Request too large."},{status:413});
  const data=JSON.parse(raw) as Record<string,unknown>;
  if(!data||typeof data!=="object"||Array.isArray(data))throw new Error("Invalid request");
  if(str(data.website))return NextResponse.json({message:"Thank you."});
  const name=str(data.name,120),email=str(data.email,180),company=str(data.company,120),phone=str(data.phone,60);
  const service=str(data.service,120),details=str(data.details,4000),quantity=Number(data.quantity);
  const deadline=str(data.deadline,40),artwork=str(data.artwork,1000),category=str(data.category,100);
  const delivery=str(data.delivery,120),budget=str(data.budget,30);
  if(!name||!/^\S+@\S+\.\S+$/.test(email)||!allowedServices.has(service)||!Number.isInteger(quantity)||quantity<1||quantity>100000||!details||data.consent!=="on"||(service==="Global sourcing"&&!sourcingCategories.has(category)))
   return NextResponse.json({message:"Please complete all required fields correctly."},{status:400});
  if(artwork){try{const url=new URL(artwork);if(!["https:","http:"].includes(url.protocol))throw Error();}catch{return NextResponse.json({message:"Please enter a valid reference link."},{status:400})}}
  if(budget&&(!/^\d{1,9}(\.\d{1,2})?$/.test(budget)||Number(budget)<=0))return NextResponse.json({message:"Enter a valid KYD budget, or leave it blank."},{status:400});
  if(deadline&&!/^\d{4}-\d{2}-\d{2}$/.test(deadline))return NextResponse.json({message:"Please check the requested date."},{status:400});
  let attachment:Attachment|undefined;
  try{attachment=parseAttachment(data.attachment);}catch(err){return NextResponse.json({message:err instanceof Error?err.message:"Invalid file."},{status:400})}
  const key=process.env.RESEND_API_KEY,to=process.env.QUOTE_TO_EMAIL,from=process.env.QUOTE_FROM_EMAIL;
  if(!key||!to||!from)return NextResponse.json({message:"Email service is not configured. Please email info@cremeky.com."},{status:503});
  const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
  try{if(!await submitAllowed(ip))return NextResponse.json({message:"Too many requests. Please email CRÈME directly."},{status:429});}
  catch{return NextResponse.json({message:"Unable to accept inquiries at this time. Please email CRÈME directly."},{status:503});}
  const ref=randomUUID();
  const item:Rfq={id:ref,createdAt:new Date().toISOString(),status:"New",name,email,company,phone,service,details,quantity,deadline,artwork,category,delivery,budget,attachmentName:attachment?.filename};
  const text=["New CRÈME business inquiry",`Reference: ${ref.slice(0,8).toUpperCase()}`,`Name: ${name}`,`Company: ${company}`,`Email: ${email}`,`Phone: ${phone}`,`Service: ${service}`,`Product category: ${category}`,`Quantity: ${quantity}`,`Target budget (KYD): ${budget?`CI$${budget}`:"Not supplied"}`,`Needed by: ${deadline||"Not specified"}`,`Delivery area: ${delivery||"Not specified"}`,`Reference: ${artwork||"Not supplied"}`,`Attachment: ${attachment?.filename||"Not supplied"}`,"","Project details:",details].join("\n");
  const emailBody={from,to:[to],reply_to:email,subject:`CRÈME inquiry [${ref.slice(0,8).toUpperCase()}]: ${service} — ${name}`,html:ownerEmail(item),text,...(attachment?{attachments:[attachment]}:{})};
  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify(emailBody),cache:"no-store"});
  if(!response.ok){console.error("Owner email delivery failure",response.status);return NextResponse.json({message:"We couldn't deliver your request. Please email info@cremeky.com."},{status:502});}
  try{await saveRfq(item);}catch(e){console.error("Optional RFQ dashboard storage failed",e instanceof Error?e.message:"Error");}
  // Customer acknowledgment is best-effort: it must never cause a duplicate form submission.
  if(storeReady() && process.env.QUOTE_AUTO_REPLY==="true")try{
   const acknowledgment=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[email],reply_to:to,subject:`CRÈME · Request received [${ref.slice(0,8).toUpperCase()}]`,html:customerEmail(item),text:`Hi ${name},\n\nThanks for contacting CRÈME Products. Your inquiry has been received (reference ${ref.slice(0,8).toUpperCase()}). We'll review it and follow up. This isn't a quotation or order confirmation.\n\nCRÈME Products\ninfo@cremeky.com`}),cache:"no-store"});
   if(!acknowledgment.ok)console.warn("Customer acknowledgment could not be sent",acknowledgment.status);
  }catch(e){console.warn("Customer acknowledgment unavailable");}
  return NextResponse.json({message:"Your request was received.",reference:ref.slice(0,8).toUpperCase()});
 }catch(err){console.error("Quote route error",err instanceof Error?err.message:"Unknown");return NextResponse.json({message:"Unable to process your request. Please contact info@cremeky.com."},{status:500});}
}
