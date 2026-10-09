import type {Metadata} from "next";
import Link from "next/link";
import {ServicesGrid} from "@/components/ServicesGrid";
export const metadata:Metadata={title:"Production Services"};
export default function ServicesPage(){return <><section className="subhero shell"><p className="eyebrow">CUSTOM PRODUCTION / 02</p><h1>MADE TO<br/><em>YOUR SPEC.</em></h1><p>From screen printing to full private-label merchandise, CRÈME coordinates products for teams, businesses and brands.</p></section>
<section className="section shell page-section"><ServicesGrid/><div className="info-panel"><div><p className="eyebrow">YOUR PROJECT, YOUR SPECS</p><h2>NOT SURE WHAT<br/><em>YOU NEED?</em></h2></div><div><p>Share your artwork, target quantity, intended use and budget. We can review suitable production methods and provide a tailored quotation.</p><Link href="/quote" className="button button-dark">Request a quote ↗</Link></div></div></section></>}
