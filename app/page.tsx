import Link from "next/link";
import {GarmentVisual} from "@/components/GarmentVisual";
import {ServicesGrid} from "@/components/ServicesGrid";
import {process} from "@/lib/site";
export default function Home() {return <>
  <section className="hero shell"><div className="hero-copy">
    <div className="eyebrow"><span className="online-dot"/> CAYMAN ROOTS. GLOBAL PRODUCTION.</div>
    <h1>GOOD IDEAS.<br/><span className="italic-word">MADE</span> REAL<span className="text-accent">.</span></h1>
    <p>Custom apparel. Merchandise. Production. We take your ideas from the first conversation to the finished product—without the guesswork.</p>
    <div className="hero-actions"><Link href="/quote" className="button button-dark">Get a quote <span aria-hidden="true">↗</span></Link><Link href="/services" className="text-link">Explore services <span aria-hidden="true">↗</span></Link></div>
    <div className="hero-small"><span>EST. 2015</span><span>BASED IN THE CAYMAN ISLANDS</span></div>
  </div><GarmentVisual/></section>
  <div className="ticker"><div className="ticker-inner">SCREEN PRINTING <span>✳</span> EMBROIDERY <span>✳</span> CUSTOM MERCH <span>✳</span> PRIVATE LABEL <span>✳</span> UNIFORMS <span>✳</span> MADE WITH INTENTION <span>✳</span></div></div>
  <section className="section shell"><div className="section-heading"><div><p className="eyebrow">01 / WHAT WE DO</p><h2>THE RIGHT PROCESS.<br/><em>THE RIGHT PRODUCT.</em></h2></div><p>From a single brand launch to ongoing business merchandise, we make production feel simple.</p></div><ServicesGrid limit={6}/><Link href="/services" className="section-link">All services <span>↗</span></Link></section>
  <section className="statement"><div className="shell statement-grid"><div><p className="eyebrow">02 / WHAT WE BELIEVE</p><h2>NOT JUST<br/><em>A LOGO</em><br/>ON A SHIRT.</h2></div><div><p>Better merchandise is intentional. The right fabric. The right print. The right finish. The kind of product people actually want to keep.</p><Link className="button button-outline-light" href="/about">Meet CRÈME <span>↗</span></Link><div className="statement-mark">C<span>®</span></div></div></div></section>
  <section className="section shell"><div className="section-heading"><div><p className="eyebrow">03 / SIMPLE BY DESIGN</p><h2>FROM FIRST MESSAGE<br/><em>TO FINAL DELIVERY.</em></h2></div><p>One point of contact and a clear process for your project.</p></div>
    <div className="steps">{process.map((step)=><div className="step" key={step.no}><span>{step.no}</span><h3>{step.title}</h3><p>{step.desc}</p></div>)}</div>
    <Link href="/how-it-works" className="section-link">Explore our process <span>↗</span></Link>
  </section>
  <section className="project-banner"><div className="shell project-banner-inner"><div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>LET'S MAKE<br/><em>IT HAPPEN.</em></h2></div><Link className="button button-dark" href="/quote">Tell us about it <span>↗</span></Link></div></section>
</>}
