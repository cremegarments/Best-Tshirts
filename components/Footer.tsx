import Link from "next/link";
import {site} from "@/lib/site";
export function Footer() {
  return <footer className="footer"><div className="shell">
    <div className="footer-top"><div><p className="eyebrow footer-eyebrow">LET'S WORK TOGETHER</p><h2>ONE PARTNER.<br/><em>MORE POSSIBLE.</em></h2><Link className="button button-cream" href="/quote">Start an inquiry <span aria-hidden="true">↗</span></Link></div><div className="footer-meta"><p>CAYMAN ROOTS.<br/>GLOBAL PRODUCTION.<br/>THOUGHTFUL DELIVERY.</p><Link href="/corporate">Corporate merchandise</Link><Link href="/services">Custom production</Link><Link href="/sourcing">Global sourcing</Link><Link href="/procurement">Procurement & RFQs</Link><Link href="/contact">Contact</Link></div></div>
    <div className="footer-bottom"><Link href="/" className="footer-brand">CRÈME<span>.</span></Link><p>© {new Date().getFullYear()} {site.legalName}. Cayman Islands.</p><p>BUILT AROUND YOUR BUSINESS.</p></div>
  </div></footer>;
}
