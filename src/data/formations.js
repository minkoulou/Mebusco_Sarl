import { Archive, Compass, BookOpen, LineChart, Handshake } from "lucide-react";
import { seminar } from "./seminaire";

/**
 * Prochaine session ouverte aux préinscriptions : le séminaire résidentiel,
 * dont les informations viennent de src/data/seminaire.js.
 */
export const nextSession = {
  active: true,
  title: seminar.title,
  date: seminar.dates,
  duree: seminar.duree,
  lieu: seminar.lieu,
  price: seminar.prix,
};

export const formats = {
  packages: {
    icon: Archive,
    title: 'Formations "Packages"',
    description:
      "Modules standardisés conçus pour répondre aux besoins opérationnels immédiats des entreprises et institutions.",
    items: [
      "Introduction au modèle J.E. Mebenga de l'entreprise métaphysique",
      "Utilisation des modèles stratégiques pour le diagnostic et l'élaboration des plans stratégiques des entreprises",
      "Importance des modèles économiques et financiers pour garantir le succès des entreprises",
      "Vendre à l'étranger : outils, techniques et méthodes",
      "Mieux préparer sa retraite",
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