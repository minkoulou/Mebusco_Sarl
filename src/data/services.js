/**
 * Les 3 prestations mises en avant sur l'Accueil et détaillées sur la page
 * /etudes-business-plans, reprises telles que validées avec le client dans
 * l'audit commercial du site.
 */

export const services = [
  {
    id: "faisabilite",
    label: "Étude de faisabilité",
    title: "Décider avant d'investir",
    description:
      "Évaluer le marché, les moyens nécessaires et les conditions de rentabilité de votre projet.",
    audience: "Promoteurs, investisseurs, entreprises et institutions.",
    deliverables: [
      "Analyse du marché et de la demande",
      "Faisabilité technique et organisationnelle",
      "Investissements, charges et scénarios de rentabilité",
      "Risques, hypothèses et recommandations",
    ],
    inputs:
      "Présentation du projet, localisation, objectifs, données disponibles et contraintes.",
    formats:
      "Rapport de synthèse et modèle financier selon le périmètre convenu.",
  },
  {
    id: "business-plan",
    label: "Business plan et modèle financier",
    title: "Structurer un projet solide",
    description:
      "Traduire votre projet en un dossier argumenté et des prévisions cohérentes pour dialoguer avec vos partenaires.",
    audience: "Créateurs, dirigeants et porteurs de projets en développement.",
    deliverables: [
      "Modèle économique et stratégie commerciale",
      "Compte de résultat et plan de trésorerie prévisionnels",
      "Plan de financement et hypothèses explicites",
      "Scénarios et analyse des points de vigilance",
    ],
    inputs:
      "Produits ou services, clients visés, prix, coûts, moyens disponibles et besoins de financement.",
    formats:
      "Business plan en PDF et tableaux financiers modifiables prévus au devis.",
  },
  {
    id: "demarrage",
    label: "Accompagnement au démarrage",
    title: "Passer du projet à l'activité",
    description:
      "Organiser les premières étapes et suivre la mise en œuvre avec des objectifs et des responsabilités clairs.",
    audience: "Créateurs et entreprises lançant une nouvelle activité.",
    deliverables: [
      "Plan d'action et calendrier de lancement",
      "Organisation initiale et répartition des responsabilités",
      "Appui commercial et suivi des premières étapes",
      "Tableaux de bord convenus avec le dirigeant",
    ],
    inputs:
      "Projet ou business plan, équipe, moyens engagés et calendrier souhaité.",
    formats:
      "Plan d'action, supports de pilotage et réunions de suivi selon contrat.",
  },
];