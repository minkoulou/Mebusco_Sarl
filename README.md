# Mebusco SARL — site vitrine

Site du cabinet **Mebusco SARL** (conseil, études et formation, Yaoundé — Cameroun) : présentation des approches d'intervention, des études et business plans, des formations et du séminaire sur la pérennité des entreprises familiales.

En ligne : [mebuscosarl.com](https://mebuscosarl.com)

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [React Router 7](https://reactrouter.com) pour la navigation
- [Tailwind CSS 4](https://tailwindcss.com) (thème clair / sombre)
- [react-helmet-async](https://github.com/staylor/react-helmet-async) pour le SEO (titres, meta, données structurées)
- [EmailJS](https://www.emailjs.com) pour le formulaire de contact
- [lucide-react](https://lucide.dev) pour les icônes
- Hébergement sur [Vercel](https://vercel.com)

## Démarrer

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:5173.

### Variables d'environnement

Le formulaire de contact a besoin d'un fichier `.env` à la racine (il n'est pas versionné) :

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Les mêmes variables doivent être déclarées dans les paramètres du projet sur Vercel.

## Scripts

| Commande          | Rôle                                              |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Serveur de développement avec rechargement à chaud |
| `npm run build`   | Build de production dans `dist/`                  |
| `npm run preview` | Sert le build de production en local              |
| `npm run lint`    | Vérification ESLint                                |

La configuration de pré-rendu `react-snap` (liste des pages dans `package.json`) se lance après le build avec `npx react-snap`.

## Structure

```
public/            Fichiers servis tels quels : images, PDF des TDR,
                   robots.txt, sitemap, llms.txt, AGENTS.md
src/
  main.jsx         Point d'entrée et déclaration des routes
  index.css        Thème Tailwind et animations d'apparition
  pages/           Une page par route
  components/      Navbar, footer, formulaire, SEO, animations…
  data/            Contenu du site (textes, offres, coordonnées, séminaire)
vercel.json        Réécritures SPA et en-têtes de cache
```

### Pages

| Route                               | Page                                  |
| ----------------------------------- | ------------------------------------- |
| `/`                                 | Accueil                               |
| `/notre-comprehension-entreprise`   | Notre compréhension de l'entreprise   |
| `/approche-classique`               | Approche classique                    |
| `/approche-metaphysique`            | Approche selon le modèle J.E. Mebenga |
| `/etudes-business-plans`            | Études et business plans              |
| `/formation`                        | Formation                             |
| `/seminaire-entreprises-familiales` | Séminaire entreprises familiales      |
| `/a-propos`                         | À propos                              |
| `/references`                       | Références                            |
| `/contact`                          | Contact                               |
| `/confidentialite`                  | Politique de confidentialité          |

## Modifier le contenu

Les textes sont regroupés dans `src/data/` pour qu'une information ne soit écrite qu'à un seul endroit :

- **Coordonnées** (téléphones, email, WhatsApp, réseaux) : `src/data/site.js`
- **Séminaire** (dates, lieu, durée, prix, programme) : `src/data/seminaire.js` — l'accueil, la page Formation et la page Séminaire lisent toutes ces valeurs.
- **PDF des termes de référence** : à déposer dans `public/`, puis mettre à jour le lien `href` dans `src/pages/formation.jsx` et `src/pages/seminaire-entreprises-familiales.jsx`.

## Animations

Les blocs apparaissent en fondu au défilement (`src/components/pageAnimations.jsx` et `src/index.css`). Toute section directe de `<main>` et le footer sont animés automatiquement, et les cartes d'une grille arrivent en cascade.

Pour un effet précis, ajouter un attribut sur l'élément :

- `data-reveal="left"`, `"right"`, `"zoom"` ou `"fade"`
- `data-reveal-group` sur un conteneur : ses enfants apparaissent l'un après l'autre

Les animations sont désactivées pour les visiteurs ayant activé « réduire les animations » dans leur système.

## Déploiement

Le site est hébergé sur Vercel. `vercel.json` redirige toutes les routes vers `index.html` (application monopage) et met en cache longue durée les fichiers de `assets/`.
