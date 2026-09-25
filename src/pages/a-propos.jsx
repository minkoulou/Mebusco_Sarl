import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { Whatsapp } from "../components/whatsapp";
import Button from "../components/boutons";
import { Seo, breadcrumbJsonLd } from "../components/seo";

export default function APropos() {
  const location = useLocation();

  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">

      <Seo
        title="À propos — Joseph Mebenga Etoundi"
        description="Cabinet de conseil, d'études et de formation basé à Yaoundé, fondé par Joseph Mebenga Etoundi, ingénieur commercial HEC Liège, au service des entrepreneurs, dirigeants et institutions."
        path="/a-propos"
        jsonLd={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "À propos", path: "/a-propos" },
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
          <span className="text-navy dark:text-white">À propos</span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <span className="block h-1 w-10 bg-carmin" />
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-carmin">
            À propos de Mebusco
          </p>
          <h1 className="mt-2 max-w-2xl font-serif text-2xl font-bold md:text-4xl">
            Conseiller, structurer et transmettre
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            Un cabinet de conseil, d'études et de formation basé à Yaoundé,
            au service des entrepreneurs, dirigeants et institutions.
          </p>
        </div>
      </section>

      {/* ---------- FONDATEUR ---------- */}
      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl md:grid md:grid-cols-12 md:items-center md:gap-12">

          <div className="relative md:col-span-5">
            <img
              src="/mebenga.jpeg"
              alt="Joseph Mebenga Etoundi, fondateur et consultant chez Mebusco"
              className="h-105 w-full object-cover md:h-140 rounded-xs shadow-2xl shadow-navy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5">
              <p className="text-base font-bold text-white">
                Joseph Mebenga Etoundi
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                Fondateur &amp; consultant
              </p>
            </div>
          </div>

          <div className="mt-10 md:col-span-7 md:mt-0">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-carmin">
              <span className="h-px w-6 bg-carmin" /> Fondateur et consultant
            </p>

            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl dark:text-white">
              Joseph Mebenga Etoundi
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Ingénieur commercial diplômé de <strong className="text-navy dark:text-white">HEC Liège</strong> en
              Belgique en 1985, Joseph Mebenga Etoundi associe une expérience
              de la création, du management, du conseil et de la formation en
              entreprises.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Il a été enseignant associé à l'Université Catholique d'Afrique
              Centrale à Yaoundé de 2010 à 2020.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Ses domaines d'intervention comprennent les études de
              faisabilité, les modèles économiques et financiers, les
              business plans, l'accompagnement au démarrage, le
              développement commercial et la formation.
            </p>

            <div className="mt-8">
              <Button chemin='/contact' nom='échanger sur votre projet' bg='bg-white' color='text-black'/>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INTERVENTION DÉFINIE / DEUX APPROCHES ---------- */}
      <section className="bg-parchemin px-4 py-14 dark:bg-slate-800 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-lg font-bold text-navy dark:text-white">
              Une intervention définie avec le client
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Le besoin, les livrables et les modalités de réalisation sont
              convenus avant le démarrage. Mebusco intervient à Yaoundé et à
              distance selon la mission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy dark:text-white">
              Deux approches au choix
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              L'approche classique s'appuie sur l'analyse du projet et ses
              données. Le modèle J.E. Mebenga propose une réflexion
              culturelle, symbolique et spirituelle, pour les clients qui
              souhaitent l'explorer.
            </p>
            <Link
              to="/notre-comprehension-entreprise"
              className="mt-3 inline-block text-sm font-bold uppercase tracking-wide text-carmin hover:text-navy dark:hover:text-white"
            >
              Comprendre notre vision →
            </Link>
          </div>

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