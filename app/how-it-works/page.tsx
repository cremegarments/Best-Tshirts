import type {Metadata} from "next";
import Link from "next/link";
import {process} from "@/lib/site";
export const metadata:Metadata={title:"How It Works"};
export default function ProcessPage(){return <><section className="subhero shell"><p className="eyebrow">OUR PROCESS / 03</p><h1>NO GUESSWORK.<br/><em>JUST GOOD WORK.</em></h1><p>Clear requirements, approved proofs and managed production from the first inquiry to your finished order.</p></section><section className="section shell page-section"><div className="process-list">{process.map(s=><div className="process-row" key={s.no}><span>{s.no}</span><h2>{s.title}</h2><p>{s.desc}</p></div>)}</div><section className="pricing-explainer" aria-labelledby="pricing-title">
  <div className="pricing-explainer-heading">
    <p className="eyebrow">C2C / QUOTATIONS & PRICING</p>
    <h2 id="pricing-title">HOW OUR<br/><em>PRICING WORKS.</em></h2>
  </div>
  <div className="pricing-explainer-copy">
    <p className="pricing-lead">Straightforward pricing. Tailored to your project.</p>
    <p>Every C2C project is individually quoted based on product specifications, quantity, customization, and delivery requirements.</p>
    <p>You&apos;ll receive a clear C2C quotation outlining the agreed price, scope of work, payment terms, and estimated timeline before proceeding.</p>
    <p className="pricing-explainer-note">No upfront payment is required to submit an inquiry. Any sourcing, production, freight, duties, or additional charges will be included or clearly identified in your quotation.</p>
    <Link href="/quote" className="button button-dark">Request a sourcing quote <span aria-hidden="true">↗</span></Link>
  </div>
</section><div className="info-panel"><div><h2>LET'S TALK<br/><em>DETAILS.</em></h2></div><div><p>Actual production and delivery timing depends on product selection, artwork approval, quantity and shipping arrangements. We confirm dates during quoting.</p><Link href="/quote" className="button button-dark">Start your project ↗</Link></div></div></section></>}
