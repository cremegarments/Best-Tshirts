import {createHmac,timingSafeEqual} from "node:crypto";

export const statuses = ["New","Reviewing","Quoted","Won","Closed"] as const;
export type RfqStatus = typeof statuses[number];
export type Rfq = {
 id:string; createdAt:string; status:RfqStatus;
 name:string; company:string; email:string; phone:string;
 service:string; category:string; quantity:number; budget:string;
 deadline:string; delivery:string; details:string; artwork:string;
 attachmentName?:string;
};
const base="creme:v4:rfq:";
function configured(){return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)}
export function storeReady(){return configured()}
async function redis(command:(string|number)[]):Promise<unknown>{
 const baseUrl=process.env.UPSTASH_REDIS_REST_URL;
 const token=process.env.UPSTASH_REDIS_REST_TOKEN;
 if(!baseUrl||!token) throw new Error("RFQ storage has not been configured");
 const response=await fetch(baseUrl.replace(/\/$/,""),{
  method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},body:JSON.stringify(command),cache:"no-store"
 });
 if(!response.ok)throw new Error(`RFQ storage failed (${response.status})`);
 const data=await response.json() as {result?:unknown;error?:string};
 if(data.error)throw new Error("RFQ storage command failed");
 return data.result;
}
export async function saveRfq(item:Rfq){
 if(!configured())return false;
 // Saved only if the buyer explicitly consented to the inquiry.
 await redis(["SET",base+item.id,JSON.stringify(item),"EX",60*60*24*180]);
 await redis(["LPUSH",base+"index",item.id]);
 await redis(["LTRIM",base+"index",0,499]);
 await redis(["EXPIRE",base+"index",60*60*24*180]);
 return true;
}
export async function listRfqs():Promise<Rfq[]>{
 const ids=await redis(["LRANGE",base+"index",0,199]) as string[]|null;
 if(!ids?.length)return [];
 const raw=await redis(["MGET",...ids.map(id=>base+id)]) as (string|null)[];
 return (raw||[]).filter((s):s is string=>typeof s==="string").map(s=>JSON.parse(s) as Rfq);
}
export async function setRfqStatus(id:string,status:RfqStatus){
 if(!/^[a-f0-9-]{36}$/i.test(id) || !statuses.includes(status))throw new Error("Invalid status change");
 const raw=await redis(["GET",base+id]);
 if(typeof raw!=="string")return false;
 const rfq=JSON.parse(raw) as Rfq;
 await redis(["SET",base+id,JSON.stringify({...rfq,status}),"KEEPTTL"]);
 return true;
}
function sig(value:string){return createHmac("sha256",process.env.RFQ_SESSION_SECRET||"").update(value).digest("hex")}
export function issueSession(){
 if(!process.env.RFQ_SESSION_SECRET || process.env.RFQ_SESSION_SECRET.length<32)throw new Error("Missing secure session key");
 const payload=String(Date.now()+12*60*60*1000);
 return `${payload}.${sig(payload)}`;
}
export function verifySession(cookie:string|undefined){
 if(!cookie || !process.env.RFQ_SESSION_SECRET || process.env.RFQ_SESSION_SECRET.length<32)return false;
 const match=/^(\d{13})\.([a-f0-9]{64})$/.exec(cookie);
 if(!match)return false;
 const exp=Number(match[1]);if(exp<Date.now() || exp>Date.now()+12*60*60*1000+60*1000)return false;
 const a=Buffer.from(match[2],"hex"),b=Buffer.from(sig(match[1]),"hex");
 return timingSafeEqual(a,b);
}
export function passwordMatches(candidate:string){
 const actual=process.env.RFQ_ADMIN_PASSWORD||"";
 if(actual.length<20 || candidate.length>512)return false;
 const a=Buffer.from(createHmac("sha256","creme-v4-password").update(candidate).digest());
 const b=Buffer.from(createHmac("sha256","creme-v4-password").update(actual).digest());
 return timingSafeEqual(a,b);
}
export async function submitAllowed(ip:string){
 if(!configured())return true; // Existing email-only flow remains usable without optional database.
 const hashed=createHmac("sha256",process.env.RFQ_SESSION_SECRET||"creme-email-only").update(ip).digest("hex").slice(0,32);
 const key=base+"public:"+hashed;
 const current=Number(await redis(["INCR",key]));
 if(current===1)await redis(["EXPIRE",key,3600]);
 return current<=6;
}
export async function loginAllowed(ip:string){
 if(!configured())return false;
 const hashed=createHmac("sha256",process.env.RFQ_SESSION_SECRET||"none").update(ip).digest("hex").slice(0,32);
 const key=base+"login:"+hashed;
 const current=Number(await redis(["INCR",key]));
 if(current===1)await redis(["EXPIRE",key,900]);
 return current<=8;
}
export function sameOrigin(request:Request){
 const origin=request.headers.get("origin");
 if(!origin)return false;
 try{return new URL(origin).host === request.headers.get("host")}catch{return false}
}
