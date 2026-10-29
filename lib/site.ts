export const site = {
  name: "CRÈME",
  legalName: "CRÈME Products",
  descriptor: "CONSULTING / PRODUCT DEVELOPMENT / GLOBAL SOURCING / PRODUCTION",
  since: "2015",
  location: "Cayman Islands",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

export const services = [
  { number: "01", title: "China-to-Cayman sourcing", desc: "Identify suitable manufacturers and suppliers in China, compare options and source products for Cayman businesses.", tag: "SOURCING" },
  { number: "02", title: "Procurement & quotations", desc: "Coordinate product requirements, supplier quotations, samples and purchasing plans before an order is approved.", tag: "PROCUREMENT" },
  { number: "03", title: "Manufacturing & production coordination", desc: "Coordinate specifications, sampling, production milestones and quality requirements with selected manufacturing partners.", tag: "MANUFACTURING" },
  { number: "04", title: "Freight & logistics coordination", desc: "Help plan China-to-Cayman shipping, cargo documentation and delivery arrangements with logistics providers.", tag: "LOGISTICS" },
  { number: "05", title: "Construction & building materials", desc: "Source building materials, aluminum systems, fittings and project-specific construction products.", tag: "CONSTRUCTION" },
  { number: "06", title: "Automotive parts & components", desc: "Source replacement parts, accessories and automotive components using model and specification details.", tag: "AUTOMOTIVE" },
  { number: "07", title: "Solar & renewable energy", desc: "Explore solar panels, inverters, batteries and related energy equipment through supplier quotation requests.", tag: "SOLAR" },
  { number: "08", title: "Consumer goods & lifestyle", desc: "Source home essentials, packaged consumer products, jewelry, gadgets and other commercial merchandise.", tag: "PRODUCTS" },
  { number: "09", title: "Business consulting & product development", desc: "Develop sourcing briefs, product specifications, private-label concepts and practical procurement strategies.", tag: "DEVELOPMENT" },
  { number: "10", title: "Apparel & uniform production", desc: "Custom apparel, workwear, uniforms and merchandise programs built on our CRÈME manufacturing experience.", tag: "APPAREL" },
  { number: "11", title: "Printing, embroidery & branding", desc: "Screen printing, embroidery, DTF transfers and branded finishing for apparel and promotional goods.", tag: "BRANDING" },
  { number: "12", title: "Private label & custom packaging", desc: "Coordinate private-label products, branded packaging, labeling and presentation materials with suppliers.", tag: "PRIVATE LABEL" },
];

export const productionSteps = [
  { no: "01", title: "Tell us the idea", desc: "Tell us what you want to build, source or develop, with references, quantities and your target date." },
  { no: "02", title: "Review your quote", desc: "We review requirements, feasibility, supplier options, estimated pricing and timelines." },
  { no: "03", title: "Approve the details", desc: "Approve the agreed scope, specifications, quotation and payment terms before work begins." },
  { no: "04", title: "We coordinate production", desc: "C2C coordinates with trusted manufacturers and suppliers in China to manage production requirements, quality standards, and international freight arrangements." },
  { no: "05", title: "Receive your order", desc: "We coordinate agreed delivery arrangements to your specified destination." },
];

// Preserve the existing page imports without shadowing Node.js process.
export { productionSteps as process };
