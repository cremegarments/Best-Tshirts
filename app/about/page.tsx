import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | C2C — China 2 Cayman",
  description: "Founded as CRÈME Products in the Cayman Islands in 2015, now evolved into C2C — China 2 Cayman, connecting Cayman businesses with Chinese sourcing and manufacturing."
};

export default function AboutPage() {
  return <>
    <section className="subhero shell">
      <p className="eyebrow">OUR STORY</p>
      <h1>FROM CRÈME TO C2C.<br/><em>LOCAL ROOTS. GLOBAL REACH.</em></h1>
      <p>Founded in the Cayman Islands in 2015, CRÈME Products grew from custom apparel and merchandise into C2C — China 2 Cayman: a dedicated connection between Cayman businesses and Chinese manufacturers and suppliers.</p>
    </section>
    <section className="section shell about-grid">
      <div className="about-big">2015<span>— PRESENT</span></div>
      <div>
        <p className="eyebrow">OUR JOURNEY</p>
        <h2>BUILT IN CAYMAN.<br/><em>CONNECTED TO CHINA.</em></h2>
        <p>Our story began in 2015 with CRÈME Products, a Cayman Islands business focused on custom apparel, merchandise, branding and product development. Working with manufacturers to turn ideas into finished products taught us what matters most: dependable suppliers, clear communication and attention to detail.</p>
        <p>As our experience and relationships with manufacturers in China grew, we saw an opportunity to serve Cayman businesses on a much larger scale. Businesses need more than clothing. They need reliable access to building materials, automotive parts, solar products, home essentials, consumer goods, jewelry, gadgets and freight solutions.</p>
        <p>That evolution led to <strong>C2C — China 2 Cayman</strong>. Building on the foundation of CRÈME, C2C focuses on supplier sourcing, procurement, quotation coordination, manufacturing support and international shipping planning for Cayman businesses.</p>
        <p>Our roots are Caymanian. Our reach is international. Our mission is simple: <strong>You need it. We source it.</strong></p>
        <Link href="/services" className="button button-dark">Explore our sourcing services ↗</Link>
      </div>
    </section>
  </>;
}
