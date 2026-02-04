// LAYOUT INVARIANT:
// - SiteHeader/SiteFooter are rendered ONLY here.
// - Page sections must not render global navigation.

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const geistSans = { variable: GeistSans.variable };
const geistMono = { variable: GeistMono.variable };

export const metadata: Metadata = {
  title: "Matrimony Utsav",
  description: "Wedding vendors, venues, and products across India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
