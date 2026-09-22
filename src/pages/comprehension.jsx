import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { Whatsapp } from "../components/whatsapp";
import Button from "../components/boutons";
import { Seo, breadcrumbJsonLd } from "../components/seo";
import {
  constatPoints,
  troisDimensions,
  approches,
  fondateurExperience,
} from "../data/comprehension";
import {Typewriter} from '../components/writeranime'


export default function Comprehension() {
  const location = useLocation();

  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">
      <Seo
        title="Notre Vision de l'Entreprise | Conseil Yaoundé"
         description="Notre compréhension de l'entreprise chez Mebusco SARL, cabinet de conseil à Yaoundé : le modèle J.E. Mebenga en 3 dimensions pour des entreprises pérennes. vivant à 3 dimensions — scientifique, spirituelle et culto-endogène. Découvrez le modèle J.E. MEBENGA de l'entreprise métaphysique porté par Mebusco SARL."
        path="/notre-comprehension-entreprise"
        jsonLd={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Notre Compréhension de l'Entreprise", path: "/notre-comprehension-entreprise" },
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
          <span className="text-navy dark:text-white">Notre Compréhension de l'Entreprise</span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <span className="block h-1 w-10 bg-carmin" />
          <h1 className="mt-4 max-w-2xl font-serif text-2xl font-bold md:text-4xl">
            <Typewriter text="Notre Compréhension de l'Entreprise" speed={45} /> 

          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            La vision de Mebusco SARL, cabinet de conseil en entreprise à
            Yaoundé : pourquoi tant d'entreprises échouent au Cameroun — et
            ce qu'il faut vraiment bâtir pour une entreprise prospère,
            rentable et de grande longévité.
          </p>
        </div>
      </section>

      {/* ---------- CONSTAT ---------- */}
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <h2 className="text-xl font-bold text-navy dark:text-white md:text-2xl">
          Le constat
        </h2>
        <span className="mt-2 block h-1 w-14 bg-carmin" />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {constatPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className="flex gap-4 rounded-2xl bg-parchemin p-6 dark:bg-slate-800"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy dark:bg-slate-700">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                </span>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------- LES 3 DIMENSIONS ---------- */}
      <div className="bg-parchemin px-4 py-14 dark:bg-slate-800 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-xl font-bold text-navy dark:text-white md:text-2xl">
              L'entreprise revêt dès lors 3 dimensions
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-400 md:text-base">
              Tout comme l'être humain, doté d'un corps, d'une âme et d'un
              esprit.
            </p>
          </div>

          <div className="mx-auto mt-10 grid gap-6 md:grid-cols-3">
            {troisDimensions.map((dim) => {
              const Icon = dim.icon;
              const content = (
                <>
                  <span className="flex h-11 w-11 items-center justify-center bg-navy dark:bg-slate-700">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-navy dark:text-white">
                    {dim.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {dim.text}
                  </p>
                </>
              );

              return dim.href ? (
                <Link
                  key={dim.key}
                  to={dim.href}
                  className="block bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-slate-900"
                >
                  {content}
                </Link>
              ) : (
                <div key={dim.key} className="bg-white p-6 shadow-sm dark:bg-slate-900">
                  {content}
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-slate-500 dark:text-slate-400 md:text-base">
            Le modèle <strong className="text-navy dark:text-white">J.E. MEBENGA de l'entreprise métaphysique</strong> prend en compte ces 3 dimensions.
          </p>
        </div>
      </div>

      {/* ---------- LES 2 APPROCHES ---------- */}
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <h2 className="text-xl font-bold text-navy dark:text-white md:text-2xl">
          Nos 2 approches d'intervention
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          Mebusco SARL, Conseil et Formation en Entreprise, a développé 2
          approches d'intervention pour accompagner les promoteurs,
          investisseurs, décideurs et managers pour bâtir des entreprises
          prospères, rentables et de grande longévité.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {approches.map((approche) => (
            <div
              key={approche.key}
              className="rounded-2xl border-2 border-navy p-6 dark:border-slate-600"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy dark:text-white">
                {approche.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {approche.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- LE FONDATEUR ---------- */}
      <div className="px-4 py-14 md:px-8">
        <div className="mx-auto max-w-6xl md:grid md:grid-cols-12 md:items-center md:gap-12">
          <div className="relative md:col-span-5">
            <img
              src="/mebenga.jpeg"
              alt="Mebenga Etoundi Joseph, fondateur et expert consultant chez Mebusco"
              className="h-105 w-full rounded-xs object-cover shadow-2xl shadow-navy md:h-140"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5">
              <p className="text-base font-bold text-white">
                Mebenga Etoundi Joseph
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                Fondateur &amp; expert consultant
              </p>
            </div>
          </div>

          <div className="mt-10 md:col-span-7 md:mt-0">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-carmin">
              <span className="h-px w-6 bg-carmin" /> Le fondateur
            </p>
            <h2 className="mt-3 text-2xl font-bold text-navy dark:text-white md:text-3xl">
              Mebenga Etoundi Joseph
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Ingénieur commercial, diplômé en 1985 de l'
              <strong className="text-navy dark:text-white">
                École des Hautes Études Commerciales (HEC) de Liège
              </strong>{" "}
              en Belgique.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Il associe une expérience de plus de 30 ans dans :
            </p>
            <ul className="mt-3 space-y-2.5">
              {fondateurExperience.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-carmin" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-6 border-l-4 border-carmin bg-parchemin p-5 text-sm italic leading-relaxed text-slate-600 dark:bg-slate-800 dark:text-slate-300 md:text-base">
            Sa conviction repose sur :  « L'entreprise n'est pas qu'une machine à profits, c'est aussi
              un être métaphysique qui puise ses forces dans une réalité
              culto-endogène en vue d'un développement prospère, rentable et
              de grande longévité. »
            </blockquote>
          </div>
        </div>
      </div>

      {/* ---------- CTA FINAL ---------- */}
      <div className="px-4 pb-10 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center pt-4">
            <Button chemin="/contact" nom="demander un devis" bg="bg-white" color="text-black" />
          </div>
        </div>
      </div>

      </main>

      <Whatsapp />
      <Footer />
    </div>
  );
}