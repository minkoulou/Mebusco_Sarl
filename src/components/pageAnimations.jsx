import { useLayoutEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

// Blocs animés automatiquement sur toutes les pages
const BLOCS = "main > section, main > div, main > a, footer";
// Animations posées à la main dans les pages : data-reveal="left|right|zoom|fade"
// sur un élément, ou data-reveal-group sur un conteneur dont les enfants
// apparaissent en cascade (ex. le hero de l'accueil)
const MANUEL = "[data-reveal], [data-reveal-group]";
// Éléments qui ont déjà leur propre animation Tailwind (animate-bounce…)
const ANIMATION_TAILWIND = "[class*='animate-']";
const DELAI_CASCADE = 90; // ms entre deux éléments d'une même cascade
const CASCADE_MAX = 5;

export function PageAnimations() {

  const { pathname } = useLocation();

  // useLayoutEffect : les classes sont posées avant le premier affichage,
  // le contenu n'apparaît donc pas une fraction de seconde avant de s'animer
  useLayoutEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = new Set();

    const cascade = (enfants) => {
      [...enfants].forEach((el, i) => {
        if (el.matches(ANIMATION_TAILWIND)) return;
        el.style.setProperty(
          "--reveal-delay",
          `${Math.min(i, CASCADE_MAX) * DELAI_CASCADE}ms`
        );
        elements.add(el);
      });
    };

    document.querySelectorAll("main [data-reveal]").forEach((el) => elements.add(el));
    document.querySelectorAll("main [data-reveal-group]").forEach((groupe) => cascade(groupe.children));

    document.querySelectorAll(BLOCS).forEach((bloc) => {
      if (bloc.matches(MANUEL) || bloc.querySelector(MANUEL)) return;
      if (bloc.matches(ANIMATION_TAILWIND)) return;

      const grilles = bloc.querySelectorAll(".grid:not(.grid .grid)");
      // Bloc contenant une grille : le bloc apparaît en fondu simple et ce
      // sont les cartes qui montent, sinon les deux déplacements s'additionnent
      if (grilles.length) bloc.dataset.reveal = "fade";
      elements.add(bloc);
      grilles.forEach((grille) => cascade(grille.children));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
