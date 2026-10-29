"use client";
import {useState, type FormEvent} from "react";
import {useSearchParams} from "next/navigation";
import {site} from "@/lib/site";

const c2cServices = ["General Product Sourcing","Apparel & Uniforms","Automotive & Parts","Construction & Building Materials","Solar & Renewable Energy","Home & Lifestyle","Jewelry & Gadgets","Consumer Goods","Freight & Logistics","Manufacturing & Private Label","Business consulting","Brand & product development","Other / Custom Request","Not sure yet"];


type Status = "idle"|"sending"|"success"|"error";
export function QuoteForm() {
  const params = useSearchParams();
  const selectedService = params.get("service") || "";
  const selectedCategory = params.get("category") || "";
  const [serviceChoice,setServiceChoice] = useState(c2cServices.includes(selectedService)?selectedService:(c2cServices.includes(selectedCategory)?selectedCategory:""));
  const [status,setStatus] = useState<Status>("idle");
  const [message,setMessage] = useState("");
  const [emailDraft,setEmailDraft] = useState("");
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending"); setMessage(""); setEmailDraft("");
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      const result:{message?:string} = await response.json();
      if (!response.ok) throw new Error(result.message||"We couldn't submit your request.");
      setStatus("success"); setMessage("Your request has been sent. C2C will follow up with the next steps."); form.reset(); setServiceChoice("");
    } catch(error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }
  return <form className="quote-form" onSubmit={submit}>
    <h2>YOUR PROJECT DETAILS <span>↗</span></h2>
    <div className="form-grid"><label>YOUR NAME <b>*</b><input name="name" type="text" placeholder="Full name" autoComplete="name" maxLength={120} required/></label>
    <label>COMPANY / ORGANIZATION<input name="company" type="text" placeholder="Optional" autoComplete="organization" maxLength={120}/></label>
    <label>EMAIL ADDRESS <b>*</b><input name="email" type="email" placeholder="you@example.com" autoComplete="email" maxLength={180} required/></label>
    <label>PHONE / WHATSAPP<input name="phone" type="tel" placeholder="Include country code" autoComplete="tel" maxLength={60}/></label>
    <label>SERVICE <b>*</b><select name="service" required value={serviceChoice} onChange={event=>setServiceChoice(event.target.value)}><option value="" disabled>Choose a service</option>{c2cServices.map(s=><option key={s} value={s}>{s}</option>)}</select></label>
        <label>ESTIMATED QUANTITY (OPTIONAL)<input name="quantity" type="number" placeholder="e.g. 150, or leave blank" min={1} max={100000}/></label>
    <label>TARGET BUDGET (KYD)<input name="budget" inputMode="decimal" maxLength={30} placeholder="Optional, CI$"/></label>
    <label>NEEDED BY<input name="deadline" type="date"/></label>
    <label>ARTWORK / REFERENCE LINK<input name="artwork" type="url" placeholder="https://..." maxLength={1000}/></label>
    <label>DELIVERY AREA<input name="delivery" type="text" placeholder="e.g. George Town" maxLength={120}/></label></div>
    <label>PRODUCT DETAILS / WHAT DO YOU NEED SOURCED? <b>*</b><textarea name="details" rows={5} maxLength={4000} placeholder="Describe your product or business requirement, dimensions, specifications, budget, destination and any reference materials." required/></label>
    <label className="consent"><input type="checkbox" name="consent" required/> <span>I agree to be contacted about this project. Final pricing and lead times are confirmed after reviewing specifications.</span></label>
    <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" type="text" tabIndex={-1} autoComplete="off"/></label></div>
    {status === "success" && <p className="form-feedback form-success" role="status">{message}</p>}
    {status === "error" && <div className="form-feedback form-error" role="alert"><p>{message}</p>{emailDraft ? <a href={emailDraft} className="button button-dark" style={{display:"inline-block",marginTop:12}}>Open email with my inquiry ↗</a> : site.email&&<a href={`mailto:${site.email}`}>Email us instead ↗</a>}</div>}
    <button type="submit" disabled={status==="sending"} className="button button-dark submit-button">{status==="sending"?"Sending…":"Submit inquiry"}<span aria-hidden="true">↗</span></button>
    <p className="form-note">No payment is collected through this form. Quotes are reviewed individually.</p>
  </form>;
}
