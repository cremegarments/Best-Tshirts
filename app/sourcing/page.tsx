import type {Metadata} from "next";
import Link from "next/link";
import {SourcingForm} from "./sourcing-form";

export const metadata:Metadata={title:"C2C | China 2 Caribbean — Global Sourcing",description:"C2C by CRÈME helps Cayman and Caribbean businesses explore China-based suppliers, product development, manufacturing and delivery coordination."};
const groups=[
  {label:"01 / APPAREL & BRANDS",title:"Apparel & merchandise",description:"Private-label garments, workwear, trims, accessories, packaging and brand-ready product development."},
  {label:"02 / AUTOMOTIVE",title:"Parts & accessories",description:"Automotive parts, accessories, product sourcing and supplier coordination for Cayman Islands and Caribbean businesses through CAPKY, an automotive brand under CRÈME Products."},
  {label:"03 / CONSTRUCTION",title:"Materials & components",description:"Building materials, architectural products, metal profiles, hardware and construction procurement requirements."},
  {label:"04 / CORPORATE & HOSPITALITY",title:"Everyday business supply",description:"Office essentials, promotional merchandise, hospitality products, worksite items and branded corporate kits."},
  {label:"05 / CUSTOM PRODUCTS",title:"Made to specification",description:"Packaging, accessories, fabricated products, prototypes and other goods developed around your requirements."},
  {label:"06 / SPECIALTY SOURCING",title:"Bring us the challenge",description:"Have a sample, specification sheet or product link? Tell us what you need and we'll assess viable options."}
];
export default function SourcingPage(){return <>
  <section className="subhero shell enterprise-subhero"><p className="eyebrow">GLOBAL SOURCING / 03</p><h1>NEED IT?<br/><em>LET'S FIND A WAY.</em></h1><p>One point of contact for custom and bulk product sourcing. Share what you're looking for, and CRÈME can review available manufacturing options, costs and delivery requirements.</p><div className="page-actions"><Link href="#sourcing-inquiry" className="button button-dark">Submit a sourcing inquiry ↗</Link><Link href="/procurement" className="text-link">How purchasing works ↗</Link></div></section>
  <section id="c2c" className="c2c-feature shell" aria-labelledby="c2c-heading">
    <div className="c2c-feature-heading">
      <p className="eyebrow">CRÈME’S SOURCING SERVICE</p>
      <strong className="c2c-wordmark">C2C<span>.</span></strong>
      <h2 id="c2c-heading">CHINA 2 CARIBBEAN</h2>
      <p className="c2c-tagline">Global manufacturing. Caribbean opportunity.</p>
    </div>
    <div className="c2c-feature-copy">
      <p>C2C stands for China 2 Caribbean — and China 2 Cayman, where our Caribbean reach begins. We connect businesses with China-based supplier discovery, product development and coordinated manufacturing opportunities.</p>
      <div className="c2c-capabilities">
        <span>SUPPLIER DISCOVERY</span><span>QUOTATIONS &amp; SAMPLING</span><span>PRODUCTION COORDINATION</span><span>QUALITY REQUIREMENTS</span><span>FREIGHT PLANNING</span>
      </div>
      <p className="c2c-disclaimer">Availability, feasibility and partner responsibilities are assessed for each project. Manufacturing, inspection and freight services may be provided by independent suppliers and logistics partners.</p>
      <Link href="#sourcing-inquiry" className="button button-dark">Start a C2C inquiry ↗</Link>
    </div>
  </section>
  <section className="source-band"><div className="shell"><span>YOUR REQUIREMENT</span><span aria-hidden="true">→</span><span>SUPPLIER OPTIONS</span><span aria-hidden="true">→</span><span>APPROVED PRODUCTION</span><span aria-hidden="true">→</span><span>DELIVERY PLAN</span></div></section>
  <section className="section shell page-section"><div className="section-heading"><div><p className="eyebrow">01 / WHAT WE CAN EXPLORE</p><h2>MORE POSSIBILITIES.<br/><em>ONE CONTACT.</em></h2></div><p>Use these as starting points, not a guaranteed inventory catalog. Product feasibility, legal requirements, minimum orders and availability vary.</p></div><div className="source-category-grid">{groups.map(g=><div className="source-category" key={g.label}><span className="eyebrow">{g.label}</span><h3>{g.title}</h3><p>{g.description}</p></div>)}</div></section>
  <section className="sourcing-caveat"><div className="shell sourcing-caveat-inner"><p className="eyebrow">A PROFESSIONAL PROMISE</p><h2>WE'LL TELL YOU<br/><em>WHAT'S POSSIBLE.</em></h2><p>Not every product can be imported or sourced economically. We assess specifications, supplier reliability, minimum order quantities, quality needs and destination-specific import requirements before confirming an order. No purchase or production commitment is made until both parties approve the terms.</p></div></section>
  <section className="section shell sourcing-form-section" id="sourcing-inquiry"><div className="section-heading"><div><p className="eyebrow">02 / SOURCE A PRODUCT</p><h2>SHOW US<br/><em>WHAT YOU NEED.</em></h2></div><p>Tell us about the product and your requirements. This is a non-binding inquiry, not a purchase order.</p></div><div className="sourcing-form-grid"><aside className="sourcing-assist"><h3>WHAT HELPS US QUOTE.</h3><p>A photo link, product page or specification sheet is a great starting point. Include a realistic quantity, intended destination and your target landed budget in Cayman dollars, if known.</p><div className="quote-tips"><span>PRODUCT DESCRIPTION</span><span>QUANTITY & DIMENSIONS</span><span>BRANDING OR CUSTOMIZATION</span><span>TARGET BUDGET (KYD)</span><span>DELIVERY LOCATION & DATE</span></div><p>Looking for corporate apparel instead? <Link href="/quote?service=Corporate%20merchandise">Request a corporate quote ↗</Link></p></aside><SourcingForm/></div></section>
</>}
