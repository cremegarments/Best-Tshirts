import {NextRequest,NextResponse} from "next/server";
import {listRfqs,setRfqStatus,statuses,storeReady,verifySession,sameOrigin} from "@/lib/rfq";
export const runtime="nodejs";
const deny=()=>NextResponse.json({message:"Not authorized"},{status:401,headers:{"Cache-Control":"no-store"}});
export async function GET(request:NextRequest){
 if(!verifySession(request.cookies.get("creme_rfq_session")?.value))return deny();
 if(!storeReady())return NextResponse.json({message:"RFQ storage not configured"},{status:503});
 try{return NextResponse.json({items:await listRfqs()},{headers:{"Cache-Control":"no-store"}});}catch{return NextResponse.json({message:"Unable to load requests"},{status:503})}
}
export async function PATCH(request:NextRequest){
 if(!verifySession(request.cookies.get("creme_rfq_session")?.value))return deny();
 if(!sameOrigin(request))return NextResponse.json({message:"Invalid origin"},{status:403});
 try{
  const v=await request.json() as {id?:string;status?:string};
  if(typeof v.id!=="string"||typeof v.status!=="string"||!statuses.includes(v.status as typeof statuses[number]))return NextResponse.json({message:"Invalid status"},{status:400});
  const saved=await setRfqStatus(v.id,v.status as typeof statuses[number]);
  return NextResponse.json({ok:saved},{status:saved?200:404});
 }catch{return NextResponse.json({message:"Update failed"},{status:503})}
}
