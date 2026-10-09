import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
const url = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  title: {default: "CRÈME Products | Corporate Merchandise & Global Sourcing", template: "%s | CRÈME Products"},
  description: "Cayman Islands corporate merchandise, custom apparel manufacturing, uniforms, branded products and international product sourcing. Request a tailored quotation.",
  metadataBase: url ? new URL(url) : undefined,
  openGraph: {title:"CRÈME Products | Corporate Merchandise & Global Sourcing",description:"One partner. More possible. Corporate supply, custom production and global sourcing for Cayman Islands businesses.",type:"website"},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
