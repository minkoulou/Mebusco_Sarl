import { Link, useLocation } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import OtherDimensions from "../components/otherDimension";
import { formationStats, formats, methodology } from "../data/formations";
import {Whatsapp} from '../components/whatsapp'

export default function Formation() {
  const location = useLocation();
  const PackagesIcon = formats.packages.icon;
  const SurMesureIcon = formats.surMesure.icon;

  return (
    <div className="relative bg-white pb-16 dark:bg-slate-900 md:pb-0">
      <NavBar currentPath={location.pathname} />

      {/* ---------- FIL D'ARIANE ---------- */}
      <div className="border-b border-slate-100 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 md:px-8">
        <div className="mx-auto max-w-6xl text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
          <Link to="/" className="hover:text-carmin">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy dark:text-white">Formation</span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div
          className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 rotate-12 bg-white/5 md:h-72 md:w-72"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl">
          <h1 className="max-w-2xl font-serif text-3xl font-bold md:text-5xl">
            L'Excellence par la Transmission
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            Développez les compétences critiques de demain avec nos
            programmes de formation stratégique et opérationnelle.
          </p>
        </div>
      </section>

      {/* ---------- CITATIONS ---------- */}
      <div className="bg-parchemin px-4 py-10 text-center dark:bg-slate-800 md:px-8">
        <div className="mx-auto max-w-2xl space-y-8">
          <div>
            <p className="font-serif text-lg italic text-navy dark:text-white md:text-xl">
              « Mon peuple périt faute de connaissances »
            </p>
            <span className="mx-auto mt-3 block h-0.5 w-10 bg-carmin" />
          </div>
          <div>
            <p className="font-serif text-lg italic text-navy dark:text-white md:text-xl">
              « Cherchez la connaissance du berceau à la tombe »
            </p>
            <span className="mx-auto mt-3 block h-0.5 w-10 bg-carmin" />
          </div>
        </div>
      </div>

      {/* ---------- STATS ---------- */}
      <div className="grid grid-cols-3 divide-x divide-slate-200 bg-parchemin py-6 text-center dark:divide-slate-700 dark:bg-slate-800">
        {formationStats.map((stat) => (
          <div key={stat.label}>
            <p className="text-xl font-bold text-carmin md:text-2xl">{stat.value}</p>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ---------- NOS FORMATS ---------- */}
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <h2 className="text-xl font-bold text-navy dark:text-white md:text-2xl">
          Nos Formats
        </h2>
        <span className="mt-2 block h-1 w-14 bg-carmin" />

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Carte "Packages" */}

          <div className="rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-4 drop-shadow-black drop-shadow-xl dark:bg-slate-900">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-parchemin dark:bg-slate-800">
              <PackagesIcon className="h-5 w-5 text-navy dark:text-white" strokeWidth={1.6} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-navy dark:text-white">
              {formats.packages.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {formats.packages.description}
            </p>
            <ul className="mt-4 space-y-2.5">
              {formats.packages.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                  <CircleCheck className="h-4 w-4 shrink-0 text-carmin" strokeWidth={1.8} />
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* Carte "Sur-mesure" */}
          <div className="rounded-2xl bg-navy p-6 dark:bg-slate-950 transition-all duration-300 hover:scale-95 drop-shadow-black drop-shadow-xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <SurMesureIcon className="h-5 w-5 text-white" strokeWidth={1.6} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-white">
              {formats.surMesure.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {formats.surMesure.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {formats.surMesure.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-6 block bg-carmin py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wide text-white hover:brightness-120 "
            >
              {formats.surMesure.ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- MÉTHODOLOGIE ---------- */}
      <div className="bg-parchemin px-4 py-14 dark:bg-slate-800 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-xl font-bold text-navy dark:text-white md:text-2xl">
            Notre Méthodologie
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Une approche centrée sur l'humain et la performance.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-6">
          {methodology.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.key} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-900">
                  <Icon className="h-5 w-5 text-navy dark:text-white" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-navy dark:text-white">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------- IMAGE + CITATION ---------- */}
      <div className="relative hover:duration-300 transition-all hover:scale-101">
        {/* Remplace par la vraie photo (asset non fourni) */}
        <img
          src="/formation.jpeg"
          alt="Session de formation Mebusco"
          className="h-64 w-full object-cover md:h-96 "
        />
        <div className="absolute inset-0 flex items-center justify-center contrast-75 hover:contrast-50 hover:duration-300 transition-all bg-navy/60 px-6">
          <p className="max-w-lg text-center font-serif text-lg italic text-white md:text-2xl">
            « Le savoir est le seul capital qui s'accroît lorsqu'on le
            partage. »
          </p>
        </div>
      </div>

      <OtherDimensions
        currentKey="formation"
        heading="Découvrir nos autres pôles"
        uppercase
        labels={{
          scientifique: "Pôle Scientifique",
          Spirituelle: "Pôle Spirituel",
          endogène: "Pôle Culto-Endogène",
        }}
      />
      <Whatsapp/>
      <Footer />
    </div>
  );
}