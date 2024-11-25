import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
export const metadata: Metadata = {
  title: "Product Frontier",
  description: "Takes you from MVP to company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} font-geist-sans antialiased`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
