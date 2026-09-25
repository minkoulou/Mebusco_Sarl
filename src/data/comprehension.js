import {
  TrendingDown,
  AlertTriangle,
  HeartPulse,
  FlaskConical,
  Church,
  Share2,
} from "lucide-react";

/**
 * Contenu de la page "Notre Compréhension de l'Entreprise", basé sur le
 * document client NOTRE_COMPREHENSION_DE_L'ENTREPRISE.pdf.
 * Remplace l'ancienne page "Dimension spirituelle" dans la navigation.
 */

export const constatPoints = [
  {
    icon: TrendingDown,
    text: "Les différentes crises financières internationales ont montré les limites et les faiblesses des systèmes et modèles économiques basés essentiellement sur la croissance du chiffre d'affaires, des bénéfices des entreprises et des taux de rentabilité des capitaux investis.",
  },
  {
    icon: AlertTriangle,
    text: "Selon des statistiques mondiales, environ 30 % des nouvelles entreprises échouent dans leurs deux premières années ; et 50 % ne dépassent pas cinq ans.",
  },
  {
    icon: AlertTriangle,
    text: "Les principales causes de fermeture évoquées sont de nature essentiellement économiques et financières (offre, demande, concurrence, réseaux de distribution, matières premières, coûts de production, investissement, financement, technologie, systèmes de gestion, ressources humaines, etc.).",
  },
  {
    icon: HeartPulse,
    text: "Cependant, la prise en compte de la nature holistique de l'entreprise (elle est, tout comme l'être humain, dotée d'un corps, d'une âme et d'un esprit) fait apparaître qu'une entreprise qui n'a ni vie spirituelle ni ancrage culto-endogène ne peut vivre longtemps, ni avoir des résultats économiques et financiers probants.",
  },
];

export const troisDimensions = [
  {
    key: "scientifique",
    icon: FlaskConical,
    title: "Dimension Scientifique",
    text: "dont l'une des meilleures expressions est le modèle économique et financier.",
    href: "/approche-classique",
  },
  {
    key: "spirituelle",
    icon: Church,
    title: "Dimension spirituelle",
    text: "dont l'une des meilleures expressions est l'être spirituel de l'entreprise, son étoile de naissance et son code génétique.",
  },
  {
    key: "endogene",
    icon: Share2,
    title: "Dimension culto-endogène",
    text: "dont l'une des meilleures expressions est le champ de force et le système immunitaire de l'entreprise.",
    href: "/approche-metaphysique",
  },
];

export const approches = [
  {
    key: "classique",
    title: "Une approche classique",
    text: "qui prend uniquement en compte la dimension scientifique de l'entreprise.",
  },
  {
    key: "metaphysique",
    title: "Une approche selon le modèle J.E. MEBENGA",
    text: "de l'entreprise métaphysique, qui prend en compte les 3 dimensions.",
  },
];

export const fondateurExperience = [
  "La création et le management des entreprises",
  "L'enseignement universitaire de haut niveau (plus de 10 ans comme enseignant associé à la Faculté de Sciences Sociales et de Gestion de l'Université Catholique d'Afrique Centrale à Yaoundé, au Cameroun)",
  "Le conseil et la formation en entreprises",
];