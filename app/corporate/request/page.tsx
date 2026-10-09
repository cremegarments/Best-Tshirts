import type {Metadata} from "next";
import Link from "next/link";
import {Suspense} from "react";
import {CorporateRequestForm} from "./request-form";
import "./request.css";

export const metadata: Metadata = {
  title: "Corporate Quote & Procurement Request | CRÈME Products",
  description: "Request corporate uniforms, branded merchandise, office procurement, custom manufacturing and China product sourcing for the Cayman Islands.",
};

export default function CorporateRequestPage() {
  return <>
    <section className="cr-hero">
      <div className="shell cr-hero-inner">
        <p className="cr-eyebrow">CRÈME PRODUCTS / CORPORATE INQUIRIES</p>
        <h1>YOUR BUSINESS.<br/><em>OUR REACH.</em></h1>
        <p className="cr-intro">Tell us what your organization needs—from staff uniforms to a hard-to-find product. We review the specifications, assess sourcing options and coordinate a clear Cayman delivery plan.</p>
        <div className="cr-proof"><span>01 / ONE POINT OF CONTACT</span><span>02 / SPECIFICATION-LED QUOTES</span><span>03 / KYD PRICING</span></div>
      </div>
    </section>
    <section className="shell cr-page-grid" id="request">
      <div className="cr-side">
        <p className="cr-eyebrow">REQUEST FOR QUOTATION / RFQ</p>
        <h2>YOU BRING<br/><em>THE BRIEF.</em></h2>
        <p>We help Cayman organizations plan orders across apparel, merchandise, office supply and suitable international manufacturing categories. Quantities, feasibility, shipping and timing are confirmed after review.</p>
        <div className="cr-side-list"><span>01 &nbsp; Select your requirement</span><span>02 &nbsp; Provide quantities and specifications</span><span>03 &nbsp; Tell us when and where</span><span>04 &nbsp; We review and respond</span></div>
        <p className="cr-side-note">Have a tender, vendor-registration or purchase-order requirement? Include it in your request. Submitting an inquiry does not establish supplier approval or a purchasing agreement.</p>
        <Link href="/procurement" className="cr-side-link">How business purchasing works ↗</Link>
      </div>
      <Suspense fallback={<p className="cr-loading">Loading corporate request form…</p>}><CorporateRequestForm/></Suspense>
    </section>
    <section className="cr-footer-band"><div className="shell"><span>CRÈME PRODUCTS</span><strong>CAYMAN ROOTS. GLOBAL PRODUCTION.</strong><Link href="/corporate">Back to corporate services ↗</Link></div></section>
  </>;
}
