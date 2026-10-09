import {NextResponse} from "next/server";
import {sameOrigin} from "@/lib/rfq";
export async function POST(request:Request){
 if(!sameOrigin(request))return NextResponse.json({message:"Invalid origin"},{status:403});
 const r=NextResponse.json({ok:true});r.cookies.delete("creme_rfq_session");r.headers.set("Cache-Control","no-store");return r;
}
