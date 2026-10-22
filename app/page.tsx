import Link from "next/link";
import {process} from "@/lib/site";

const pillars = [
  {number:"01",eyebrow:"ADVISE",title:"Business consulting",description:"Practical guidance on product strategy, supplier requirements, commercial planning and the route from idea to market.",href:"/contact",action:"Discuss your project"},
  {number:"02",eyebrow:"DEVELOP",title:"Brand & product development",description:"Turn an idea, reference or specification into a product brief, brand-ready concept and production requirements.",href:"/services",action:"Explore development"},
  {number:"03",eyebrow:"CONNECT",title:"Global sourcing",description:"Explore suppliers and manufacturing options through our C2C — China 2 Caribbean sourcing initiative.",href:"/sourcing#c2c",action:"Discover C2C"},
  {number:"04",eyebrow:"DELIVER",title:"Manufacturing & production",description:"Coordinate quotations, samples, approved production, quality requirements and logistics with manufacturing partners.",href:"/services",action:"Explore production"}
];

const industries = [
  {number:"01",title:"Apparel & merchandise",description:"Private-label collections, uniforms, promotional products, packaging and branded goods.",keywords:"FASHION / UNIFORMS / BRANDING"},
  {number:"02",title:"Automotive",description:"Product and parts sourcing, aftermarket accessories, supplier research and manufacturing inquiries.",keywords:"PARTS / ACCESSORIES / SOURCING"},
  {number:"03",title:"Construction",description:"Building products, architectural components, specifications and supplier coordination.",keywords:"MATERIALS / COMPONENTS / PROCUREMENT"}
];

export default function Home(){return <>
  <section className="hero shell enterprise-hero creme-new-hero">
    <div className="hero-copy">
      <div className="eyebrow"><span className="online-dot"/> GLOBAL BUSINESS & MANUFACTURING SOLUTIONS</div>
      <h1>YOUR VISION.<br/>OUR EXPERTISE.<br/><span className="italic-word">NO BOUNDARIES.</span></h1>
      <p>From business strategy and product development to global sourcing and manufacturing.</p>
      <div className="hero-actions"><Link href="#what-we-do" className="button button-dark">Explore our services <span aria-hidden="true">↗</span></Link><Link href="/contact" className="text-link">Let's talk <span aria-hidden="true">↗</span></Link></div>
      <div className="hero-small"><span>EST. 2015 · CAYMAN ISLANDS</span><span>STRATEGY · SOURCING · PRODUCTION</span></div>
    </div>
    <div className="hero-architecture" aria-label="CRÈME connects strategy, product development and global production">
      <div className="hero-architecture-top"><span>CRÈME / INTERNATIONAL</span><span>01 — 04</span></div>
      <div className="hero-architecture-rings" aria-hidden="true"><span/><span/><span/></div>
      <div className="hero-architecture-mark" aria-hidden="true">C<span>/</span></div>
      <div className="hero-architecture-foot">
        <span className="hero-architecture-kicker">FROM CONCEPT TO CREATION</span>
        <div className="hero-architecture-grid"><span>STRATEGY</span><span>DEVELOPMENT</span><span>SOURCING</span><span>PRODUCTION</span></div>
        <div className="hero-architecture-corridor">CAYMAN ISLANDS <span aria-hidden="true">↔</span> CHINA <span aria-hidden="true">↔</span> CARIBBEAN</div>
      </div>
    </div>
  </section>
  <div className="ticker"><div className="ticker-inner">CONSULTING <span>✳</span> PRODUCT DEVELOPMENT <span>✳</span> GLOBAL SOURCING <span>✳</span> MANUFACTURING <span>✳</span> APPAREL <span>✳</span> AUTOMOTIVE <span>✳</span> CONSTRUCTION <span>✳</span></div></div>
  <section className="trust-bar shell" aria-label="CRÈME capabilities"><span>CAYMAN ROOTS</span><span>GLOBAL SUPPLIER NETWORKS</span><span>TAILORED PROJECT DEVELOPMENT</span><span>PRODUCTION COORDINATION</span></section>

  <section className="section shell business-section" id="what-we-do">
    <div className="section-heading"><div><p className="eyebrow">01 / OUR EXPERTISE</p><h2>ONE PARTNER.<br/><em>FOUR CAPABILITIES.</em></h2></div><p>CRÈME brings business thinking, product creation and international manufacturing coordination together under one roof.</p></div>
    <div className="creme-pillar-grid">{pillars.map(p=><Link href={p.href} className="creme-pillar" key={p.number}><div className="creme-pillar-top"><span>{p.number} / {p.eyebrow}</span><span aria-hidden="true">↗</span></div><div><h3>{p.title}</h3><p>{p.description}</p></div><strong>{p.action} ↗</strong></Link>)}</div>
  </section>

  <section className="enterprise-statement creme-c2c-home"><div className="shell enterprise-statement-grid">
    <div><p className="eyebrow">02 / GLOBAL SOURCING BY CRÈME</p><div className="creme-c2c-lockup"><span>C2C.</span><small>CHINA 2 CARIBBEAN</small></div><h2>GLOBAL MANUFACTURING.<br/><em>CARIBBEAN OPPORTUNITY.</em></h2><p className="statement-intro">Connect your business in the Cayman Islands or wider Caribbean with China-based sourcing opportunities. We help assess suppliers, product specifications, samples, production and freight coordination.</p><Link href="/sourcing#c2c" className="button button-cream">Explore C2C sourcing ↗</Link></div>
    <div className="creme-c2c-panel" aria-label="C2C global trade services"><div className="creme-c2c-panel-top"><span>CRÈME / GLOBAL SOURCING</span><span>CHINA → CARIBBEAN</span></div><div className="creme-c2c-panel-center"><span>CHINA</span><span aria-hidden="true">↗</span><span>CARIBBEAN</span></div><div className="creme-c2c-panel-bottom"><div><span>01</span> DISCOVER</div><div><span>02</span> DEVELOP</div><div><span>03</span> PRODUCE</div><div><span>04</span> COORDINATE</div></div></div>
  </div></section>

  <section className="section shell creme-industries" id="industries">
    <div className="section-heading"><div><p className="eyebrow">03 / INDUSTRIES WE SERVE</p><h2>BEYOND A SINGLE<br/><em>INDUSTRY.</em></h2></div><p>We started in apparel. Today, our sourcing and development model supports a wider range of business requirements.</p></div>
    <div className="creme-industry-grid">{industries.map(industry=><article key={industry.number} className="creme-industry-card"><span className="eyebrow">{industry.number} / INDUSTRY</span><h3>{industry.title}</h3><p>{industry.description}</p><strong>{industry.keywords}</strong></article>)}</div>
    <Link href="/contact" className="section-link">Explore a new product category <span aria-hidden="true">↗</span></Link>
  </section>

  <section className="section shell procurement-spotlight creme-procurement"><div className="spotlight-mark" aria-hidden="true">C/</div><div><p className="eyebrow">04 / PROFESSIONAL PROCUREMENT</p><h2>FROM SPECIFICATION<br/><em>TO EXECUTION.</em></h2><p>Product briefs, supplier comparisons, itemized quotations and purchasing documentation for business and institutional requirements.</p><Link href="/procurement" className="button button-dark">Explore procurement ↗</Link></div></section>

  <section className="section shell"><div className="section-heading"><div><p className="eyebrow">05 / HOW WE WORK</p><h2>CLARITY FROM<br/><em>DAY ONE.</em></h2></div><p>Every project is assessed individually for technical feasibility, supply availability, pricing and delivery requirements.</p></div><div className="steps">{process.map(step=><div className="step" key={step.no}><span>{step.no}</span><h3>{step.title}</h3><p>{step.desc}</p></div>)}</div><Link href="/how-it-works" className="section-link">Understand our process <span aria-hidden="true">↗</span></Link></section>

  <section className="project-banner creme-project-banner"><div className="shell project-banner-inner"><div><p className="eyebrow">LET'S BUILD SOMETHING MEANINGFUL</p><h2>YOUR NEXT IDEA.<br/><em>OUR NEXT PROJECT.</em></h2></div><Link className="button button-dark" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></div></section>
</>}