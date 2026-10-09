"use client";
import {useState,type FormEvent} from "react";
import {site} from "@/lib/site";

type Status="idle"|"sending"|"success"|"error";
export function SourcingForm(){
  const [status,setStatus]=useState<Status>("idle");
  const [message,setMessage]=useState("");
  async function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=event.currentTarget;
    setStatus("sending");setMessage("");
    const body=Object.fromEntries(new FormData(form).entries());
    try{
      const response=await fetch("/api/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      const data:{message?:string}=await response.json();
      if(!response.ok)throw new Error(data.message||"Please try again.");
      setStatus("success");setMessage("Your sourcing inquiry has been sent. We'll review feasibility and follow up with next steps.");
      form.reset();
    }catch(error){setStatus("error");setMessage(error instanceof Error?error.message:"Unable to send your request.");}
  }
  return <form className="quote-form sourcing-form" onSubmit={handleSubmit}>
    <h2>PRODUCT SOURCING INQUIRY <span>↗</span></h2>
    <input type="hidden" name="service" value="Global sourcing"/>
    <div className="form-grid">
      <label>CONTACT NAME <b>*</b><input type="text" name="name" required maxLength={120} autoComplete="name" placeholder="Your name"/></label>
      <label>BUSINESS / ORGANIZATION<input type="text" name="company" maxLength={120} autoComplete="organization" placeholder="Company name"/></label>
      <label>BUSINESS EMAIL <b>*</b><input type="email" name="email" required maxLength={180} autoComplete="email" placeholder="you@company.com"/></label>
      <label>PHONE / WHATSAPP<input type="tel" name="phone" maxLength={60} autoComplete="tel" placeholder="Include country code"/></label>
      <label>PRODUCT CATEGORY <b>*</b><select name="category" defaultValue="" required><option value="" disabled>Choose a category</option><option>Corporate / office</option><option>Promotional merchandise</option><option>Apparel / uniforms</option><option>Packaging / displays</option><option>Hospitality / facilities</option><option>Other / specialty product</option></select></label>
      <label>ESTIMATED QUANTITY <b>*</b><input type="number" name="quantity" min={1} max={100000} required placeholder="e.g. 300"/></label>
      <label>MAX. TARGET BUDGET (KYD)<input name="budget" inputMode="decimal" placeholder="Optional amount in CI$" maxLength={30}/></label>
      <label>NEEDED BY<input name="deadline" type="date"/></label>
      <label>REFERENCE LINK<input type="url" name="artwork" maxLength={1000} placeholder="https://product-link..."/></label>
      <label>DELIVERY AREA<input type="text" name="delivery" maxLength={120} placeholder="e.g. George Town, Grand Cayman"/></label>
    </div>
    <label>PRODUCT DESCRIPTION & SPECIFICATIONS <b>*</b><textarea name="details" required maxLength={4000} rows={6} placeholder="What is the product? Include measurements, materials, colors, branding, quality expectations and any special requirements."/></label>
    <label className="consent"><input name="consent" type="checkbox" required/> <span>I agree to be contacted about this inquiry. Availability, specifications, minimum orders, landed pricing and import eligibility will be reviewed before a quotation is confirmed.</span></label>
    <div className="honeypot" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    {status==="success"&&<p className="form-feedback form-success" role="status">{message}</p>}
    {status==="error"&&<p className="form-feedback form-error" role="alert">{message} {site.email&&<a href={`mailto:${site.email}`}>Email instead ↗</a>}</p>}
    <button className="button button-dark submit-button" type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Submit sourcing inquiry"}<span aria-hidden="true">↗</span></button>
    <p className="form-note">No payment is taken here. Requests are reviewed individually; this form requires email delivery to be configured before launch.</p>
  </form>;
}
