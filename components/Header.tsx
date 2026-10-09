import Link from "next/link";
export function Header() {
  return <header className="header">
    <div className="shell header-inner">
      <Link href="/" className="brand" aria-label="CRÈME homepage">CRÈME<span className="brand-period">.</span><small>PRODUCTS / PRODUCTION</small></Link>
      <nav className="nav" aria-label="Main navigation">
        <Link href="/corporate">Corporate</Link>
        <Link href="/services">Production</Link>
        <Link href="/sourcing">Global sourcing</Link>
        <Link href="/procurement">Procurement</Link>
        <Link href="/work">Our work</Link>
      </nav>
      <Link href="/quote" className="button button-dark header-cta">Request a quote <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu"><summary aria-label="Open navigation">Menu <span aria-hidden="true">☰</span></summary>
        <div className="mobile-links"><Link href="/corporate">Corporate services</Link><Link href="/services">Custom production</Link><Link href="/sourcing">Global sourcing</Link><Link href="/procurement">Procurement & RFQs</Link><Link href="/work">Our work</Link><Link href="/how-it-works">How it works</Link><Link href="/about">About CRÈME</Link><Link href="/contact">Contact</Link><Link href="/quote">Request a quote ↗</Link></div>
      </details>
    </div>
  </header>;
}
