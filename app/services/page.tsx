import type {Metadata} from "next";
import Link from "next/link";
import {ServicesGrid} from "@/components/ServicesGrid";
export const metadata:Metadata={title:"Services"};
export default function ServicesPage(){return <><section className="subhero shell"><p className="eyebrow">SERVICES / 01</p><h1>WHAT WE <em>MAKE.</em></h1><p>Print. Stitch. Source. Finish. Custom merchandise built for businesses, teams, events and brands.</p></section>
<section className="section shell page-section"><ServicesGrid/><div className="info-panel"><div><p className="eyebrow">YOUR PROJECT, YOUR SPECS</p><h2>NOT SURE WHAT<br/><em>YOU NEED?</em></h2></div><div><p>Tell us your idea and we can recommend suitable decoration methods, merchandise options and a production plan based on your budget and quantities.</p><Link href="/quote" className="button button-dark">Request a quote ↗</Link></div></div></section></>}
