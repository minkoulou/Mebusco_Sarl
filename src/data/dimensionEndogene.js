import { Network, Landmark, Scale, ScrollText } from "lucide-react";

export const endogeneCards = [
  {
    key: "restructuration",
    icon: Network,
    variant: "default",
    title: "Restructuration du champ de force et du système immunitaire de l'entreprise",
    linkLabel: "Découvrir le processus",
    href: "#",
  },
  {
    key: "musee",
    icon: Landmark,
    variant: "dark-image",
    title: "Formation d'un responsable sélectionné à l'entretien du musée de l'entreprise",
    image: "/entretien.jpeg",
    imageAlt: "Responsable formé à l'entretien du musée de l'entreprise",
  },
  {
    key: "charte",
    icon: Scale,
    variant: "badge",
    badge: "Éthique",
    title: "Élaboration de la charte des valeurs et des comportements au sein de l'entreprise",
  },
  {
    key: "succession",
    icon: ScrollText,
    variant: "default",
    title: "Élaboration du mécanisme de succession et formation prévisionnelle à ce mécanisme.",
  },
];