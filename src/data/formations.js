import { Archive, Compass, BookOpen, LineChart, Handshake } from "lucide-react";

export const formationStats = [
  { value: "15+", label: "Experts" },
  { value: "500+", label: "Certifiés" },
  { value: "98%", label: "Succès" },
];

export const formats = {
  packages: {
    icon: Archive,
    title: 'Formations "Packages"',
    description:
      "Modules standardisés conçus pour répondre aux besoins opérationnels immédiats des entreprises et institutions.",
    items: [
      "Management de projet agile",
      "Intelligence économique",
      "Transformation digitale",
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