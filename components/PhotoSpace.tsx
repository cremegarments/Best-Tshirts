import Image from "next/image";

// Reuse only supplied approved photographs across the industry directory.
const approved: Record<string, {file:string;alt:string}> = {
  "Premium monochrome garments": {file:"service-manufacturing",alt:"Apparel production in a garment factory"},
  "Black luxury vehicle interior": {file:"automotive",alt:"Luxury automotive interior"},
  "Construction at sunset": {file:"construction",alt:"Construction project at sunset"}
};
export function PhotoSpace({label}:{label:string}) {
  const photo=approved[label];
  if(!photo) return null;
  return <div className="directory-photo"><Image src={`/images/approved/${photo.file}.webp`} alt={photo.alt} fill sizes="(max-width: 760px) 90vw, 410px" /></div>;
}
