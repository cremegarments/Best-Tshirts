import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
const url = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  title: {default: "CRÈME | Custom Apparel & Merchandise", template: "%s | CRÈME"},
  description: "Custom apparel, screen printing, embroidery, uniforms and merchandise. Cayman-rooted production management for people building something great.",
  metadataBase: url ? new URL(url) : undefined,
  openGraph: {title:"CRÈME | Custom Apparel & Merchandise",description:"Good ideas. Made real. Cayman-rooted custom apparel and merchandise production.",type:"website"},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
