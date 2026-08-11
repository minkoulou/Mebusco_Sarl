import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import NavBar from "../components/navbar";
import { navLinks } from "../data/util";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const dimensionCards = [
  {
    key: "scientifique",
    icon: navLinks[1].icon,
    title: "Dimension scientifique",
    body: "Une idée d'entreprise peut être intellectuellement séduisante ; il faut toutefois s'assurer qu'elle est techniquement faisable et économiquement rentable.",
    quote: "L'une de ses meilleures expressions est le modèle économique et financier",
    href: "/dimension-scientifique",
  },
  {
    key: "spirituelle",
    icon: navLinks[2].icon,
    title: "Dimension spirituelle",
    body: "Le monde spirituel crée et gouverne le monde matériel. « Tout existant préexiste à sa propre existence » (Émancio Godson). L'entreprise existe déjà dans le monde spirituel avant qu'elle ne soit créée dans le monde matériel.",
    quote: "L'une de ses meilleures expressions est l'être spirituel de l'entreprise, son étoile de naissance, son code génétique",
    href: "/dimension-spirituelle",
  },
  {
    key: "endogene",
    icon: navLinks[3].icon,
    title: "Dimension cultuelle et endogène",
    body: "L'entité spirituelle de l'entreprise, connectée et alimentant son entité matérielle, lui apporte force, pouvoir, puissance, énergie, vie, lumière, bénédictions, prospérité, longévité.",
    quote: "L'une de ses meilleures expressions est le champ de force et le système immunitaire de l'entreprise",
    href: "/dimension-culturelle-endogene",
  },
  {
    key: "formation",
    icon: navLinks[4].icon,
    title: "Formation",
    body: null,
    quote: "« Mon peuple périt faute de connaissances » — « Cherchez la connaissance du berceau à la tombe »",
    href: "/formation",
  },
];

const trustLogos = ["Partenaire A", "Institution B", "Groupe C"];

export default function Accueil() {

    const location=useLocation()
  return (
    <div className="bg-white pb-16 md:pb-0">

      <NavBar currentPath={location.pathname} />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-navy px-4 py-14 text-white md:px-8 md:py-24">
        
        {/* texture pointillée en fond, comme sur la maquette */}
        
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative mx-auto max-w-6xl md:grid md:grid-cols-12 md:items-center md:gap-10">
          <div className="md:col-span-8">
            <span className="inline-block bg-carmin px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
              Expertise stratégique
            </span>

            <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-5xl">
              Bâtir des entreprises vivantes, prospères et de grande longévité
            </h1>

            <p className="mt-6 border-l-2 border-carmin pl-4 text-sm font-medium uppercase tracking-wide text-white/85 md:text-base">
              L'entreprise est scientifique, spirituelle et culto-endogène
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={"/nos-services"}
                className="rounded-sm bg-carmin px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide hover:brightness-110"
              >
                Nos services
              </Link>
              <Link
                to={"/contact"}
                className="rounded-sm border border-white/40 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide hover:border-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ARCHITECTURE HOLISTIQUE ---------- */}

      <section className="bg-parchemin px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            Architecture holistique
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">
            Explorez nos Dimensions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 md:text-base">
            Cliquez sur chacune des dimensions pour découvrir nos services
            spécifiques
          </p>
        </div>

{/*  Dimensions  */}

        <div className="mx-auto mt-10 max-w-6xl md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {dimensionCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.key}
                to={card.href}
                className="mb-5 block border-l-4 border-slate-700 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:mb-0"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center bg-parchemin text-navy">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <ArrowRight className="h-4.5 w-4.5 text-slate-400 animate-bounce" strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-navy">
                  {card.title}
                </h3>

                {card.body && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {card.body}
                  </p>
                )}

                <p className="mt-3 text-sm italic leading-relaxed text-slate-500">
                  "{card.quote}"
                </p>
              </Link>
            );
          })}

        </div>
      </section>

      {/* ---------- FONDATEUR ---------- */}
      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl md:grid md:grid-cols-12 md:items-center md:gap-12">
          <div className="relative md:col-span-5 hover:scale-105 transition-all duration-200">
            {/* Remplace par la vraie photo du fondateur (asset non fourni dans la maquette) */}
            <img
              src="/mebenga.jpeg"
              alt="Mebenga Etoundi Joseph, fondateur et expert consultant chez Mebusco"
              className="h-105 w-full object-cover md:h-130 "
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
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
              Une vision forgée à l'excellence
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
              Diplômé de <strong className="text-navy">HEC Liège</strong>,
              Mebenga Etoundi Joseph apporte une expertise académique de
              classe mondiale alliée à une compréhension profonde des
              réalités du terrain.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              Sa conviction repose sur un constat simple : l'entreprise n'est
              pas qu'une machine à profits, c'est un organisme vivant qui
              doit puiser ses forces dans ses racines scientifiques, ses
              aspirations spirituelles et son ancrage culturel.
            </p>

            <blockquote className="mt-6 border-l-4 border-carmin bg-parchemin p-5 text-sm italic leading-relaxed text-slate-600 md:text-base">
              « Nous n'accompagnons pas seulement des structures, nous
              éveillons des consciences organisationnelles pour assurer une
              pérennité hors du commun. »
            </blockquote>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-navy">20+</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Années d'expérience
                </p>
              </div>
              <span className="h-10 w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-bold text-navy">HEC</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Alumni Liège
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ILS NOUS FONT CONFIANCE ---------- */}
      <section className="bg-parchemin px-4 py-14 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Ils nous font confiance
        </p>
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-4">
          {trustLogos.map((name) => (
            <div
              key={name}
              className="flex h-14 w-40 items-center justify-center bg-slate-300 text-xs font-semibold uppercase tracking-wide text-white"
            >
              {name}
            </div>
          ))}

        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-navy px-4 py-10 text-white md:px-8 md:py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-lg font-bold">Mebusco SARL</p>
          <p className="mt-1 text-sm text-white/70">
            Expertise &amp; Strategic Consulting
          </p>

          <hr className="my-5 border-white/15" />

          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <MapPin className="h-4.5 w-4.5 text-carmin" strokeWidth={1.6} />
              BP 12039 Yaoundé
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4.5 w-4.5 text-carmin" strokeWidth={1.6} />
              699 939 116 / 678 707 872
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4.5 w-4.5 text-carmin" strokeWidth={1.6} />
              contact@mebusco.com
            </li>
          </ul>
        </div>
      </footer>

      {/* Rappel : navLinks pilote aussi la tab bar mobile rendue dans <Navbar /> */}
      <span className="sr-only">{navLinks.length} sections principales</span>
    </div>
  );
}