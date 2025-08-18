"use client";

import Head from "next/head";
import { CONTENT } from "@/constants/content";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "/og-image.png",
  noindex = false,
}: SEOHeadProps) {
  const siteTitle = title
    ? `${title} | ${CONTENT.seo.title}`
    : CONTENT.seo.title;
  const siteDescription = description || CONTENT.seo.description;
  const siteUrl = "https://nivedram.online";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nived Ram",
    jobTitle: "MERN Stack Developer",
    description:
      "Experienced software developer specializing in React.js, Node.js, and modern web technologies",
    url: siteUrl,
    image: `${siteUrl}/profile-image.jpg`,
    email: "nivedchempakam@gmail.com",
    telephone: "+91-8086-432-237",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "India",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "India",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Mykare Health",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "IBVE - Institute of Basic and Vocational Education",
    },
    knowsAbout: [
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "MERN Stack",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
    ],
    sameAs: [
      "https://github.com/nived-ram",
      "https://linkedin.com/in/nived-ram",
      "https://twitter.com/nivedram",
    ],
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${siteUrl}/portfolio`,
      },
    ],
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={CONTENT.seo.keywords} />
      <meta name="author" content="Nived Ram" />
      <meta
        name="robots"
        content={noindex ? "noindex,nofollow" : "index,follow"}
      />
      <meta name="language" content="en" />
      <meta name="geo.region" content="IN-KL, IN-KA" />
      <meta name="geo.placename" content="Kochi, Bangalore" />
      <meta name="geo.position" content="9.9312;76.2673;12.9716;77.5946" />
      <meta name="ICBM" content="9.9312, 76.2673, 12.9716, 77.5946" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="profile" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Nived Ram - Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="profile:first_name" content="Nived" />
      <meta property="profile:last_name" content="Ram" />
      <meta property="profile:username" content="nivedram" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nivedram" />
      <meta name="twitter:creator" content="@nivedram" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#667eea" />
      <meta name="msapplication-TileColor" content="#667eea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Nived Ram" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" sizes="180x180" href="/og-image.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/og-image.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/og-image.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
    </Head>
  );
}
