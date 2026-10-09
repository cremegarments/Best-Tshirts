import {NextResponse} from "next/server";
import {services} from "@/lib/site";

const allowedServices = new Set([...services.map(s=>s.title),"Not sure yet"]);
const str = (value:unknown,max=1000) => typeof value === "string" ? value.trim().slice(0,max) : "";
const sourcingCategories=new Set(["Corporate / office","Promotional merchandise","Apparel / uniforms","Packaging / displays","Hospitality / facilities","Other / specialty product"]);
export async function POST(request:Request) {
  let data:Record<string,unknown>;
  try {
    const size=Number(request.headers.get("content-length")||0);
    if(size>25000) return NextResponse.json({message:"Request too large."},{status:413});
    const parsed:unknown = await request.json();
    if (!parsed || typeof parsed!=="object" || Array.isArray(parsed)) throw new Error("Invalid payload");
    data=parsed as Record<string,unknown>;
  } catch {return NextResponse.json({message:"Invalid request."},{status:400});}
  if (str(data.website)) return NextResponse.json({message:"Thank you."}); // Honeypot; additional abuse mitigation required for production

  const name=str(data.name,120), email=str(data.email,180), company=str(data.company,120), phone=str(data.phone,60);
  const service=str(data.service,120), details=str(data.details,4000), quantity=Number(data.quantity);
  const deadline=str(data.deadline,40), artwork=str(data.artwork,1000);
  const category=str(data.category,100), delivery=str(data.delivery,120), budget=str(data.budget,30);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !allowedServices.has(service) || !Number.isInteger(quantity) || quantity<1 || quantity>100000 || !details || data.consent!=="on" || (service==="Global sourcing" && !sourcingCategories.has(category))) {
    return NextResponse.json({message:"Please complete all required fields correctly."},{status:400});
  }
  if (artwork) {try {const u = new URL(artwork); if(!["https:","http:"].includes(u.protocol)) throw new Error();} catch {return NextResponse.json({message:"Please use a valid http(s) reference link."},{status:400});}}
  if (budget && (!/^\d{1,9}(\.\d{1,2})?$/.test(budget) || Number(budget)<=0)) return NextResponse.json({message:"Enter a valid budget amount in KYD, or leave it empty."},{status:400});
  if (deadline && !/^\d{4}-\d{2}-\d{2}$/.test(deadline)) return NextResponse.json({message:"Please check the needed-by date."},{status:400});

  const key=process.env.RESEND_API_KEY, to=process.env.QUOTE_TO_EMAIL, from=process.env.QUOTE_FROM_EMAIL;
  if (!key || !to || !from) return NextResponse.json({message:"This form has not been connected to business email yet. Please contact CRÈME directly."},{status:503});
  const lines = ["New CRÈME Products business inquiry","",`Name: ${name}`,`Company: ${company||"Not supplied"}`,`Email: ${email}`,`Phone: ${phone||"Not supplied"}`,`Service: ${service}`,`Product category: ${category||"Not specified"}`,`Quantity: ${quantity}`,`Target budget (KYD): ${budget?`CI$${budget}`:"Not supplied"}`,`Needed by: ${deadline||"Not specified"}`,`Delivery area: ${delivery||"Not specified"}`,`Reference or artwork: ${artwork||"Not supplied"}`,"","Project details:",details];
  try {
    const response = await fetch("https://api.resend.com/emails",{
      method:"POST",
      headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},
      body:JSON.stringify({from,to:[to],reply_to:email,subject:`CRÈME inquiry: ${service} — ${name}`,text:lines.join("\n")}),
      cache:"no-store"
    });
    if(!response.ok) {console.error("Inquiry delivery failed",response.status);return NextResponse.json({message:"Your request could not be delivered. Please contact CRÈME directly."},{status:502});}
    return NextResponse.json({message:"Inquiry received."});
  } catch(error) {console.error("Inquiry submission error",error); return NextResponse.json({message:"The email service is temporarily unavailable. Please contact CRÈME directly."},{status:502});}
}
