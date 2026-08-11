import { useState } from "react";
import { Menu, X, CircleUserRound } from "lucide-react";
import { navLinks } from "../data/util";
import { Link } from "react-router-dom";

/**
 * Navbar responsive unique.
 * - < md  : header fixe (logo + burger + compte) qui ouvre un tiroir de liens,
 *           PLUS une tab bar fixe en bas d'écran avec les 5 liens principaux.
 * - >= md : header classique avec liens horizontaux + CTA, pas de tab bar.
 *
 * `currentPath` sert uniquement à mettre un lien en surbrillance (état actif).
 * Passe le pathname de ton router (ex: useLocation().pathname avec react-router).
 * 
 * / Emblème de marque : cercle à 4 quadrants (signature visuelle Mebusco).
 * 
 * */ 
 
export default function NavBar({ currentPath = "/" }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ---------- HEADER (mobile + desktop) ---------- */}
      <header className="sticky top-0 z-40 bg-navy text-white">

        <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 md:px-8">
          
          {/* Logo */}

          <Link to={"/"} className="flex items-center gap-2.5 md:flex-1">
            <img src="/logo.jpeg" className="h-8 w-8 rounded-xl" />
            <span className="text-lg font-bold tracking-wide">MEBUSCO</span>
          </Link>

          {/* Liens horizontaux — desktop uniquement */}
          <nav className="hidden md:flex md:items-center md:justify-around bg-red-800 md:flex-3 mx-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.Key}
                  to={`${link.path}`}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-white ${
                    isActive ? "text-white" : "text-white/70"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.shortLabel ?? link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA — desktop uniquement */}
          <div className="hidden md:flex md:items-center md:gap-3 md:flex-1">
            <Link
              to={"/contact"}
              className="rounded-sm border border-white/30 px-4 py-2 text-sm font-semibold tracking-wide hover:border-white"
            >
              Contact
            </Link>
            
            <Link
              to={"/nos-services"}
              className="rounded-sm bg-carmin px-4 py-2 text-sm font-semibold tracking-wide hover:brightness-110"
            >
              Nos services
            </Link>

          </div>

          {/* Actions — mobile uniquement */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
              className="flex h-9 w-9 items-center justify-center"
            >
              <Menu className="h-5.5 w-5.5" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              aria-label="Mon compte"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
            >
              <CircleUserRound className="h-5 w-5" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      {/* ---------- TIROIR MENU — mobile uniquement ----------
          Ouvert par le burger : reprend les mêmes navLinks + les CTA,
          pour les liens secondaires qui n'ont pas leur place dans la tab bar. */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Fermer le menu"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-navy/60"
          />

          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-navy px-6 py-5 text-white shadow-xl">
            
            <div className="flex items-center justify-between">
              <span className="text-base font-bold tracking-wide">MENU</span>
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setDrawerOpen(false)}
                className="flex h-9 w-9 items-center justify-center"
              >
                <X className="h-5 w-5" strokeWidth={1.8} />
              </button>

            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.Key}
                  to={`${link.path}`}
                  onClick={() => setDrawerOpen(false)}
                  className="border-b border-white/10 py-3 text-sm font-medium tracking-wide text-white/85"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-6">
              <Link
                to={"/contact"}
                className="rounded-sm border border-white/30 px-4 py-3 text-center text-sm font-semibold tracking-wide"
              >
                Contact
              </Link>

              <Link
                to="/nos-services"
                className="rounded-sm bg-carmin px-4 py-3 text-center text-sm font-semibold tracking-wide"
              >
                Nos services
              </Link>

            </div>
          </div>
        </div>
      )}


      {/* ---------- TAB BAR BASSE — mobile uniquement ---------- */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 flex h-16 items-stretch border-t border-black/5 bg-parchemin md:hidden"
        aria-label="Navigation principale"
      >
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = currentPath === link.path;
          return (
            <Link
              key={link.Key}
              to={`${link.path}`}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-1 flex-col items-center justify-center gap-1 px-1 text-[10px] font-semibold uppercase tracking-tight ${
                isActive ? "text-carmin" : "text-slate-500"
              }`}
            >
              <Icon className="h-5.5 w-5.5" strokeWidth={1.6} />
              <span className="leading-none">{link.shortLabel}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}