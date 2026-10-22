import Link from "next/link";
export function Header() {
  return <header className="header">
    <div className="shell header-inner">
      <Link href="/" className="brand" aria-label="CRÈME homepage">CRÈME<span className="brand-period">.</span><small>GLOBAL BUSINESS & PRODUCTION</small></Link>
      <nav className="nav" aria-label="Main navigation">
        <Link href="/about">About</Link>
        <Link href="/services">Our services</Link>
        <Link href="/sourcing#c2c">C2C sourcing</Link>
        <Link href="/procurement">Procurement</Link>
        <Link href="/#industries">Industries</Link>
      </nav>
      <Link href="/quote" className="button button-dark header-cta">Request a quote <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu"><summary aria-label="Open navigation">Menu <span aria-hidden="true">☰</span></summary>
        <div className="mobile-links"><Link href="/about">About CRÈME</Link><Link href="/services">Our services</Link><Link href="/sourcing#c2c">C2C global sourcing</Link><Link href="/procurement">Procurement & RFQs</Link><Link href="/#industries">Industries</Link><Link href="/work">Our work</Link><Link href="/corporate">Corporate programs</Link><Link href="/how-it-works">How it works</Link><Link href="/contact">Contact</Link><Link href="/quote">Request a quote ↗</Link></div>
      </details>
    </div>
  </header>;
}
