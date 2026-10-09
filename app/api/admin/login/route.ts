import {NextResponse} from "next/server";
import {issueSession,loginAllowed,passwordMatches,sameOrigin,storeReady} from "@/lib/rfq";
export const runtime="nodejs";
export async function POST(request:Request){
 if(!sameOrigin(request))return NextResponse.json({message:"Invalid origin"},{status:403});
 if(!storeReady()||!process.env.RFQ_ADMIN_PASSWORD||!process.env.RFQ_SESSION_SECRET)return NextResponse.json({message:"Private dashboard not configured"},{status:503});
 const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
 try{
  if(!await loginAllowed(ip))return NextResponse.json({message:"Too many attempts. Try later."},{status:429});
  const body=await request.json() as {password?:string};
  if(typeof body.password!=="string"||!passwordMatches(body.password))return NextResponse.json({message:"Incorrect credentials"},{status:401});
  const response=NextResponse.json({ok:true});
  response.cookies.set("creme_rfq_session",issueSession(),{httpOnly:true,secure:true,sameSite:"strict",path:"/",maxAge:12*60*60});
  response.headers.set("Cache-Control","no-store");return response;
 }catch{return NextResponse.json({message:"Could not sign in."},{status:503});}
}
