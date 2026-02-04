
import React from 'react';

const SEO: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "mediabot.ai Premium Domain",
    "image": "https://mediabot.ai.rdm.bz/og-image.jpg",
    "description": "Premium AI domain for sale. Mediabot.ai is the perfect name for AI content creation, media automation, and automated news systems.",
    "brand": {
      "@type": "Brand",
      "name": "Rare Domains Marketplace"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://rdm.bz/domain/mediabot.ai",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "RDM (Rare Domains Marketplace)"
      }
    }
  };

  return (
    <>
      <title>mediabot.ai | Premium AI & Media Domain Name for Sale</title>
      <meta name="description" content="Discover the power of mediabot.ai - the ultimate domain for AI media tools, content automation, and digital journalism. Secure this asset today." />
      <meta name="keywords" content="mediabot, ai media, content automation, domain for sale, premium ai domain, rdm.bz, rami kassas, atom, godaddy" />
      
      {/* Open Graph */}
      <meta property="og:title" content="mediabot.ai | Future-Ready Media Domain" />
      <meta property="og:description" content="Acquire mediabot.ai to lead the AI media revolution. High CPC, High Search Volume." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mediabot.ai.rdm.bz/" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="mediabot.ai | Premium Domain for Sale" />
      <meta name="twitter:description" content="The perfect identity for your next AI Media startup." />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </>
  );
};

export default SEO;
