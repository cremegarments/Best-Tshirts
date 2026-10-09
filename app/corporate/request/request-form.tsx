"use client";

import {useState, type FormEvent} from "react";
import {useSearchParams} from "next/navigation";

const needs = [
  {id:"uniforms",title:"Corporate uniforms",short:"Workwear, polos, shirts & staff kits",service:"Uniform programs",category:"Apparel / uniforms"},
  {id:"merchandise",title:"Branded merchandise",short:"Gifts, drinkware & event essentials",service:"Corporate merchandise",category:"Promotional merchandise"},
  {id:"office",title:"Office procurement",short:"Workspace supplies & business products",service:"Global sourcing",category:"Corporate / office"},
  {id:"custom",title:"Custom manufacturing",short:"Packaging, specialty products & bespoke goods",service:"Global sourcing",category:"Other / specialty product"},
  {id:"china",title:"China sourcing",short:"Find, compare & assess overseas options",service:"Global sourcing",category:"Other / specialty product"},
  {id:"repeat",title:"Repeat supply",short:"Reorders & recurring procurement",service:"Corporate merchandise",category:"Corporate / office"},
] as const;
type NeedId = typeof needs[number]["id"];
type Status = "idle"|"sending"|"success"|"error";
const sectors = ["Financial services / banking","Legal / professional services","Government / public sector","Hospitality / tourism","Property / construction","Education / nonprofit","Other business"];
const sourcingCategories = ["Corporate / office","Promotional merchandise","Apparel / uniforms","Packaging / displays","Hospitality / facilities","Other / specialty product"];

export function CorporateRequestForm() {
  const params = useSearchParams();
  const requested = params.get("need");
  const initial = needs.find(n=>n.id===requested)?.id ?? "uniforms";
  const [selected,setSelected] = useState<NeedId>(initial);
  const [status,setStatus] = useState<Status>("idle");
  const [feedback,setFeedback] = useState("");
  const need = needs.find(n=>n.id===selected)!;

  async function handleSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(status==="sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const get = (field:string) => String(fields.get(field)??"").trim();
    const notes = [
      `Corporate inquiry: ${need.title}`,
      `Organization sector: ${get("sector")||"Not specified"}`,
      `Buyer role: ${get("role")||"Not specified"}`,
      `Purchasing frequency: ${get("frequency")||"Not specified"}`,
      `Purchasing process / documentation: ${get("requirements")||"Not specified"}`,
      `Branding, variants & specifications: ${get("specs")||"Not supplied"}`,
      "",
      "Product / project request:",get("details"),
    ].join("\n");
    const payload = {
      name:get("name"), company:get("company"),email:get("email"),phone:get("phone"),
      service:need.service,
      category:selected==="china" ? get("category")||need.category : need.category,
      quantity:get("quantity"),budget:get("budget"),deadline:get("deadline"),
      artwork:get("artwork"),delivery:get("delivery"),details:notes.slice(0,4000),
      consent:fields.get("consent")==="on"?"on":"",website:get("website")
    };
    setStatus("sending");setFeedback("");
    try {
      const response = await fetch("/api/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      const result:{message?:string} = await response.json();
      if(!response.ok) throw new Error(result.message||"Your request could not be sent.");
      setStatus("success");setFeedback("Your corporate request has been sent. CRÈME will review the details and follow up by email.");
      form.reset();
    } catch(error) {
      setStatus("error");setFeedback(error instanceof Error?error.message:"Something went wrong. Please try again.");
    }
  }

  return <form className="cr-form" onSubmit={handleSubmit}>
    <div className="cr-form-heading"><span>BUSINESS RFQ / 001</span><strong>START YOUR REQUEST ↗</strong></div>
    <fieldset className="cr-choice-set"><legend>01 / WHAT DO YOU NEED? <b>*</b></legend>
      <div className="cr-choices">{needs.map(n=><button key={n.id} type="button" aria-pressed={selected===n.id} className={`cr-choice ${selected===n.id?"cr-active":""}`} onClick={()=>{setSelected(n.id);setStatus("idle");setFeedback("");}}><strong>{n.title}</strong><small>{n.short}</small><span aria-hidden="true">{selected===n.id?"●":"↗"}</span></button>)}</div>
    </fieldset>
    {selected==="china"&&<label className="cr-field cr-wide">PRODUCT GROUP <b>*</b><select name="category" defaultValue="Other / specialty product" required>{sourcingCategories.map(c=><option key={c} value={c}>{c}</option>)}</select></label>}
    <div className="cr-field-heading">02 / COMPANY & CONTACT DETAILS</div>
    <div className="cr-fields">
      <label className="cr-field">COMPANY / ORGANIZATION <b>*</b><input required name="company" maxLength={120} autoComplete="organization" placeholder="Company name"/></label>
      <label className="cr-field">BUSINESS SECTOR<select name="sector" defaultValue=""><option value="">Choose your sector</option>{sectors.map(s=><option key={s} value={s}>{s}</option>)}</select></label>
      <label className="cr-field">YOUR NAME <b>*</b><input required name="name" maxLength={120} autoComplete="name" placeholder="Full name"/></label>
      <label className="cr-field">ROLE / DEPARTMENT<input name="role" maxLength={100} placeholder="e.g. Purchasing manager"/></label>
      <label className="cr-field">BUSINESS EMAIL <b>*</b><input type="email" required name="email" maxLength={180} autoComplete="email" placeholder="you@company.com"/></label>
      <label className="cr-field">PHONE / WHATSAPP<input type="tel" name="phone" maxLength={60} autoComplete="tel" placeholder="+1 345 …"/></label>
    </div>
    <div className="cr-field-heading">03 / THE REQUIREMENT</div>
    <div className="cr-fields">
      <label className="cr-field">ESTIMATED QUANTITY <b>*</b><input type="number" min={1} max={100000} required name="quantity" placeholder="e.g. 250"/></label>
      <label className="cr-field">PURCHASING FREQUENCY<select name="frequency" defaultValue="One-time order"><option>One-time order</option><option>Repeat order</option><option>Ongoing supply program</option><option>Still deciding</option></select></label>
      <label className="cr-field">TARGET BUDGET (KYD)<input inputMode="decimal" name="budget" maxLength={30} placeholder="Optional, CI$"/></label>
      <label className="cr-field">NEEDED BY<input type="date" name="deadline"/></label>
      <label className="cr-field">DELIVERY AREA<input name="delivery" maxLength={120} placeholder="e.g. George Town, Grand Cayman"/></label>
      <label className="cr-field">PRODUCT / ARTWORK REFERENCE URL<input type="url" name="artwork" maxLength={1000} placeholder="https://… (optional)"/></label>
      <label className="cr-field cr-wide">PRODUCT SPECIFICATIONS / BRAND REQUIREMENTS<textarea rows={3} name="specs" maxLength={650} placeholder="Colours, sizes, logo methods, materials, dimensions, packaging, standards…"/></label>
      <label className="cr-field cr-wide">DESCRIBE YOUR REQUEST <b>*</b><textarea rows={5} required name="details" maxLength={3000} placeholder="What products do you need? Tell us about intended use, quantities, variants and anything that would help us assess suppliers and costs."/></label>
      <label className="cr-field cr-wide">PURCHASING / DOCUMENTATION REQUIREMENTS<textarea rows={2} name="requirements" maxLength={300} placeholder="Optional: purchase order, vendor onboarding, tender reference, payment or invoicing requirements…"/></label>
    </div>
    <label className="cr-consent"><input type="checkbox" name="consent" required/><span>I agree to be contacted about this request. Pricing, stock, production feasibility, import charges and lead times are confirmed after review.</span></label>
    <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off"/></label></div>
    {status==="success"&&<p className="cr-feedback cr-success" role="status">{feedback}</p>}
    {status==="error"&&<p className="cr-feedback cr-error" role="alert">{feedback} <a href="mailto:info@cremeky.com">Email us directly ↗</a></p>}
    <button className="cr-submit" type="submit" disabled={status==="sending"}>{status==="sending"?"SENDING YOUR REQUEST…":"SUBMIT CORPORATE RFQ"}<span aria-hidden="true">↗</span></button>
    <p className="cr-disclaimer">No payment is collected here. Please do not include confidential account numbers, credentials or sensitive personal information in your request.</p>
  </form>;
}
