import { Link, useLocation } from "react-router-dom";
import { CircleCheck, Calendar, Clock, Video, ArrowRight } from "lucide-react";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { formationStats, formats, methodology, nextSession } from "../data/formations";
import {Whatsapp} from '../components/whatsapp'
import { Seo, breadcrumbJsonLd } from "../components/seo";


export default function Formation() {
  const location = useLocation();
  const PackagesIcon = formats.packages.icon;
  const SurMesureIcon = formats.surMesure.icon;

  return (
    <div className="relative bg-white pb-16 dark:bg-slate-900 md:pb-0">
      
      <Seo
        title="Formation en Entreprise à Yaoundé | Mebusco SARL"
        description="Mebusco SARL propose des formations en création et gestion d'entreprise à Yaoundé, Cameroun, en formats packagés ou sur-mesure pour votre équipe."
        path="/formation"
        jsonLd={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Formation", path: "/formation" },
        ])}
      />
      
      <NavBar currentPath={location.pathname} />

      <main>

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
             Développez les compétences critiques de demain avec les
             programmes de formation stratégique et opérationnelle en entreprise de Mebusco SARL 
          </p>
        </div>
      </section>

      {/* ---------- CITATIONS ---------- */}
      <div className="bg-parchemin px-4 py-10 text-center dark:bg-slate-800 md:px-8">
        <div className="mx-auto max-w-2xl space-y-8">
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

        {/* ---------- PROCHAINE SESSION ---------- */}
        
          <div className="mx-auto mt-10 max-w-3xl animate-pulse">

            <div className="group relative overflow-hidden rounded-2xl border-2 border-carmin bg-navy p-6 shadow-[0_0_25px_-5px_rgba(200,17,46,0.5)] transition-shadow duration-500 hover:shadow-[0_0_35px_-5px_rgba(200,17,46,0.7)] dark:bg-slate-950 md:p-8">

              <span
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-carmin/25 blur-2xl animate-pulse"
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-carmin/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-carmin">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-carmin opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-carmin" />
                    </span>
                    Prochaine session
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">
                    {nextSession.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4.5 w-4.5 shrink-0 text-carmin" strokeWidth={1.8} />
                      {nextSession.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4.5 w-4.5 shrink-0 text-carmin" strokeWidth={1.8} />
                      {nextSession.heure}
                    </span>
                    <span className="flex items-center gap-2">
                      <Video className="h-4.5 w-4.5 shrink-0 text-carmin" strokeWidth={1.8} />
                      {nextSession.mode}
                    </span>
                  </div>
                </div>

                {nextSession.zoomLink && (
                  <a
                    href={nextSession.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex shrink-0 items-center justify-center gap-2 rounded-xl bg-carmin px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
                  >
                    Rejoindre sur Zoom
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      strokeWidth={2}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
          <p className="text-center text-white font-bold text-xl pt-10">
            Nous consulter pour les dates et prix
          </p>
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

      </main>

      <Whatsapp/>
      <Footer />
    </div>
  );
}