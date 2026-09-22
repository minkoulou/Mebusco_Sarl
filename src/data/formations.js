import { Archive, Compass, BookOpen, LineChart, Handshake } from "lucide-react";

export const formationStats = [
  { value: "15+", label: "Experts" },
  { value: "500+", label: "Certifiés" },
  { value: "98%", label: "Succès" },
];

/**
 * Prochaine session de formation programmée.
 * - Mets `active: false` quand aucune session n'est encore programmée :
 *   la page affichera alors automatiquement "Nous consulter pour les dates et prix".
 * - `zoomLink` est optionnel : si vide, le bouton "Rejoindre sur Zoom" ne s'affiche pas.
 */
export const nextSession = {
  active: true,
  title: "Prochaine session de formation",
  date: "15 Octobre 2026",
  heure: "14h00 – 17h00 (GMT+1)",
  mode: "En ligne (Zoom)",
  zoomLink: "https://zoom.us/j/0000000000",
};

export const formats = {
  packages: {
    icon: Archive,
    title: 'Formations "Packages"',
    description:
      "Modules standardisés conçus pour répondre aux besoins opérationnels immédiats des entreprises et institutions.",
    items: [
      
      "Introduction au modèle J.E. MEBENGA de l’entreprise métaphysique",
      "Utilisation des modèles stratégiques pour le le diagnostic et l’élaboration des plans stratégiques des entreprises",
      "Importance des modèles économiques et financiers pour garantir le succès des entreprises",
      "Vendre à l’étranger : outils, techniques et méthodes",
      "Mieux préparer sa retraite"


// Nous consulter pour les dates et prix
 
    ],
    ctaLabel: "Consulter le catalogue",
  },
  surMesure: {
    icon: Compass,
    title: "Ingénierie Sur-Mesure",
    description:
      "Co-construction de programmes spécifiques adaptés à votre culture organisationnelle et vos défis stratégiques.",
    tags: ["Audit préalable", "Accompagnement", "ROI mesurable"],
    ctaLabel: "Demander un devis",
  },
};

export const methodology = [
  {
    key: "theorie",
    icon: BookOpen,
    title: "Théorie fondamentale",
    description: "Acquisition des concepts clés et des cadres de réflexion stratégique.",
  },
  {
    key: "analyse",
    icon: LineChart,
    title: "Analyse de cas",
    description: "Immersion dans des scénarios réels pour forger le jugement critique.",
  },
  {
    key: "ateliers",
    icon: Handshake,
    title: "Ateliers pratiques",
    description: "Mise en situation immédiate pour ancrer les nouveaux réflexes.",
  },
];