import {
  ClipboardCheck,
  TrendingUp,
  Globe,
  Target,
  RotateCcw,
  Gem,
  HandHelping,
  MapPinned,
} from "lucide-react";

// Onglets de navigation rapide (ancrent vers les 4 premières sections).
export const quickTabs = [
  { id: "diagnostic", label: "Diagnostic" },
  { id: "etudes", label: "Études" },
  { id: "export", label: "Export" },
  { id: "planification", label: "Stratégie" },
];

export const sections = [
  {
    id: "diagnostic",
    icon: ClipboardCheck,
    title: "Diagnostic d'entreprise",
    type: "grouped-list",
    groups: [
      {
        subtitle: "Diagnostic stratégique",
        items: [
          "analyse de l'environnement interne et externe (national/international) ;",
          "analyse de la dynamique du secteur et des tendances prospectives ;",
          "analyse des choix stratégiques opérés ;",
          "simulation des scénarios probables d'évolution.",
        ],
      },
      {
        subtitle: "Diagnostic opérationnel",
        items: [
          "Diagnostic commercial et marketing",
          "Diagnostic de production",
          "Diagnostic financier",
          "Diagnostic des ressources humaines",
          "Diagnostic organisationnel",
          "Diagnostic des procédures",
          "Étude et analyse de coûts de revient",
        ],
      },
    ],
  },
  {
    id: "etudes",
    icon: TrendingUp,
    title:
      "Études socio-économiques — Élaboration des projets, modèles économiques et financiers & Business Plan",
    type: "list",
    items: [
      "Études commerciales et marketing",
      "Études fonctionnelles",
      "Études sectorielles",
      "Études socio-économiques",
      "Élaboration des projets",
      "Élaboration des modèles économiques et financiers",
      "Élaboration des business plans",
    ],
  },
  {
    id: "export",
    icon: Globe,
    title: "Accompagnement à l'exportation",
    type: "list",
    items: [
      "évaluation et mise à niveau de la capacité d'exportation ;",
      "prospection commerciale ;",
      "étude des marchés visés ;",
      "conseils sur la méthode d'exportation ;",
      "recherche de distributeurs/partenaires ;",
      "mise en place d'un réseau de distribution à l'étranger ;",
      "participation aux salons et foires ;",
      "lancement des produits à l'étranger ;",
      "formation du personnel aux techniques de prospection, vente et négociation internationale.",
    ],
  },
  {
    id: "planification",
    icon: Target,
    title: "Planification stratégique",
    type: "framework-grid",
    items: ["ADL", "PORTER", "BCG", "ETC."],
  },
  {
    id: "restructuration",
    icon: RotateCcw,
    title: "Restructuration d'entreprise",
    type: "list",
    items: [
      "Élaboration du diagnostic d'entreprise",
      "Élaboration d'un business plan de restructuration",
      "Accompagnement à la recherche des financements",
    ],
  },
  {
    id: "minier",
    icon: Gem,
    title:
      "Accompagnement des opérateurs du secteur minier dans l'obtention des titres et autorisations",
    type: "list",
    items: [
      "Élaboration des dossiers pour l'obtention des titres miniers, des autorisations d'ouverture et des agréments pour les unités de fusion et unités d'affinage",
      "Appui logistique et technique pour la réalisation des activités d'exploration et d'exploitation minière",
    ],
  },
  {
    id: "conseils",
    icon: HandHelping,
    title: "Conseils & assistance création et au développement des entreprises",
    type: "list",
    items: [
      "modèles économiques/financiers et business plan de création ;",
      "assistance au démarrage des activités et mise en place des structures ;",
      "assistance commerciale ;",
      "coaching du personnel.",
    ],
  },
  {
    id: "ctd",
    icon: MapPinned,
    title:
      "Accompagnement des collectivités territoriales décentralisées (CTD) au développement du tourisme :",
    type: "list-with-intro",
    intro: "Accompagnement création et mise en place des offices de tourisme",
    items: [
      "Études de faisabilité et business plan de projets touristiques et des projets d'aménagement touristiques",
      "développement d'activités génératrices de revenus pour les populations des zones touristiques et collectivités territoriales décentralisées",
      "élaboration des politiques et stratégies en matière de tourisme",
      "réhabilitation des projets et entreprises touristiques",
      "accompagnement des collectivités territoriales décentralisées à la mise en œuvre des compétences transférées par l'État",
    ],
  },
];