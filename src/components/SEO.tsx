import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  canonical?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  path = '',
  canonical,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords,
  image,
  noindex = false
}: SEOProps) => {
  const siteUrl = 'https://www.glimps.be';
  const stripTrailingSlash = (url: string) => url.replace(/\/+$/, '');
  const fullUrl = stripTrailingSlash(`${siteUrl}${path}`);
  const canonicalUrl = stripTrailingSlash(canonical || fullUrl);
  const ogImage = image || `${siteUrl}/favicon.png`;

  const robotsContent = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet>
      <html lang="nl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate hreflang */}
      <link rel="alternate" hrefLang="nl-BE" href={fullUrl} />
      <link rel="alternate" hrefLang="nl" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Glimps" />
      <meta property="og:locale" content="nl_BE" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@glimps" />
      <meta name="twitter:creator" content="@glimps" />

      {/* Performance & Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />

      {/* Additional Meta */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#ffffff" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    </Helmet>
  );
};

export default SEO;
