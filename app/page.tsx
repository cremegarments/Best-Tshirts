import Link from "next/link";
import Image from "next/image";

const industries = [
  { title: "Apparel & Uniforms", image: "/images/approved/service-manufacturing.webp", category: "Apparel & Uniforms" },
  { title: "Automotive & Parts", image: "/images/approved/service-automotive-sourcing.webp", category: "Automotive & Parts" },
  { title: "Construction & Building Materials", image: "/images/approved/construction.webp", category: "Construction & Building Materials" },
  { title: "Solar & Renewable Energy", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1100&q=85", category: "Solar & Renewable Energy" },
  { title: "Home & Lifestyle", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=85", category: "Home & Lifestyle" },
  { title: "Jewelry & Gadgets", image: "/images/approved/c2c-jewelry-gadgets-final.jpg", category: "Jewelry & Gadgets" },
  { title: "Consumer Goods", image: "/images/approved/c2c-consumer-goods-final.jpg", category: "Consumer Goods" },
  { title: "Freight & Logistics", image: "/images/approved/c2c-shipping.webp", category: "Freight & Logistics" }
];

export default function Home() {
  return <div className="c2c-new-site">
    <section className="c2c-new-hero" aria-labelledby="c2c-heading">
      <div className="c2c-new-hero-inner">
        <p className="c2c-new-kicker">CHINA <span>✦</span> CAYMAN ISLANDS</p>
        <Image className="c2c-new-hero-logo" src="/C2C_Original_Logo_Fully_Transparent.png" alt="C2C China 2 Cayman — Sourcing, Trading, Global Solutions" width={650} height={360} priority />
        <h1 id="c2c-heading">YOU NEED IT.<br/>WE SOURCE IT.</h1>
        <p className="c2c-new-script">China 2 Cayman.</p>
        <p className="c2c-new-description">Connecting Cayman businesses with Chinese manufacturers through supplier sourcing, procurement, production coordination and international freight solutions.</p>
        <div className="c2c-new-actions">
          <Link href="/quote">REQUEST A SOURCING QUOTE <span aria-hidden="true">→</span></Link>
          <Link href="/services">OUR SERVICES <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
    <section className="c2c-new-industries" id="industries" aria-labelledby="industries-title">
      <h2 id="industries-title" className="c2c-new-section-title">INDUSTRIES WE SERVE</h2>
      <div className="c2c-new-grid">
        {industries.map((industry) => <Link className="c2c-new-card" key={industry.title} href={`/quote?category=${encodeURIComponent(industry.category)}`}>
          {industry.secondaryImage ? <div className="c2c-new-card-collage"><img src={industry.image} alt="" loading="lazy" /><img src={industry.secondaryImage} alt="" loading="lazy" /></div> : industry.image.startsWith("https://") ? <img className="c2c-new-card-photo" src={industry.image} alt="" loading="lazy" /> : <Image src={industry.image} alt="" fill sizes="(max-width: 600px) 50vw, (max-width: 950px) 25vw, 25vw" />}
          <span className="c2c-new-card-title">{industry.title}</span><span className="c2c-new-card-arrow" aria-hidden="true">→</span>
        </Link>)}
      </div>
    </section>
  </div>;
}
