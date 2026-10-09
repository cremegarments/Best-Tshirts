"use client";
import {useState, type FormEvent} from "react";
import {useSearchParams} from "next/navigation";
import {services,site} from "@/lib/site";

type Status = "idle"|"sending"|"success"|"error";
export function QuoteForm() {
  const params = useSearchParams();
  const selectedService = params.get("service") || "";
  const [status,setStatus] = useState<Status>("idle");
  const [message,setMessage] = useState("");
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending"); setMessage("");
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      const result:{message?:string} = await response.json();
      if (!response.ok) throw new Error(result.message||"We couldn't submit your request.");
      setStatus("success"); setMessage("Your request has been sent. CRÈME will follow up with the next steps."); form.reset();
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
    <label>SERVICE <b>*</b><select name="service" required defaultValue={services.some(s=>s.title===selectedService)?selectedService:""}><option value="" disabled>Choose a service</option>{services.map(s=><option key={s.number} value={s.title}>{s.title}</option>)}<option value="Not sure yet">Not sure yet</option></select></label>
    <label>ESTIMATED QUANTITY <b>*</b><input name="quantity" type="number" placeholder="e.g. 150" min={1} max={100000} required/></label>
    <label>NEEDED BY<input name="deadline" type="date"/></label>
    <label>ARTWORK LINK<input name="artwork" type="url" placeholder="https://..." maxLength={1000}/></label></div>
    <label>PROJECT DETAILS <b>*</b><textarea name="details" rows={5} maxLength={4000} placeholder="Tell us about the garments, colors, sizes, printing positions, design and anything else we should know." required/></label>
    <label className="consent"><input type="checkbox" name="consent" required/> <span>I agree to be contacted about this project. Final pricing and lead times are confirmed after reviewing specifications.</span></label>
    <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" type="text" tabIndex={-1} autoComplete="off"/></label></div>
    {status === "success" && <p className="form-feedback form-success" role="status">{message}</p>}
    {status === "error" && <p className="form-feedback form-error" role="alert">{message} {site.email&&<a href={`mailto:${site.email}`}>Email us instead ↗</a>}</p>}
    <button type="submit" disabled={status==="sending"} className="button button-dark submit-button">{status==="sending"?"Sending…":"Submit inquiry"}<span aria-hidden="true">↗</span></button>
    <p className="form-note">No payment is collected through this form. Quotes are reviewed individually.</p>
  </form>;
}
