import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "AI Agency - Next Generation Digital Solutions",
  description: "Революционная платформа для автоматизированной разработки IT-решений с использованием AI",
  keywords: "AI agency, artificial intelligence, web development, automation, digital products, market analysis",
  authors: [{ name: "AI Agency Team" }],
  openGraph: {
    title: "AI Agency - Next Generation Digital Solutions",
    description: "Революционная платформа для автоматизированной разработки IT-решений",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/logogo.png",
        width: 1200,
        height: 630,
        alt: "AI Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agency - Next Generation Digital Solutions",
    description: "Революционная платформа для автоматизированной разработки IT-решений",
    images: ["/logogo.png"],
  },
  icons: {
    icon: [
      { url: "/logogo.png" },
      { url: "/logogo.png", sizes: "16x16", type: "image/png" },
      { url: "/logogo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logogo.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logogo.png",
        color: "#4F46E5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/logogo.png" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
