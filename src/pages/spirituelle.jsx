import { Link, useLocation } from "react-router-dom";
import { Sparkles, Quote } from "lucide-react";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import OtherDimensions from "../components/otherDimension";
import { essenceSteps } from "../data/DimSpirit";
import { Whatsapp } from "../components/whatsapp";
import Button from '../components/boutons'

function StepCard({ step }) {
  const Icon = step.icon;

  if (step.variant === "feature") {
    // Carte 8 : entièrement sombre, icône encadrée en carmin — même en light mode.

    return (
      <div className="bg-navy p-6 dark:bg-slate-950 ">

        <span className="flex h-11 w-11 items-center justify-center bg-carmin">
          <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
        </span>
        
        <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
          {step.number}. {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {step.description}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-white p-6 dark:bg-slate-900 drop-shadow-lg  drop-shadow-black duration-300 hover:-translate-2 transition-all ${
        step.variant === "highlighted"
          ? "border-l-4 border-carmin"
          : "border-l-4 border-transparent"
      }`}
    >
      <span className="flex h-11 w-11 items-center justify-center bg-navy dark:bg-slate-800">
        <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
      </span>
      <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-navy dark:text-white">
        {step.number}. {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {step.description}
      </p>
    </div>
  );
}

export  function Spirituelle() {
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
          <span className="text-navy dark:text-white">Dimension spirituelle</span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-carmin/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-carmin">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
            Gouvernance immatérielle
          </span>

          <h1 className="mt-5 max-w-2xl font-serif text-2xl font-bold md:text-4xl">
            L'Architecture Spirituelle des Organisations
          </h1>

          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            Au-delà des chiffres et de la logistique, chaque entreprise
            possède une essence unique. Mebusco structure cette force
            invisible pour en faire un levier de performance durable et
            éthique.
          </p>Whatsapp
        </div>
      </section>

      {/* ---------- LISTE : INGÉNIERIE DE L'ESSENCE ---------- */}
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <h2 className="text-xl font-bold text-navy dark:text-white md:text-2xl">
          Ingénierie de l'Essence
        </h2>
        <span className="mt-2 block h-1 w-14 bg-carmin" />

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {essenceSteps.map((step) => (
            <StepCard key={step.number} step={step}/>
          ))}
        </div>
      </div>

      {/* Remplace par la vraie photo (asset non fourni) */}
      <img
        src="/musee.jpeg"
        alt="Musée de l'entreprise Mebusco"
        className="h-56 w-full object-cover md:h-80 contrast-60 hover:contrast-90 transition-all hover:duration-300 "
      />

      <div className="bg-parchemin px-4 py-10 dark:bg-slate-800 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h3 className="text-lg font-bold text-navy dark:text-white">
            Création du Musée de l'Entreprise
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            Le Musée de l'Entreprise n'est pas une archive du passé, mais un
            sanctuaire de la vision. Nous concevons des espaces physiques et
            numériques qui incarnent l'histoire, les valeurs et le destin de
            votre institution.
          </p>
        </div>
      </div>

      {/* ---------- CITATION ---------- */}
      <div className="px-4 py-14 text-center md:px-8">
        <Quote className="mx-auto h-8 w-8 text-carmin" strokeWidth={1.8} fill="currentColor" />
        <blockquote className="mx-auto mt-4 max-w-xl font-serif text-lg italic text-navy dark:text-white md:text-xl">
          « Une organisation sans conscience spirituelle est un moteur sans
          huile : elle finit par s'autoconsumer. »
        </blockquote>
        <span className="mx-auto mt-5 block h-px w-10 bg-slate-300 dark:bg-slate-600" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Direction du Conseil Spirituel, Mebusco
        </p>
      </div>

      <OtherDimensions currentKey="Spirituelle"/>

      {/* ---------- CTA FINAL ---------- */}
      <div className="px-4 pb-10 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div
            className="flex items-center justify-center pt-4"
          >
            <Button  chemin='dimension-spirituelle' nom='demander un devis' bg='bg-white' color='text-black'/>
          </div>
        </div>
      </div>
       <Whatsapp/>
      <Footer />
    </div>
  );
}