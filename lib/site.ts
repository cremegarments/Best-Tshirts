export const site = {
  name: "CRÈME",
  legalName: "CRÈME Products",
  descriptor: "CONSULTING / PRODUCT DEVELOPMENT / GLOBAL SOURCING / PRODUCTION",
  since: "2015",
  location: "Cayman Islands",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

export const services = [
  { number: "01", title: "Screen printing", desc: "Bold, durable graphics for tees, teams, events and everyday merchandise.", tag: "APPAREL" },
  { number: "02", title: "Embroidery", desc: "Clean stitched branding for hats, polos, workwear and uniforms.", tag: "DETAIL" },
  { number: "03", title: "DTF transfers", desc: "Color-rich prints for detailed artwork and flexible merchandise runs.", tag: "PRINT" },
  { number: "04", title: "Uniform programs", desc: "Consistent apparel for schools, hospitality teams, contractors and companies.", tag: "BUSINESS" },
  { number: "05", title: "Headwear & accessories", desc: "Custom caps, bags and branded essentials developed around your idea.", tag: "GOODS" },
  { number: "06", title: "Private-label production", desc: "From garment selection to custom labels and finished branded products.", tag: "DEVELOPMENT" },
  { number: "07", title: "Corporate merchandise", desc: "Branded gifting, staff kits, office essentials and event programs.", tag: "CORPORATE" },
  { number: "08", title: "Custom packaging", desc: "Presentation boxes, labels and branded packaging made to specification.", tag: "PACKAGING" },
  { number: "09", title: "Global sourcing", desc: "A broader range of products identified and coordinated through international suppliers.", tag: "SOURCING" },
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
