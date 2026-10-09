import Link from "next/link";
import {services} from "@/lib/site";
export function ServicesGrid({limit}: {limit?:number}) {
  return <div className="service-grid">{services.slice(0,limit).map((s)=><Link href={`/quote?service=${encodeURIComponent(s.title)}`} className="service-card" key={s.number}>
    <div className="service-card-top"><span>{s.number} / {s.tag}</span><span aria-hidden="true">↗</span></div>
    <div><h3>{s.title}</h3><p>{s.desc}</p></div>
  </Link>)}</div>;
}
