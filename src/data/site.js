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

// Séminaire résidentiel "Entreprises familiales" — dates et tarif confirmés.
// Lieu (hôtel) et intervention de l'avocat encore à confirmer : ne jamais
// les présenter comme définitifs tant que Joseph ne l'a pas validé.
export const seminar = {
  path: "/seminaire-entreprises-familiales",
  title: "Entreprises familiales : jeux et enjeux de la pérennité",
  dates: "24 au 26 novembre 2026",
  duree: "3 jours, 2 nuitées",
  price: "350 000 FCFA TTC",
  priceDetail: "par participant",
  lieu: "Région de Yaoundé — hôtel à confirmer",
  inclus: [
    "Les trois jours de formation et les supports pédagogiques",
    "Deux nuitées avec petit déjeuner",
    "Les trois déjeuners et les pauses café du programme",
    "Le dîner du deuxième jour avec boissons",
    "Une attestation de participation",
  ],
  exclus:
    "Le déplacement jusqu'à l'hôtel, le dîner du premier jour et toute prestation non listée ci-dessus.",
  programme: [
    {
      jour: "Jour 1 · 24 novembre",
      titre: "Comprendre pour diagnostiquer",
      contenu:
        "Famille, entreprise et patrimoine ; dépendance au fondateur ; facteurs de fragilité ; longévité des entreprises plurigénérationnelles.",
      atelier: "Atelier : diagnostic de votre entreprise.",
    },
    {
      jour: "Jour 2 · 25 novembre",
      titre: "Gouverner pour transmettre",
      contenu:
        "Gouvernance, rôles des héritiers et dirigeants, préparation de la transmission, expériences internationales et regard africain.",
      atelier: "Soirée : dîner-échange entre pairs.",
    },
    {
      jour: "Jour 3 · 26 novembre",
      titre: "Agir pour pérenniser",
      contenu:
        "Clinique des entreprises familiales, schéma cible de gouvernance et de transmission, plan d'action progressif.",
      atelier: "Atelier : feuille de route et décisions prioritaires.",
    },
  ],
  public:
    "Dirigeants-fondateurs, actionnaires familiaux, successeurs, héritiers en préparation et cadres dirigeants d'entreprises familiales.",
  intervenants:
    "Joseph MEBENGA ETOUNDI, ingénieur commercial HEC Liège. Une intervention d'avocat d'affaires sur les dimensions juridiques est prévue ; l'intervenant reste à confirmer.",
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