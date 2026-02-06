// LAYOUT INVARIANT:
// - SiteHeader/SiteFooter are rendered ONLY here.
// - Page sections must not render global navigation.

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohan Utsav",
  description: "Wedding vendors, venues, and products across India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
