import { MapPin, Phone, Mail, ArrowRight, ArrowUp  } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/util";

function FooterNavLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex items-center gap-2 py-1 text-sm text-white/70 transition-colors duration-300 hover:text-white"
      >
        <ArrowRight
          className="h-3.5 w-3.5 shrink-0 -translate-x-2 text-carmin opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          strokeWidth={2}
        />
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-carmin transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    </li>
  );
}

// Icons 


// tiktok icon
export const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>TikTok</title>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.62 4.2 1.21 1.28 2.91 2 4.67 2.14v3.91c-1.63-.03-3.23-.52-4.59-1.43-.27-.18-.52-.38-.76-.6-.01 2.37-.01 4.74-.01 7.11 0 3.32-1.63 6.32-4.58 7.64-2.82 1.3-6.24.9-8.68-1.01-2.58-1.92-3.71-5.38-2.73-8.49 1-3.26 4.31-5.33 7.68-4.73v4c-1.39-.42-2.96-.06-4 1-.95.91-1.37 2.33-1.03 3.6.38 1.57 1.83 2.68 3.44 2.62 2.19-.07 3.76-2.14 3.48-4.3-.01-4.73 0-9.46-.01-14.19z" />
  </svg>
);

// facebook icon
export const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Facebook</title>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
  </svg>
);


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-16 md:gap-12 ">
          {/* ---------- MARQUE ---------- */}
          <div className="md:col-span-4">
            <p className="text-lg font-bold">Mebusco SARL</p>
            <p className="mt-1 text-sm text-white/70">
              Expertise &amp; Strategic Consulting
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Cabinet de conseil, études et formation basé à Yaoundé —
              approche scientifique, spirituelle et culto-endogène de
              l'entreprise.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 border border-white/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:border-carmin hover:bg-carmin"
            >
              Demander un devis
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* ---------- NAVIGATION ---------- */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">
              Navigation
            </p>
            <span className="mt-2 block h-0.5 w-8 bg-carmin" />

            <ul className="mt-5 space-y-1">
              {navLinks.map((link) => (
                <FooterNavLink key={link.Key} to={link.path}>
                  {link.label}
                </FooterNavLink>
              ))}
              <FooterNavLink to="/contact">Contact</FooterNavLink>
            </ul>
          </div>

          {/* ---------- CONTACT ---------- */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">
              Nous contacter
            </p>
            <span className="mt-2 block h-0.5 w-8 bg-carmin" />

            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li className="flex items-center gap-3">
                <MapPin className="h-4.5 w-4.5 shrink-0 text-white text-xl" strokeWidth={1.8} />
                BP 12039 Yaoundé,Cameroun
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 shrink-0 text-white text-xl" strokeWidth={1.8} />
                <span>
                  <a href="tel:+237699939116" className="transition-colors duration-300 hover:text-green-500 hover:underline">
                    +237 699 939 116
                  </a>
                  {" / "}
                  <a href="tel:+237678707872" className="transition-colors duration-300 hover:text-carmin hover:underline">
                    +237 678 707 872
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 shrink-0 text-white text-xl" strokeWidth={1.8} />
                <a href="mailto:mebuscosarl@gmail.com" className="transition-colors duration-300 hover:text-carmin hover:underline">
                  mebuscosarl@gmail.com
                </a>
              </li>
            </ul>
          </div>

        {/* ---------- Nos reseaux sociaux ---------- */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">
              Nous suivre
            </p>
            <span className="mt-2 block h-0.5 w-8 bg-carmin" />

            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li className="flex items-center gap-3">
                <FacebookIcon className="h-4.5 w-4.5 shrink-0 text-blue-600 text-xl" strokeWidth={1.8} />
                <span>
                  <a href="https://www.facebook.com/share/1KM2shWWr9/?mibextid=wwXIfr" className="transition-colors duration-300 hover:text-carmin hover:underline">
                    Facebook
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <TikTokIcon className="h-4.5 w-4.5 shrink-0 text-white text-xl" strokeWidth={1.8} />
                <a href="https://vt.tiktok.com/ZSqEQ6f4b" className="transition-colors duration-300 hover:text-carmin hover:underline">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>


        <hr className="my-8 border-white/15" />

        {/* ---------- BAS DE PAGE ---------- */}
        <div className="flex flex-col items-center gap-4 text-xs text-white/40 md:flex-row md:justify-between">
          <p>© {year} Mebusco SARL. Tous droits réservés.</p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/40 transition-colors duration-300 hover:text-white"
          >
            Retour en haut
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-carmin group-hover:bg-carmin">
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </button>
        </div>
    </footer>
  );
}