import { ArrowRight, CalendarDays, ChartNoAxesCombined, FileChartColumn, Compass } from "lucide-react";
import {NavBar} from "../components/navbar";
import { navLinks } from "../data/util";
import { services } from "../data/services";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '../components/boutons'
import Footer from "../components/footer";
import { Whatsapp } from "../components/whatsapp";
import { Seo, organizationJsonLd } from "../components/seo";

const serviceIcons = [ChartNoAxesCombined, FileChartColumn, Compass];

// import {}


export default function Accueil() {

    const location=useLocation()
  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">
       
       <Seo
        title="Études, business plans et formations à Yaoundé"
        description="Mebusco SARL accompagne vos projets : études de faisabilité, business plans, modèles financiers et formations. À Yaoundé et à distance. Devis gratuit."
        path="/"
        jsonLd={organizationJsonLd}
      />

      <NavBar currentPath={location.pathname} />

      <main>

      {/* ---------- HERO ---------- */}

      <section className="relative overflow-hidden bg-navy px-4 py-14 dark:bg-slate-950 text-white md:px-8 md:py-24">
        
        {/* texture pointillée en fond, comme sur la maquette */}
        
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* halos décoratifs */}

        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-carmin/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">

            <span className="inline-block bg-carmin px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
              Conseil aux entrepreneurs et dirigeants
            </span>

            <h1 className="mt-6 text-4xl font-extrabold uppercase leading-[1.1] tracking-tight md:text-5xl">
              Études, business plans et formations
            </h1>

            {/* fioriture ornementale */}

            <div className="mt-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-10 bg-carmin/60" />
              <span className="h-1.5 w-1.5 rotate-45 bg-carmin" />
              <span className="h-px w-10 bg-carmin/60" />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-white/85 md:text-lg">
              Évaluez la faisabilité de votre projet, structurez son financement et développez les compétences de votre équipe avec Mebusco.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Button chemin='/contact' nom='demander une étude ou un business plan' bg='bg-white' color='text-black'/>
              <Link
                to="/formation"
                className="text-sm font-bold uppercase tracking-wide text-white underline decoration-carmin decoration-2 underline-offset-4 hover:text-white/80"
              >
                Former mon équipe
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              <span>À Yaoundé  en présentiel et à distance</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Un accompagnement sur mesure</span>
            </div>

        </div>

        {/* indicateur de scroll */}

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce md:block" aria-hidden="true">
          <span className="block h-8 w-5 rounded-full border-2 border-white/40">
            <span className="mx-auto mt-1.5 block h-2 w-1 rounded-full bg-white/70" />
          </span>
        </div>

      </section>

      {/* ---------- BANDEAU SÉMINAIRE ---------- */}

      <Link
        to="/seminaire-entreprises-familiales"
        className="flex flex-col items-center gap-2 border-b border-slate-100 bg-parchemin px-4 py-3 text-center text-xs font-semibold text-navy hover:bg-parchemin/70 dark:border-slate-800 dark:bg-slate-800 dark:text-white sm:flex-row sm:justify-center sm:gap-4 sm:text-sm md:px-8"
      >
        <span className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-carmin" strokeWidth={1.8} />
          24–26 novembre 2026 · Entreprises familiales
        </span>
        <span className="flex items-center gap-1 text-carmin">
          Programme et préinscription <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>

      {/* ---------- NOS PRESTATIONS ---------- */}

      <section className="bg-parchemin px-4 py-14 md:px-8 md:py-20 dark:bg-slate-800">

        <div className="mx-auto max-w-6xl text-center">

          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            Nos prestations
          </p>

          <h2 className="dark:text-white mt-2 text-2xl font-bold text-navy md:text-3xl">
            À chaque étape, une décision mieux préparée
          </h2>

          <p className="mx-auto mt-3 dark:text-slate-400 max-w-xl text-sm text-slate-500 md:text-base">
            De l'idée à la mise en œuvre, des livrables adaptés à votre projet
          </p>

        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">

          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Link
                key={s.id}
                to={`/etudes-business-plans#${s.id}`}
                className="group block rounded-2xl border-2 border-transparent bg-white p-6 shadow-sm transition hover:border-carmin/30 hover:shadow-md dark:bg-slate-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white dark:bg-slate-700">
                  <Icon className="h-5.5 w-5.5" strokeWidth={1.6} />
                </span>

                <p className="mt-4 text-xs font-bold text-carmin">0{i + 1}</p>

                <h3 className="mt-1 text-base font-bold text-navy dark:text-white">
                  {s.label}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {s.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-carmin">
                  Découvrir les livrables
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}

        </div>
      </section>

      {/* ---------- NOTRE MÉTHODE ---------- */}

      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            Notre méthode
          </p>
          <h2 className="dark:text-white mt-2 text-2xl font-bold text-navy md:text-3xl">
            Un cadre clair, dès le départ
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Échanger", "Nous précisons votre besoin et les informations disponibles."],
            ["Définir", "Vous recevez une proposition avec livrables, délais et honoraires."],
            ["Réaliser", "La mission démarre après signature et acompte de 50 %."],
            ["Restituer", "Nous présentons les résultats et les prochaines étapes convenues."],
          ].map(([title, text], i) => (
            <div key={title}>
              <p className="text-3xl font-extrabold text-carmin/40">0{i + 1}</p>
              <h3 className="mt-2 text-base font-bold text-navy dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
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
    
       <Footer/>
      {/* Rappel : navLinks pilote aussi la tab bar mobile rendue dans <Navbar /> */}
      <span className="sr-only">{navLinks.length} sections principales</span>
    </div>
  );
}