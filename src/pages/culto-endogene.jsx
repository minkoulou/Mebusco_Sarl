import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NavBar } from "../components/navbar";
import Footer from "../components/Footer";
import OtherDimensions from "../components/otherDimensions";
import { endogeneCards } from "../data/dimensionEndogene";

function EndogeneCard({ card }) {
  const Icon = card.icon;

  if (card.variant === "dark-image") {
    return (
      <div className="overflow-hidden rounded-2xl bg-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-950">
        <div className="p-6 pb-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-carmin">
            <Icon className="h-5.5 w-5.5 text-white" strokeWidth={1.6} />
          </span>
          <h3 className="mt-4 text-lg font-bold leading-snug text-white">
            {card.title}
          </h3>
        </div>
        <img
          src={card.image}
          alt={card.imageAlt}
          className="h-48 w-full object-cover"
        />
      </div>
    );
  }

  if (card.variant === "badge") {
    return (
      <div className="rounded-2xl bg-parchemin p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-800">
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-700">
            <Icon className="h-5.5 w-5.5 text-navy dark:text-white" strokeWidth={1.6} />
          </span>
          <span className="rounded-full bg-carmin/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-carmin">
            {card.badge}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-bold leading-snug text-navy dark:text-white">
          {card.title}
        </h3>
      </div>
    );
  }

  // variant "default"
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-900">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy dark:bg-slate-800">
        <Icon className="h-5.5 w-5.5 text-white" strokeWidth={1.6} />
      </span>
      <h3 className="mt-4 text-lg font-bold leading-snug text-navy dark:text-white">
        {card.title}
      </h3>
      {card.linkLabel && (
        <a
          href={card.href}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-carmin hover:underline"
        >
          {card.linkLabel}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      )}
    </div>
  );
}

export default function DimensionEndogene() {
  const location = useLocation();

  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">
      <NavBar currentPath={location.pathname} />

      {/* ---------- FIL D'ARIANE ---------- */}
      <div className="border-b border-slate-100 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 md:px-8">
        <div className="mx-auto max-w-6xl text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
          <Link to="/" className="hover:text-carmin">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy dark:text-white">Dimension culto-endogène</span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16">
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-0 h-64 w-64 text-slate-100 dark:text-slate-800/60 md:h-80 md:w-80"
        >
          <polygon
            points="50,3 95,25 95,75 50,97 5,75 5,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </svg>

        <div className="relative mx-auto max-w-6xl">
          <h1 className="max-w-2xl text-3xl font-extrabold text-navy dark:text-white md:text-5xl">
            Identité &amp; <em className="text-carmin not-italic font-serif italic">Héritage</em>{" "}
            Ancestral
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-500 dark:text-slate-400 md:text-base">
            Nous accompagnons les institutions et les lignées dans la
            préservation de leur force vitale et la structuration de leur
            patrimoine immatériel.
          </p>
        </div>
      </section>

      {/* ---------- CARTES ---------- */}
      <div className="mx-auto max-w-3xl px-4 pb-10 md:px-8">
        <div className="flex flex-col gap-5">
          {endogeneCards.map((card) => (
            <EndogeneCard key={card.key} card={card} />
          ))}
        </div>
      </div>

      <OtherDimensions
        currentKey="endogène"
        labels={{
          scientifique: "Expertise Scientifique",
          Spirituelle: "Sagesse Spirituelle",
          formation: "Pôle Formation",
        }}
      />

      <Footer />
    </div>
  );
}