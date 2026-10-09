import Link from "next/link";
import {site} from "@/lib/site";
export function Footer() {
  return <footer className="footer"><div className="shell">
    <div className="footer-top"><div><p className="eyebrow footer-eyebrow">LET'S MAKE SOMETHING</p><h2>YOUR NEXT<br/>PROJECT STARTS <em>HERE.</em></h2><Link className="button button-cream" href="/quote">Start a project <span aria-hidden="true">↗</span></Link></div><div className="footer-meta"><p>GOOD PRODUCTS.<br/>THOUGHTFUL PRODUCTION.<br/>FROM CAYMAN TO BEYOND.</p><Link href="/services">Services</Link><Link href="/how-it-works">Our process</Link><Link href="/contact">Contact</Link></div></div>
    <div className="footer-bottom"><Link href="/" className="footer-brand">CRÈME<span>.</span></Link><p>© {new Date().getFullYear()} {site.legalName}. Cayman Islands.</p><p>MADE WITH INTENTION.</p></div>
  </div></footer>;
}
