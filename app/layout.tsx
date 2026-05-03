import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const metadataBase = new URL("https://calchub.adilhusain.xyz");

export const metadata: Metadata = {
  title: "CalcHub - Free Calculators",
  description:
    "A library of niche calculators for all your needs. Fully SEO-optimized and free to use.",
  metadataBase,
  applicationName: "CalcHub",
  generator: "Next.js",
  authors: [{ name: "CalcHub", url: "https://calchub.adilhusain.xyz" }],
  creator: "CalcHub",
  publisher: "CalcHub",
  keywords: [
    "embeddable calculators",
    "free calculators",
    "finance calculator",
    "health calculator",
    "productivity tools",
    "calculator library",
    "online calculators",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CalcHub - Free Calculators",
    description:
      "A library of niche calculators for all your needs. Fully SEO-optimized and free to use.",
    url: "https://calchub.adilhusain.xyz",
    siteName: "CalcHub",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "CalcHub - Free Calculators",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcHub - Free Calculators",
    description:
      "A library of niche calculators for all your needs. Fully SEO-optimized and free to use.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={space.variable}>
      <body
        className="font-sans antialiased text-black bg-[#f3e5ca] flex flex-col min-h-screen p-4 md:p-6 lg:p-8"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
