import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What We Source | C2C — China 2 Cayman",
  description: "Explore sourcing categories supported by C2C, connecting Cayman businesses with manufacturers and suppliers in China."
};

const categories = [
  { title: "Apparel & Uniforms", image: "/images/approved/service-manufacturing.webp" },
  { title: "Automotive & Parts", image: "/images/approved/service-automotive-sourcing.webp" },
  { title: "Construction & Building Materials", image: "/images/approved/construction.webp" },
  { title: "Solar & Renewable Energy", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1100&q=85" },
  { title: "Home & Lifestyle", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=85" },
  { title: "Jewelry & Gadgets", image: "/images/approved/c2c-jewelry-gadgets-final.jpg" },
  { title: "Consumer Goods", image: "/images/approved/c2c-consumer-goods-final.jpg" },
  { title: "Freight & Logistics", image: "/images/approved/c2c-shipping.webp" }
];

export default function WorkPage() {
  return <>
    <section className="subhero shell">
      <p className="eyebrow">C2C / WHAT WE SOURCE</p>
      <h1>SOURCED WITH PURPOSE.<br/><em>BUILT FOR BUSINESS.</em></h1>
      <p>From apparel and automotive parts to building materials, solar equipment, consumer products and freight, C2C connects Cayman businesses with sourcing and manufacturing opportunities in China. Tell us what you need. We help research suppliers, coordinate quotations and production, and plan international shipping.</p>
    </section>
    <section className="section shell page-section" aria-label="Sourcing categories">
      <div className="c2c-new-grid">
        {categories.map((item) => <Link
          className={`c2c-new-card${["Jewelry & Gadgets", "Consumer Goods"].includes(item.title) ? " c2c-new-card-caption-cleanup" : ""}`}
          href={`/quote?category=${encodeURIComponent(item.title)}`}
          key={item.title}
          aria-label={`Request sourcing for ${item.title}`}
        >
          {item.image.startsWith("https://")
            ? <img className="c2c-new-card-photo" src={item.image} alt="" loading="lazy" />
            : <Image src={item.image} alt="" fill sizes="(max-width: 600px) 50vw, 25vw" />}
          <span className="c2c-new-card-title">{item.title}</span>
          <span className="c2c-new-card-arrow" aria-hidden="true">→</span>
        </Link>)}
      </div>
      <p className="disclaimer" style={{marginTop:"1.5rem"}}>Images illustrate product categories and sourcing capabilities; they are not presented as completed C2C customer projects. Product availability, specifications, pricing and lead times are subject to supplier confirmation.</p>
      <Link href="/quote" className="section-link">Request a sourcing quote <span aria-hidden="true">↗</span></Link>
    </section>
  </>;
}
