import { siteConfig } from "../config/site";

function FoodBusinessStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
    description: siteConfig.seo.defaultDescription,
    telephone: siteConfig.contacts.primary.phoneNumber,
    email: siteConfig.contacts.primary.email,
    areaServed: siteConfig.business.serviceArea,
    servesCuisine: ["South African", "Indian", "Savouries"],
    priceRange: "R",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default FoodBusinessStructuredData;
