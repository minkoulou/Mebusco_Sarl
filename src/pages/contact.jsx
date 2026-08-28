import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import {Whatsapp} from "../components/whatsapp";
import {ContactForm} from '../components/contactForm'

const infoCards = [
  {
    icon: MapPin,
    label: "Siège social",
    lines: ["BP 12939 Yaoundé", "Cameroun"],
  },
  {
    icon: Phone,
    label: "Lignes directes",
    lines: ["699 939 116", "678 707 572"],
  },
  {
    icon: Mail,
    label: "Support email",
    lines: ["mebuscosarl@gmail.com", "Réponse sous 24h"],
  },
];

export default function Contact() {
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
          <span className="text-navy dark:text-white">Contact</span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <span className="block h-1 w-10 bg-carmin" />
          <h1 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            Expertise &amp; Conseil Stratégique à votre service. Parlons de
            vos projets d'avenir.
          </p>
        </div>
      </section>

       <div className="mx-auto max-w-xl px-4 pb-14 md:px-8">
        <ContactForm />
      </div>

      {/* ---------- CARTES INFO ---------- */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row">
          {infoCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.label}
                className="flex flex-1 items-start gap-4 rounded-xl bg-parchemin p-5 dark:bg-slate-800"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy dark:bg-slate-700">
                  <Icon className="h-4.5 w-4.5 text-white" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {card.label}
                  </p>
                  {card.lines.map((line, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-sm font-semibold text-navy dark:text-white"
                          : "text-sm text-slate-500 dark:text-slate-400"
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ---------- FORMULAIRE ---------- */}
      <Footer />
      <Whatsapp/>
    </div>
  );
}