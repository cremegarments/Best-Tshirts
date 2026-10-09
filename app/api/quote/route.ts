import {NextResponse} from "next/server";
import {services} from "@/lib/site";

const allowedServices = new Set([...services.map(s=>s.title),"Not sure yet"]);
const str = (value:unknown,max=1000) => typeof value === "string" ? value.trim().slice(0,max) : "";

export async function POST(request:Request) {
  let data:Record<string,unknown>;
  try {data = await request.json();} catch {return NextResponse.json({message:"Invalid request."},{status:400});}
  if (str(data.website)) return NextResponse.json({message:"Thank you."}); // quiet spam trap

  const name=str(data.name,120), email=str(data.email,180), company=str(data.company,120), phone=str(data.phone,60);
  const service=str(data.service,120), details=str(data.details,4000), quantity=Number(data.quantity);
  const deadline=str(data.deadline,40), artwork=str(data.artwork,1000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !allowedServices.has(service) || !Number.isInteger(quantity) || quantity<1 || quantity>100000 || !details || data.consent!=="on") {
    return NextResponse.json({message:"Please complete all required fields correctly."},{status:400});
  }
  if (artwork) {try {const u = new URL(artwork); if(!["https:","http:"].includes(u.protocol)) throw new Error();} catch {return NextResponse.json({message:"Please use an http(s) artwork link."},{status:400});}}

  const key=process.env.RESEND_API_KEY, to=process.env.QUOTE_TO_EMAIL, from=process.env.QUOTE_FROM_EMAIL;
  if (!key || !to || !from) return NextResponse.json({message:"This form has not been connected to business email yet. Please contact CRÈME directly."},{status:503});
  const body = ["New CRÈME Production quote request","",`Name: ${name}`,`Company: ${company||"Not supplied"}`,`Email: ${email}`,`Phone: ${phone||"Not supplied"}`,`Service: ${service}`,`Quantity: ${quantity}`,`Needed by: ${deadline||"Not specified"}`,`Artwork link: ${artwork||"Not supplied"}`,"","Project details:",details].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails",{
      method:"POST",
      headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},
      body:JSON.stringify({from,to:[to],reply_to:email,subject:`CRÈME quote request: ${service} — ${name}`,text:body}),
      cache:"no-store"
    });
    if(!response.ok) {console.error("Quote delivery failed",response.status);return NextResponse.json({message:"Your request could not be delivered. Please contact CRÈME directly."},{status:502});}
    return NextResponse.json({message:"Quote request received."});
  } catch(error) {console.error("Quote submission error",error); return NextResponse.json({message:"The email service is temporarily unavailable. Please contact CRÈME directly."},{status:502});}
}
