import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { Whatsapp } from "../components/whatsapp";
import Button from "../components/boutons";
import { Seo, breadcrumbJsonLd } from "../components/seo";

const missions = [
  {
    tag: "Industrie · 2024",
    titre: "Étude de faisabilité d'une raffinerie d'or",
    texte:
      "Mission réalisée pour une entreprise publique. Objet : étudier la faisabilité du projet.",
  },
  {
    tag: "Création d'entreprise",
    titre: "Business plan pour un porteur de projet",
    texte:
      "Mission de réalisation d'un business plan pour un client individuel.",
  },
  {
    tag: "Client professionnel",
    titre: "Élaboration d'un business plan",
    texte:
      "Mission de structuration d'un dossier de projet pour un client professionnel.",
  },
];

export default function References() {
  const location = useLocation();

  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">

      <Seo
        title="Références — missions réalisées par Mebusco"
        description="Exemples anonymisés de missions d'étude et de structuration de projets réalisées par Joseph Mebenga Etoundi : étude de faisabilité, business plans."
        path="/references"
        jsonLd={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Références", path: "/references" },
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
          <span className="text-navy dark:text-white">Références</span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <span className="block h-1 w-10 bg-carmin" />
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-carmin">
            Références
          </p>
          <h1 className="mt-2 max-w-2xl font-serif text-2xl font-bold md:text-4xl">
            Des missions d'étude et de structuration de projets
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            Des exemples anonymisés de prestations réalisées par Joseph
            Mebenga Etoundi. Les informations confidentielles des clients ne
            sont pas publiées.
          </p>
        </div>
      </section>

      {/* ---------- MISSIONS ---------- */}
      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {missions.map((m) => (
            <article
              key={m.titre}
              className="rounded-2xl border-2 border-transparent bg-white p-6 shadow-sm dark:bg-slate-800"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-carmin">
                {m.tag}
              </p>
              <h2 className="mt-2 text-base font-bold text-navy dark:text-white">
                {m.titre}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {m.texte}
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-carmin hover:text-navy dark:hover:text-white"
              >
                Échanger sur une mission comparable →
              </Link>
            </article>
          ))}
        </div>

        {/* ---------- EXEMPLE PÉDAGOGIQUE ---------- */}
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border-l-2 border-navy bg-parchemin p-6 dark:border-slate-600 dark:bg-slate-800 md:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            Exemple pédagogique
          </p>
          <h2 className="mt-2 text-lg font-bold text-navy dark:text-white">
            Que contient un business plan ?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            Un sommaire type comprend l'analyse du marché, le modèle
            économique, le plan de financement et les prévisions
            financières. Chaque business plan reste adapté au projet du
            client — n'hésitez pas à nous contacter pour un exemple détaillé.
          </p>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}

      <section className="bg-navy px-4 py-14 text-center text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            Commençons par votre besoin
          </p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Quel projet souhaitez-vous faire avancer ?
          </h2>
          <p className="mt-4 text-sm text-white/70 md:text-base">
            Un premier échange pour préciser votre objectif et le périmètre de la mission.
          </p>
          <div className="mt-8 flex justify-center">
            <Button chemin='/contact' nom='présenter mon projet' bg='bg-white' color='text-black'/>
          </div>
        </div>
      </section>

      </main>

      <Whatsapp/>
      <Footer />
    </div>
  );
}