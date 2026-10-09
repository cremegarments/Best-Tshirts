import Link from "next/link";
export function Header() {
  return <header className="header">
    <div className="shell header-inner">
      <Link href="/" className="brand" aria-label="CRÈME homepage">CRÈME<span className="brand-period">.</span><small>PRODUCTS / PRODUCTION</small></Link>
      <nav className="nav" aria-label="Main navigation">
        <Link href="/services">Services</Link>
        <Link href="/work">Our Work</Link>
        <Link href="/how-it-works">Process</Link>
        <Link href="/about">About</Link>
      </nav>
      <Link href="/quote" className="button button-dark header-cta">Get a quote <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu"><summary aria-label="Open navigation">Menu <span aria-hidden="true">☰</span></summary>
        <div className="mobile-links"><Link href="/services">Services</Link><Link href="/work">Our Work</Link><Link href="/how-it-works">How It Works</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/quote">Get a Quote ↗</Link></div>
      </details>
    </div>
  </header>;
}
