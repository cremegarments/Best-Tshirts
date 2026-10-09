export const site = {
  name: "CRÈME",
  legalName: "CRÈME Products",
  descriptor: "CUSTOM APPAREL / MERCHANDISE / PRODUCTION",
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
];

export const process = [
  { no: "01", title: "Tell us the idea", desc: "Share the product type, artwork, quantities, size breakdown and target date." },
  { no: "02", title: "Review your quote", desc: "We assess specifications and provide pricing and an estimated timeline." },
  { no: "03", title: "Approve the details", desc: "Confirm the design proof, quote and payment terms before production begins." },
  { no: "04", title: "We coordinate production", desc: "CRÈME manages approved manufacturing partners, quality and freight coordination." },
  { no: "05", title: "Receive your order", desc: "We confirm final delivery arrangements for your Cayman Islands order." },
];
