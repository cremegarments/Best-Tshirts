import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
const url = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  title: {default: "CRÈME Products | Consulting, Product Development & Global Sourcing", template: "%s | CRÈME Products"},
  description: "Cayman Islands business consulting, brand and product development, global sourcing and manufacturing coordination across apparel, automotive and construction.",
  metadataBase: url ? new URL(url) : undefined,
  openGraph: {title:"CRÈME Products | Corporate Merchandise & Global Sourcing",description:"Your vision. Our expertise. No boundaries. Consulting, product development and China-to-Caribbean sourcing by CRÈME.",type:"website"},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
