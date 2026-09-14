import Head from "next/head";
import React from "react";

export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const DEFAULT_TITLE =
  "Sauvik Banerjjee | Tech Futurist, Author, Academic, Global C-Suite";
const DEFAULT_DESCRIPTION =
  "Sauvik Banerjjee is the global CEO for Rezolve. Sauvik is a Tech Futurist, Author, Academic, global C-suite Leader, Ex-CTO Tata Digital, Tata Neu, TATA Cliq and has worked with many known brands";
const DEFAULT_IMAGE =
  "https://sauvikbanerjjee.com/sauvik-banerjjee-og-image.png";
const SITE_URL = "https://sauvikbanerjjee.com";

export const Seo: React.FC<SeoProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  publishedTime,
  author = "Sauvik Banerjjee",
  noIndex = false,
}) => {
  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical.startsWith("/") ? "" : "/"}${canonical}`
    : undefined;

  const imageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${SITE_URL}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`
    : DEFAULT_IMAGE;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Sauvik Banerjjee" />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sauvikbanerjjee" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};

export default Seo;
