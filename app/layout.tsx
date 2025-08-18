import type React from "react";
import { Inter } from "next/font/google";
import { SEOHead } from "@/components/seo/seo-head";
import { ScrollProgress } from "@/components/parallax/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { CONTENT } from "@/constants/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: {
      template: "%s | Nived Ram - MERN Stack Developer",
      default: CONTENT.seo.title,
    },
    description: CONTENT.seo.description,
    keywords: CONTENT.seo.keywords,
    authors: [{ name: "Nived Ram" }],
    creator: "Nived Ram",
    publisher: "Nived Ram",
    generator: "v0.app",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://nivedram.online"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "profile",
      locale: "en_US",
      url: "https://nivedram.online",
      siteName: "Nived Ram - Portfolio",
      title: CONTENT.seo.title,
      description: CONTENT.seo.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Nived Ram - MERN Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@nivedram",
      creator: "@nivedram",
      title: CONTENT.seo.title,
      description: CONTENT.seo.description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SEOHead />
      <body className={inter.className}>
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
