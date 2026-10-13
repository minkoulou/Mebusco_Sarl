// Coordonnées et informations centrales du cabinet.
// Numéro secondaire et boîte postale confirmés par Joseph MEBENGA ETOUNDI
// le 25/09/2026 : +237 678 707 872 / BP 12039.
export const site = {
  name: "Mebusco SARL",
  phonePrincipal: "+237 699 939 116",
  phonePrincipalHref: "+237699939116",
  phoneSecondaire: "+237 678 707 872",
  phoneSecondaireHref: "+237678707872",
  whatsapp: "237699939116",
  email: "mebuscosarl@gmail.com",
  bp: "BP 12039",
  ville: "Yaoundé, Cameroun",
  facebook: "https://www.facebook.com/share/1KM2shWWr9/?mibextid=wwXIfr",
  tiktok: "https://vt.tiktok.com/ZSqEQ6f4b",
};

// Les trois offres commerciales de l'approche classique (rapport d'audit,
// priorité 3). Reprend la matière déjà présente dans Approcheclassique.js,
// reformulée en langage client : besoin, livrables, façon de commander.
export const offres = [
  {
    id: "faisabilite",
    label: "Étude de faisabilité",
    accroche: "Décider s'il faut investir, et à quelles conditions.",
    besoin:
      "Vous avez une idée ou un projet et vous voulez savoir s'il est réalisable et rentable avant de vous engager.",
    livrables: [
      "Analyse du marché et de la demande",
      "Faisabilité technique et organisationnelle",
      "Investissements, charges et scénarios de rentabilité",
      "Risques, hypothèses et recommandations",
    ],
    pourDemarrer:
      "Présentation du projet, localisation envisagée, objectifs et données déjà disponibles.",
    ctaLabel: "Faire examiner mon projet",
  },
  {
    id: "business-plan",
    label: "Business plan et modèle financier",
    accroche: "Structurer votre projet et préparer vos échanges financiers.",
    besoin:
      "Vous devez présenter votre projet à des partenaires, banques ou investisseurs avec un dossier solide.",
    livrables: [
      "Modèle économique et stratégie commerciale",
      "Compte de résultat et plan de trésorerie prévisionnels",
      "Plan de financement et hypothèses explicites",
      "Scénarios et points de vigilance",
    ],
    pourDemarrer:
      "Produits ou services envisagés, clients visés, prix, coûts, moyens disponibles et besoin de financement.",
    ctaLabel: "Demander une proposition",
  },
  {
    id: "demarrage",
    label: "Accompagnement au démarrage",
    accroche: "Passer du dossier à la mise en œuvre.",
    besoin:
      "Votre projet ou business plan est prêt : vous voulez être accompagné pour bien démarrer l'activité.",
    livrables: [
      "Plan d'action et calendrier de lancement",
      "Organisation initiale et répartition des responsabilités",
      "Suivi des premières étapes",
      "Tableaux de bord convenus avec le dirigeant",
    ],
    pourDemarrer:
      "Projet ou business plan existant, équipe disponible, moyens engagés et calendrier souhaité.",
    ctaLabel: "Présenter mon besoin",
  },
];

// Options du champ "Prestation souhaitée" du formulaire de contact.
export const prestationOptions = [
  ...offres.map((o) => ({ id: o.id, label: o.label })),
  { id: "sur-mesure", label: "Formation sur mesure" },
  { id: "seminaire", label: "Séminaire entreprises familiales" },
  { id: "export", label: "Accompagnement à l'exportation" },
  { id: "modele", label: "Modèle J.E. Mebenga" },
  { id: "autre", label: "Autre demande" },
];

export function contactLink(prestationId = "") {
  return prestationId
    ? `/contact?prestation=${encodeURIComponent(prestationId)}`
    : "/contact";
}

export function whatsappLink(
  message = "Bonjour Mebusco, je souhaite échanger sur mon projet.",
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Trois missions anonymisées présentées en Références (audit, priorité 5).
export const references = [
  {
    tag: "Industrie · 2024",
    titre: "Étude de faisabilité d'une raffinerie d'or",
    texte:
      "Mission réalisée pour une entreprise publique : étudier la faisabilité technique et économique du projet.",
  },
  {
    tag: "Création d'entreprise",
    titre: "Business plan pour un porteur de projet",
    texte:
      "Élaboration d'un business plan complet pour un client individuel en phase de création.",
  },
  {
    tag: "Client professionnel",
    titre: "Structuration d'un dossier de projet",
    texte:
      "Élaboration d'un business plan et d'un modèle financier pour un client professionnel.",
  },
];