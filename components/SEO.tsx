
import React from 'react';

const SEO: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "mediabot.ai Premium Domain",
    "image": "https://mediabot.ai.rdm.bz/og-image.jpg",
    "description": "Premium AI domain for sale. mediabot.ai is the elite identity for AI-driven media automation and content ecosystems.",
    "brand": {
      "@type": "Brand",
      "name": "Rare Domains Marketplace"
    },
    "sku": "DOMAIN-MEDIABOT-AI",
    "offers": {
      "@type": "Offer",
      "url": "https://rdm.bz/domain/mediabot.ai",
      "priceCurrency": "USD",
      "price": "135000.00",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": "Rami Kassas",
        "url": "https://rdm.bz"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          }
        }
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Domain Age",
        "value": "7 Years"
      },
      {
        "@type": "PropertyValue",
        "name": "Extension",
        "value": ".ai (Artificial Intelligence)"
      },
      {
        "@type": "PropertyValue",
        "name": "Estimated CPC",
        "value": "$25.00"
      }
    ]
  };

  return (
    <>
      <title>mediabot.ai | Premium AI & Media Domain for Sale ($135,000)</title>
      <meta name="description" content="Acquire mediabot.ai for $135,000. The premier domain for AI media automation. 7 years old, high CPC, and high search volume. Available via RDM, GoDaddy, and Atom." />
      <meta name="keywords" content="mediabot.ai, ai domain for sale, media automation domain, buy mediabot, premium ai assets, rami kassas, rare domains marketplace" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content="mediabot.ai | Future-Ready Media Domain for Sale" />
      <meta property="og:description" content="Secure this high-value AI media asset for $135,000. Perfect for AI startups and automated news agencies." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mediabot.ai.rdm.bz/" />
      <meta property="og:image" content="https://mediabot.ai.rdm.bz/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="mediabot.ai | Premium AI Domain Available" />
      <meta name="twitter:description" content="The ultimate identity for AI Media. Secure it now via RDM." />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </>
  );
};

export default SEO;
