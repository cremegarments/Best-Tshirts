export const site = {
  name: "CRÈME",
  legalName: "CRÈME Products",
  descriptor: "CONSULTING / PRODUCT DEVELOPMENT / GLOBAL SOURCING / PRODUCTION",
  since: "2015",
  location: "Cayman Islands",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

export const services = [
  { number: "01", title: "Business consulting", desc: "Product strategy, sourcing feasibility, scope and commercial planning for new business initiatives.", tag: "CONSULTING" },
  { number: "02", title: "Brand & product development", desc: "From ideas, reference images and specifications to brand-ready products and manufacturing briefs.", tag: "DEVELOPMENT" },
  { number: "03", title: "Global sourcing", desc: "C2C China 2 Caribbean supplier research, quotations, sampling and international product sourcing.", tag: "C2C" },
  { number: "04", title: "Manufacturing & production coordination", desc: "Partner coordination for approved specifications, sample reviews, production needs and delivery planning.", tag: "MANUFACTURING" },
  { number: "05", title: "Private-label production", desc: "Product development, private labels, garment trims, branding and finished merchandise.", tag: "PRIVATE LABEL" },
  { number: "06", title: "Corporate merchandise", desc: "Branded gifting, staff kits, office essentials and event merchandise programs.", tag: "CORPORATE" },
  { number: "07", title: "Screen printing", desc: "Durable graphic printing for apparel, teams, brands and corporate products.", tag: "APPAREL" },
  { number: "08", title: "Embroidery", desc: "Stitched branding for caps, polos, uniforms and business merchandise.", tag: "DETAIL" },
  { number: "09", title: "DTF transfers", desc: "Detailed, color-rich designs for apparel and merchandise programs.", tag: "PRINT" },
  { number: "10", title: "Uniform programs", desc: "Consistent uniforms and workwear for teams, schools, hospitality and contractors.", tag: "WORKWEAR" },
  { number: "11", title: "Headwear & accessories", desc: "Custom hats, bags and branded products developed around project requirements.", tag: "ACCESSORIES" },
  { number: "12", title: "Custom packaging", desc: "Labels, presentation boxes, protective packaging and other brand-ready finishing.", tag: "PACKAGING" },
];

export const productionSteps = [
  { no: "01", title: "Tell us the idea", desc: "Tell us what you want to build, source or develop, with references, quantities and your target date." },
  { no: "02", title: "Review your quote", desc: "We review requirements, feasibility, supplier options, estimated pricing and timelines." },
  { no: "03", title: "Approve the details", desc: "Approve the agreed scope, specifications, quotation and payment terms before work begins." },
  { no: "04", title: "We coordinate production", desc: "CRÈME coordinates with approved suppliers and partners on production requirements, quality and freight." },
  { no: "05", title: "Receive your order", desc: "We coordinate agreed delivery arrangements to your specified destination." },
];

// Preserve the existing page imports without shadowing Node.js process.
export { productionSteps as process };
