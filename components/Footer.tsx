import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return <footer className="footer"><div className="shell">
    <div className="footer-top"><div><p className="eyebrow footer-eyebrow">LET'S WORK TOGETHER</p><h2>ONE PARTNER.<br/><em>MORE POSSIBLE.</em></h2><Link className="button button-cream" href="/quote">Start an inquiry <span aria-hidden="true">↗</span></Link></div><div className="footer-meta"><p>FOUNDED IN CAYMAN.<br/>CONNECTED TO CHINA.<br/>SOURCING WITHOUT BORDERS.</p><Link href="/about">Our story</Link><Link href="/services">Sourcing & services</Link><Link href="/sourcing#c2c">Global sourcing</Link><Link href="/procurement">Procurement & RFQs</Link><Link href="/industries">Industries</Link><Link href="/corporate">Corporate programs</Link><Link href="/work">Our work</Link><Link href="/contact">Contact</Link></div></div>
    <div className="footer-bottom"><Link href="/" className="footer-brand footer-original-logo" aria-label="C2C — China 2 Cayman home"><Image src="/C2C_Original_Logo_Fully_Transparent.png" alt="C2C — China 2 Cayman. Sourcing, Trading, Global Solutions." width={500} height={300} style={{width:"min(100%, 420px)",height:"auto",objectFit:"contain"}} /></Link><p>© {new Date().getFullYear()} C2C — China 2 Cayman. Built on the foundation of CRÈME Products (est. 2015), Cayman Islands.</p><p>BUILT AROUND YOUR BUSINESS.</p></div>
  </div></footer>;
}
