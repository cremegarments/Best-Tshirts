import type {Rfq} from "./rfq";
export const escapeHtml=(value:string)=>value.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]||c));
const shell=(title:string,body:string)=>`<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/></head><body style="margin:0;background:#f3f0e9;font-family:Arial,Helvetica,sans-serif;color:#1b1d1a"><div style="max-width:640px;margin:auto;padding:32px 18px"><div style="padding:25px;background:#1b1d1a;color:#fff"><div style="font-size:32px;font-weight:900;letter-spacing:-2px">CRÈME</div><div style="font-size:10px;letter-spacing:3px">PRODUCTS / PRODUCTION</div></div><div style="padding:30px 24px;background:#fffdf8"><p style="color:#ac6549;font-weight:700;font-size:11px;letter-spacing:2px">CAYMAN ROOTS. GLOBAL PRODUCTION.</p><h1 style="font-size:28px;line-height:1.1">${escapeHtml(title)}</h1>${body}</div><div style="padding:22px;font-size:12px;color:#777">CRÈME Products · Cayman Islands · <a style="color:#565650" href="https://cremeky.com">cremeky.com</a></div></div></body></html>`;
export function ownerEmail(r:Rfq){
 const rows:[string,string][]=[
  ["Reference",r.id.slice(0,8).toUpperCase()],["Buyer",r.name],["Company",r.company||"Not supplied"],
  ["Email",r.email],["Phone",r.phone||"Not supplied"],["Service",r.service],
  ["Product category",r.category||"Not specified"],["Quantity",String(r.quantity)],
  ["Budget (KYD)",r.budget?`CI$${r.budget}`:"Not specified"],["Needed by",r.deadline||"Not specified"],
  ["Delivery area",r.delivery||"Not specified"],["Reference URL",r.artwork||"Not supplied"],
  ["Attached file",r.attachmentName||"None"],
 ];
 const table=rows.map(([k,v])=>`<tr><td style="padding:10px 0;border-bottom:1px solid #e5e2db;color:#777;width:38%;vertical-align:top">${escapeHtml(k)}</td><td style="padding:10px 0;border-bottom:1px solid #e5e2db;overflow-wrap:anywhere">${escapeHtml(v)}</td></tr>`).join("");
 const body=`<p style="line-height:1.6">A new business inquiry has been submitted.</p><table style="border-collapse:collapse;width:100%;font-size:14px">${table}</table><h2 style="margin-top:28px;font-size:18px">Project requirements</h2><p style="line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere">${escapeHtml(r.details)}</p><p><a style="color:#b36649" href="mailto:${encodeURIComponent(r.email)}">Reply to the buyer →</a></p>`;
 return shell(`New inquiry · ${r.service}`,body);
}
export function customerEmail(r:Rfq){
 const body=`<p style="font-size:16px;line-height:1.7">Hi ${escapeHtml(r.name)},</p><p style="line-height:1.7">Thank you for contacting CRÈME Products. We've received your ${escapeHtml(r.service.toLowerCase())} inquiry and will review the requirements before providing next steps. This is an acknowledgment, not a confirmed quotation, delivery date, or order.</p><div style="background:#ede9df;padding:18px;margin:25px 0"><strong>Your reference: ${escapeHtml(r.id.slice(0,8).toUpperCase())}</strong><p style="margin-bottom:0">${escapeHtml(r.company||"Your business")} · ${escapeHtml(String(r.quantity))} units</p></div><p style="line-height:1.7">Need to clarify anything? Reply to this email or contact <a href="mailto:info@cremeky.com">info@cremeky.com</a>.</p><p>CRÈME Products</p>`;
 return shell("We've received your request",body);
}
