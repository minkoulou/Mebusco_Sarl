import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://mebuscosarl.com";
export const SITE_NAME = "Mebusco SARL";
const DEFAULT_IMAGE = `${SITE_URL}/logo.jpeg`;

/**
 * Composant SEO à placer en tête de chaque page.
 * Centralise title, meta description, canonical, Open Graph, Twitter Card
 * et données structurées JSON-LD (schema.org).
 */
export function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  jsonLd,
  noindex = false,
}) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Données structurées (schema.org) */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

/** JSON-LD Organization + LocalBusiness, réutilisé sur toutes les pages. */
 export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  alternateName: "Mebusco",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}/logo.jpeg`,
  description:
    "Cabinet de conseil, études et formation basé à Yaoundé, spécialisé dans l'accompagnement scientifique, spirituel et culto-endogène des entreprises.",
  founder: {
    "@type": "Person",
    name: "Mebenga Etoundi Joseph",
    jobTitle: "Fondateur & expert consultant",
    alumniOf: "HEC Liège",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "BP 12939",
    addressLocality: "Yaoundé",
    addressCountry: "CM",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+237699939116",
      contactType: "customer service",
      areaServed: "CM",
      availableLanguage: "French",
    },
    {
      "@type": "ContactPoint",
      telephone: "+237678707572",
      contactType: "customer service",
      areaServed: "CM",
      availableLanguage: "French",
    },
  ],
  email: "mebuscosarl@gmail.com",
  sameAs: [],
};

/** Fil d'ariane structuré (JSON-LD BreadcrumbList) pour les pages internes. */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

