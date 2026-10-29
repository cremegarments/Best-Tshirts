"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function Header() {
  const pathname = usePathname();
  if (pathname !== "/") return <header className="header"><div className="shell header-inner"><Link href="/" className="brand">C2C<small>CHINA 2 CAYMAN</small></Link><Link href="/quote" className="button button-dark header-cta">Request a quote →</Link></div></header>;
  return <header className="c2c-new-header">
    <Link href="/" className="c2c-new-header-brand" aria-label="C2C China 2 Cayman homepage"><strong>C<span>2</span>C</strong><small>CHINA 2 CAYMAN</small></Link>
    <nav className="c2c-new-header-links" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/#industries">Industries</Link><Link href="/how-it-works">Our Process</Link><Link href="/contact">Contact</Link></nav>
    <Link href="/quote" className="c2c-new-header-quote">REQUEST A QUOTE <span aria-hidden="true">→</span></Link>
    <details className="c2c-new-menu"><summary aria-label="Open navigation menu"><span aria-hidden="true">☰</span></summary><nav aria-label="Mobile navigation"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/#industries">Industries</Link><Link href="/how-it-works">Our Process</Link><Link href="/contact">Contact</Link><Link href="/quote">Request a Quote</Link></nav></details>
  </header>;
}
