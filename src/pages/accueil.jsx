import { ArrowRight } from "lucide-react";
import {NavBar} from "../components/navbar";
import { navLinks } from "../data/util";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '../components/boutons'
import Footer from "../components/footer";
import { Whatsapp } from "../components/whatsapp";
import { Seo, organizationJsonLd } from "../components/seo";
 import {Typewriter} from "../components/writeranime"
 

// import {}

// Icônes récupérées par Key plutôt que par index : évite qu'un futur
// réordonnancement de navLinks ne désynchronise silencieusement les icônes.
const iconFor = (key) => navLinks.find((link) => link.Key === key)?.icon;

 const dimensionCards = [
   {
     key: "comprehension",
     icon: iconFor("comprehension"),
     title: "Notre Compréhension de l'Entreprise",
     body: "Pourquoi tant d'entreprises échouent avant leur cinquième année, et ce qu'il faut vraiment bâtir pour construire une entreprise prospère, rentable et de grande longévité.",
     quote: "L'entreprise est un organisme vivant, doté d'un corps, d'une âme et d'un esprit",
     href: "/notre-comprehension-entreprise",
   },
  {
    key: "scientifique",
    icon: iconFor("intervention-classique"),
    title: "Approche d'intervention classique",
    body: "Une idée d'entreprise peut être intellectuellement séduisante ; il faut toutefois s'assurer qu'elle est techniquement faisable et économiquement rentable.",
    quote: "L'une de ses meilleures expressions est le modèle économique et financier",
    href: "/approche-classique",
  },
  {
    key: "endogene",
    icon: iconFor("approche-metaphysique"),
    title: "Approche selon le modèle J.E. Mebenga",
    body: "Une approche d'intervention selon le modèle J.E. Mebenga de l'entreprise métaphysique : installation, diagnostic et restructuration de la vie spirituelle de l'entreprise.",
    quote: "L'une de ses meilleures expressions est le champ de force et le système immunitaire de l'entreprise",
    href: "/approche-metaphysique",
  },
  {
    key: "formation",
    icon: iconFor("formation"),
    title: "Formation",
    body: null,
    quote: "« Cherchez la connaissance du berceau à la tombe »",
    href: "/formation",
  },
];


export  function Accueil() {

    const location=useLocation()
  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">
       
       <Seo
        title="Cabinet de Conseil en Création d'Entreprise à Yaoundé"
        description="Mebusco SARL, cabinet de conseil en création d'entreprise à Yaoundé, Cameroun. Approche scientifique et spirituelle pour bâtir des entreprises prospères."
        jsonLd={organizationJsonLd}
      />

      <NavBar currentPath={location.pathname} />

      <main>

      {/* ---------- HERO ---------- */}

      <section className="relative overflow-hidden bg-navy px-4 py-14 dark:bg-slate-950 text-white md:px-8 md:py-24">
        
        {/* texture pointillée en fond, comme sur la maquette */}
        
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* halos décoratifs */}

        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-carmin/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">

            <span className="inline-block bg-carmin px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
              Conseil et formation en creation d'entreprises
            </span>

            <h1 className="mt-6 text-5xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-6xl">
              
                Mebusco SARL

            </h1>

            {/* fioriture ornementale */}

            <div className="mt-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-10 bg-carmin/60" />
              <span className="h-1.5 w-1.5 rotate-45 bg-carmin" />
              <span className="h-px w-10 bg-carmin/60" />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-base font-medium uppercase tracking-wide text-white/85 md:text-lg">
              
                <Typewriter text="Cabinet de conseil en création d'entreprise à Yaoundé : Nous accompagnons les promoteurs, investisseurs, décideurs et managers pour bâtir des entreprises prospères, rentables et de grande longévité" speed={45} />

            </p>

            <div className="mt-10 w-full max-w-xl rounded-2xl border-2 border-white/15 bg-white/5 p-6 shadow-[6px_6px_0_rgba(200,17,46,0.35)] backdrop-blur-sm md:p-8">
              <p className="text-base font-bold uppercase tracking-wide text-white md:text-lg">
                Nous développons deux approches d'intervention au choix du client :
              </p>
              <ul className="mt-4 space-y-3 text-left text-base text-white/85 md:text-lg">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-carmin" />
                  <span>Une approche d'intervention classique</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-carmin" />
                  <span>
                    Une approche d'intervention selon le modèle J.E. Mebenga de l'entreprise métaphysique
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            
              <Button chemin='/contact' nom='demander un devis' bg='bg-white' color='text-black'/>
            
            </div>

        </div>

        {/* indicateur de scroll */}

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce md:block" aria-hidden="true">
          <span className="block h-8 w-5 rounded-full border-2 border-white/40">
            <span className="mx-auto mt-1.5 block h-2 w-1 rounded-full bg-white/70" />
          </span>
        </div>

      </section>

      {/* ---------- ARCHITECTURE HOLISTIQUE ---------- */}

      <section className="bg-parchemin px-4 py-14 md:px-8 md:py-20 dark:bg-slate-800">

        <div className="mx-auto max-w-6xl text-center">
         
          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            Architecture holistique
          </p>
         
          <h2 className="dark:text-white mt-2 text-2xl font-bold text-navy md:text-3xl">
            Explorez nos Dimensions
          </h2>
         
          <p className="mx-auto mt-3 dark:text-slate-400 max-w-xl text-sm text-slate-500 md:text-base">
            Cliquez sur chacune des dimensions pour découvrir nos services
            spécifiques
          </p>
        
        </div>

{/*  Dimensions  */}

        <div className="mx-auto mt-10 max-w-6xl md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          
          {dimensionCards.map((card) => {
            
            const Icon = card.icon;
            
            return (
              
              <Link
                key={card.key}
                to={card.href}
                className="mb-5 dark:border-slate-500 dark:bg-slate-900 block border-l-4  border-slate-700 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:mb-0"
              >
                <div className="flex items-start justify-between">
                  <span className="flex dark:bg-slate-700 dark:text-white h-11 w-11 items-center justify-center bg-parchemin text-navy">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <ArrowRight className="h-4.5 w-4.5 dark:text-slate-600 text-slate-500 animate-bounce" strokeWidth={2} />
                </div>

                <h3 className="mt-5 dark:text-white text-sm font-bold uppercase tracking-wide text-navy">
                  {card.title}
                </h3>

                {card.body && (
                  <p className="dark:text-slate-300 mt-3 text-sm leading-relaxed text-slate-600">
                    {card.body}
                  </p>
                )}

                <p className="mt-3 dark:text-slate-400 text-sm italic leading-relaxed text-slate-500">
                  "{card.quote}"
                </p>
              </Link>
            );
          })}

        </div>
      </section>     
      </main>

       <Whatsapp/>
    
       <Footer/>
      <span className="sr-only">{navLinks.length} sections principales</span>
    </div>
  );
}