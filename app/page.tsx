import Link from "next/link";
import {GarmentVisual} from "@/components/GarmentVisual";
import {process} from "@/lib/site";

const divisions = [
  {no:"01",category:"FOR ORGANIZATIONS",title:"Corporate merchandise",summary:"Uniforms, branded gifts, onboarding kits, event merchandise and everyday business essentials.",href:"/corporate",action:"Explore corporate"},
  {no:"02",category:"MADE TO SPECIFICATION",title:"Custom production",summary:"Screen printing, embroidery, private-label goods, custom packaging and managed manufacturing.",href:"/services",action:"Explore production"},
  {no:"03",category:"BEYOND THE CATALOG",title:"Global sourcing",summary:"Tell us what you need. We help identify products, coordinate supplier quotations and plan delivery to Cayman.",href:"/sourcing",action:"Source a product"},
];
const categories = ["Employee uniforms", "Executive gifting", "Office & desk goods", "Events & campaigns", "Custom packaging", "Hospitality supplies", "Headwear & bags", "Specialty sourcing"];

export default function Home() {return <>
  <section className="hero shell enterprise-hero"><div className="hero-copy">
    <div className="eyebrow"><span className="online-dot"/> CAYMAN ROOTS. GLOBAL REACH.</div>
    <h1>YOUR<br/>BUSINESS.<br/><span className="italic-word">OUR REACH.</span></h1>
    <p>Corporate merchandise, custom manufacturing and international product sourcing. One point of contact, from your first brief to the finished order.</p>
    <div className="hero-actions"><Link href="/quote" className="button button-dark">Request a quote <span aria-hidden="true">↗</span></Link><Link href="/sourcing" className="text-link">Source a product <span aria-hidden="true">↗</span></Link></div>
    <div className="hero-small"><span>EST. 2015</span><span>CAYMAN ISLANDS</span><span>BUSINESS-TO-BUSINESS</span></div>
  </div><GarmentVisual/></section>
  <div className="ticker"><div className="ticker-inner">CORPORATE MERCHANDISE <span>✳</span> CUSTOM MANUFACTURING <span>✳</span> INTERNATIONAL SOURCING <span>✳</span> UNIFORMS & WORKWEAR <span>✳</span> SPECIALTY PRODUCTS <span>✳</span></div></div>
  <section className="trust-bar shell" aria-label="What CRÈME offers"><span>CAYMAN-BASED RELATIONSHIP</span><span>TAILORED QUOTATIONS</span><span>MANAGED PRODUCTION</span><span>DELIVERY COORDINATION</span></section>
  <section className="section shell business-section" id="what-we-do"><div className="section-heading"><div><p className="eyebrow">01 / HOW WE HELP</p><h2>MORE THAN PRINT.<br/><em>BUILT FOR BUSINESS.</em></h2></div><p>From one branded item to a broader purchasing requirement, our services are organized around what your business needs to get done.</p></div>
    <div className="division-grid">{divisions.map(d=><Link href={d.href} className="division-card" key={d.no}><div className="division-top"><span>{d.no} / {d.category}</span><span aria-hidden="true">↗</span></div><div><h3>{d.title}</h3><p>{d.summary}</p></div><strong>{d.action} ↗</strong></Link>)}</div>
  </section>
  <section className="enterprise-statement"><div className="shell enterprise-statement-grid"><div><p className="eyebrow">02 / GLOBAL SOURCING</p><h2>CAN'T FIND IT?<br/><em>START HERE.</em></h2><p className="statement-intro">No one catalog has everything. Tell us about your product, quantity and target delivery date. We'll assess sourcing options and let you know what is feasible.</p><Link href="/sourcing#sourcing-inquiry" className="button button-cream">Submit a sourcing inquiry ↗</Link></div><div className="sourcing-graphic" aria-label="Product sourcing process illustration"><div className="graphic-label">ONE REQUEST / A WORLD OF OPTIONS</div><div className="graphic-center">C<span>.</span></div><div className="graphic-chip chip-a">FIND</div><div className="graphic-chip chip-b">MAKE</div><div className="graphic-chip chip-c">BRAND</div><div className="graphic-chip chip-d">DELIVER</div><p>SPECIFY → QUOTE → PRODUCE → COORDINATE</p></div></div></section>
  <section className="section shell category-section"><div className="section-heading"><div><p className="eyebrow">03 / PRODUCT POSSIBILITIES</p><h2>YOUR LIST.<br/><em>OUR STARTING POINT.</em></h2></div><p>These categories illustrate the types of sourcing and production inquiries we can assess. Availability is confirmed case by case.</p></div><div className="category-grid">{categories.map((name,i)=><Link key={name} href={`/quote?service=${encodeURIComponent(i===4 ? "Custom packaging" : i===6 ? "Headwear & accessories" : "Global sourcing")}`} className="category-item"><span>{String(i+1).padStart(2,"0")}</span><strong>{name}</strong><span aria-hidden="true">↗</span></Link>)}</div></section>
  <section className="section shell procurement-spotlight"><div className="spotlight-mark">C/</div><div><p className="eyebrow">04 / PROCUREMENT & RFQs</p><h2>A BETTER WAY<br/><em>TO BUY FOR BUSINESS.</em></h2><p>Formal specifications, itemized quotations, purchasing documentation and repeat-order planning for corporate procurement teams.</p><Link href="/procurement" className="button button-dark">For procurement teams ↗</Link></div></section>
  <section className="section shell"><div className="section-heading"><div><p className="eyebrow">05 / OUR PROCESS</p><h2>CLEAR FROM<br/><em>THE FIRST BRIEF.</em></h2></div><p>Each order is individually evaluated for specifications, price, production time and freight arrangements.</p></div><div className="steps">{process.map((step)=><div className="step" key={step.no}><span>{step.no}</span><h3>{step.title}</h3><p>{step.desc}</p></div>)}</div><Link href="/how-it-works" className="section-link">Understand the process <span>↗</span></Link></section>
  <section className="project-banner"><div className="shell project-banner-inner"><div><p className="eyebrow">LET'S TALK ABOUT WHAT YOU NEED</p><h2>ONE PARTNER.<br/><em>MORE POSSIBLE.</em></h2></div><Link className="button button-dark" href="/quote">Start your inquiry <span>↗</span></Link></div></section>
</>}
