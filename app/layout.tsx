import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  description: "Takes you from MVP to company",
  metadataBase: new URL("https://product-five-lovat.vercel.app/"),
  keywords: ["modernize your manufacturing", 'transfrom manufacturing','modern solutions for your business', 'transfrom manufacturing'],
  title: {
    default:"Product Frontier",
    template: `%s | Product Frontier`
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    description: 'Takes you from MVP to company',
    images: [
      {
        url: '/images/image3.png',
        width: 1200,
        height: 630,
        alt: 'product frontier',
      }
    ],
  },
  robots:{
    index: true,
    follow: true,
    googleBot:{
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
    'max-image-preview': 'large'

    }
  }
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
