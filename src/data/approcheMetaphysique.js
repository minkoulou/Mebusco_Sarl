import { Fingerprint, Stethoscope, Compass } from "lucide-react";

/**
 * Contenu de la page "Approche selon le modèle J.E. MEBENGA de
 * l'entreprise métaphysique", basé sur le document client
 * APPROCHE SELON LE MODELE J E MEBENGA DE L'ENTREPRISE METAPHYSIQUE.pdf.
 * Remplace l'ancienne page "Dimension culto-endogène" dans la navigation.
 */

export const phases = [
  {
    key: "installation",
    number: "1",
    icon: Fingerprint,
    title: "Prise de contact et installation de l'être spirituel de l'entreprise",
    items: [
      "Identification de l'être spirituel de l'entreprise : son nom, son étoile de naissance, son code génétique",
      "Création du musée de l'entreprise",
      "Installation de l'entité spirituelle de l'entreprise dans le musée",
    ],
  },
  {
    key: "diagnostic",
    number: "2",
    icon: Stethoscope,
    title: "Diagnostic de la vie spirituelle de l'entreprise",
    items: [
      "Diagnostic de l'activité des lois spirituelles structurelles, fonctionnelles et organisationnelles au sein de l'entreprise",
      "Diagnostic du champ de force et du système immunitaire de l'entreprise",
      "Analyse de l'alimentation de l'entreprise",
      "Analyse des mécanismes de succession mis en place : leur pertinence et leur vulnérabilité",
    ],
  },
  {
    key: "strategie",
    number: "3",
    icon: Compass,
    title:
      "Formulation d'une stratégie et de mesures opérationnelles pour la restructuration de la vie spirituelle de l'entreprise",
    items: [
      "Élaboration des missions de l'être spirituel de l'entreprise",
      "Élaboration des codes permettant une interaction entre l'entreprise et son être spirituel",
      "Élaboration des tableaux de bord spirituels et des indicateurs clés de performance spirituels",
      "Restructuration du champ de force et du système immunitaire de l'entreprise",
      "Formation d'un responsable sélectionné à l'entretien du musée de l'entreprise",
      "Élaboration de la charte des valeurs et des comportements au sein de l'entreprise",
      "Élaboration du mécanisme de succession et formation prévisionnelle à ce mécanisme",
      "Intégration de la stratégie spirituelle dans la stratégie globale de l'entreprise",
    ],
  },
];