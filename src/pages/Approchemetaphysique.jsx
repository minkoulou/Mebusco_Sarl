import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { phases } from "../data/approcheMetaphysique";
import { Whatsapp } from "../components/whatsapp";
import Button from "../components/boutons";
import { Seo, breadcrumbJsonLd } from "../components/seo";

export default function ApprocheMetaphysique() {
  const location = useLocation();

  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">

      <Seo
       title="Approche Métaphysique J.E. Mebenga | Mebusco SARL"
       description="Accompagnement spirituel d'entreprise selon le modèle J.E. Mebenga à Yaoundé, Cameroun : installation, diagnostic et restructuration de la vie de l'entreprise."
        path="/approche-metaphysique"
        jsonLd={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          {
            name: "Approche selon le modèle J.E. Mebenga de l'entreprise métaphysique",
            path: "/approche-metaphysique",
          },
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
          <span className="text-navy dark:text-white">
            Approche selon le modèle J.E. Mebenga de l'entreprise métaphysique
          </span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <span className="block h-1 w-10 bg-carmin" />
          <h1 className="mt-4 max-w-2xl font-serif text-2xl font-bold md:text-4xl">
             Approche selon le modèle J.E. Mebenga de l'entreprise métaphysique
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            Nos services comprennent :
          </p>
        </div>
      </section>

      {/* ---------- LES 3 PHASES ---------- */}
      {phases.map((phase, i) => {
        const Icon = phase.icon;
        const alt = i % 2 === 1;
        return (
          <div
            key={phase.key}
            className={`px-4 py-12 md:px-8 md:py-16 ${
              alt ? "bg-parchemin dark:bg-slate-800" : ""
            }`}
          >
            <div className="mx-auto max-w-4xl">

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy dark:bg-slate-700">
                  <Icon className="h-5.5 w-5.5 text-white" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-carmin">
                    Étape {phase.number}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-navy dark:text-white md:text-2xl">
                    {phase.title}
                  </h2>
                </div>
              </div>

              <ul className="mt-6 space-y-3 pl-16 text-sm text-slate-600 dark:text-slate-300 md:text-base">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-carmin" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        );
      })}

      <div className="w-full md:w-1/4 mx-auto p-4">
        <Button chemin='/contact' nom='demander un devis' bg='bg-white' color='text-black'/>
      </div>


      </main>

      <Whatsapp/>
      <Footer />
    </div>
  );
}