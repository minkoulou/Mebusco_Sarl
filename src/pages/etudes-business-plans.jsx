import { Link, useLocation } from "react-router-dom";
import { ChartNoAxesCombined, FileChartColumn, Compass } from "lucide-react";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { Whatsapp } from "../components/whatsapp";
import Button from "../components/boutons";
import { Seo, breadcrumbJsonLd } from "../components/seo";
import { services } from "../data/services";

const icons = [ChartNoAxesCombined, FileChartColumn, Compass];

export default function EtudesBusinessPlans() {
  const location = useLocation();

  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">

      <Seo
        title="Études de faisabilité et business plans"
        description="Étude de faisabilité, business plan et modèle financier, accompagnement au démarrage : des livrables adaptés à chaque étape de votre projet avec Mebusco SARL."
        path="/etudes-business-plans"
        jsonLd={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Études et business plans", path: "/etudes-business-plans" },
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
            Études et business plans
          </span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <span className="block h-1 w-10 bg-carmin" />
          <h1 className="mt-4 max-w-2xl font-serif text-2xl font-bold md:text-4xl">
            À chaque étape, une décision mieux préparée
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            De l'idée à la mise en œuvre, des livrables adaptés à votre projet.
          </p>
        </div>
      </section>

      {/* ---------- LES 3 OFFRES ---------- */}
      {services.map((s, i) => {
        const Icon = icons[i];
        const alt = i % 2 === 1;
        return (
          <div
            key={s.id}
            id={s.id}
            className={`scroll-mt-20 px-4 py-12 md:px-8 md:py-16 ${
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
                    Offre 0{i + 1}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-navy dark:text-white md:text-2xl">
                    {s.label}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {s.title}
                  </p>
                </div>
              </div>

              <p className="mt-6 pl-16 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                {s.description}
              </p>

              <div className="mt-6 grid gap-6 pl-16 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy dark:text-white">
                    Pour qui
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {s.audience}
                  </p>

                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-navy dark:text-white">
                    Ce qu'il faut nous fournir
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {s.inputs}
                  </p>

                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-navy dark:text-white">
                    Format des livrables
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {s.formats}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy dark:text-white">
                    Livrables
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {s.deliverables.map((d, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-carmin" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </div>
        );
      })}

      {/* ---------- COMMENT DÉMARRER ---------- */}
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            Comment démarrer
          </p>
          <div className="mx-auto mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Échanger", "Nous précisons votre besoin et les informations disponibles."],
              ["Définir", "Vous recevez une proposition avec livrables, délais et honoraires."],
              ["Réaliser", "La mission démarre après signature et acompte de 50 %."],
              ["Restituer", "Nous présentons les résultats et les prochaines étapes convenues."],
            ].map(([title, text], i) => (
              <div key={title}>
                <p className="text-2xl font-extrabold text-carmin/40">0{i + 1}</p>
                <h3 className="mt-1 text-sm font-bold text-navy dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full md:w-1/4 mx-auto p-4">
        <Button chemin='/contact' nom='demander une étude ou un business plan' bg='bg-white' color='text-black'/>
      </div>

      </main>

      <Whatsapp/>
      <Footer />
    </div>
  );
}