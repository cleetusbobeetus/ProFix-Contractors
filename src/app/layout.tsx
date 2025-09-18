import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProFix Contractors - Professional Home Services",
  description: "Expert plumbing, electrical, and roofing services in the Greater Chicago area. Licensed, insured, and available 24/7 for emergencies. 15+ years of experience with 100% satisfaction guarantee.",
  keywords: "contractor, plumbing, electrical, roofing, home services, emergency repair, Chicago, Illinois",
  authors: [{ name: "ProFix Contractors" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "ProFix Contractors - Professional Home Services",
    description: "Expert plumbing, electrical, and roofing services with 15+ years of experience. Licensed, insured, and available 24/7.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
