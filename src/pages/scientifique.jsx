import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import OtherDimensions from "../components/otherDimension";
import { quickTabs, sections } from "../data/dimensions";
import { Whatsapp } from "../components/whatsapp";
import Button from "../components/boutons";

function ListBox({ items }) {
  return (
    <ul className="space-y-3 border-l-2 border-navy bg-parchemin p-6 text-sm leading-relaxed text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-carmin" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FrameworkGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3 bg-navy p-4 dark:bg-slate-950">
      {items.map((label) => (
        <div
          key={label}
          className="flex h-20 items-center justify-center bg-white/5 px-2 text-center text-sm font-bold uppercase tracking-wide text-white"
        >
          {label}
        </div>
      ))}
    </div>
  );
}

export  function Scientifique() {
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
          <span className="text-navy dark:text-white">Dimension scientifique</span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16">
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-6 h-28 w-28 text-parchemin dark:text-slate-800 md:h-40 md:w-40"
        >
          <polygon points="50,3 95,25 95,75 50,97 5,75 5,25" fill="currentColor" />
        </svg>

        <div className="relative mx-auto max-w-6xl">
          <span className="inline-block bg-carmin px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            Expertise
          </span>
          <h1 className="mt-5 max-w-2xl font-serif text-3xl font-bold text-navy dark:text-white md:text-5xl">
            Ingénierie de Performance
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-500 dark:text-slate-400 md:text-base">
            L'approche rigoureuse de Mebusco transforme les données brutes en
            leviers stratégiques pour une croissance pérenne et structurée.
          </p>
        </div>
      </section>

      {/* ---------- ONGLETS DE NAVIGATION RAPIDE ---------- */}
      <nav className="flex gap-6 overflow-x-auto bg-navy px-4 dark:bg-slate-950 md:px-8">
        <div className="mx-auto flex max-w-6xl gap-6">
          {quickTabs.map((tab, i) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`whitespace-nowrap border-b-2 py-4 text-xs font-bold uppercase tracking-wide ${
                i === 0
                  ? "border-carmin text-white"
                  : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ---------- SECTIONS DE SERVICES ---------- */}

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <section key={section.id} id={section.id} className="hover:scale-101 hover:-translate-4 hover:drop-shadow-sm hover:drop-shadow-black
             hover:shadow-2xl transition-all hover:duration-500 scroll-mt-20 pb-10">
              <div className="flex items-start gap-3">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-carmin" strokeWidth={1.8} />
                <h2 className="font-serif text-lg font-bold text-navy dark:text-white md:text-xl">
                  {section.title}
                </h2>
              </div>

              <div className="mt-4">
                {section.type === "list" && <ListBox items={section.items} />}

                {section.type === "list-with-intro" && (
                  <div className="border-l-2 border-navy bg-parchemin p-6 text-sm leading-relaxed text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    <p className="mb-3">{section.intro}</p>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-carmin" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.type === "grouped-list" && (
                  <div className="space-y-3 border-l-2 border-navy bg-parchemin p-6 text-sm leading-relaxed text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {section.groups.map((group) => (
                      <div key={group.subtitle}>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          {group.subtitle}
                        </p>
                        <ul className="mt-2 space-y-2">
                          {group.items.map((item, i) => (
                            <li key={i} className="flex gap-2.5">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-carmin" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === "framework-grid" && (
                  <FrameworkGrid items={section.items} />
                )}
              </div>
            </section>
          );
        })}
      </div>

    <div className="max-w-screen  mx-auto">
      <img
        src="/reunion.jpeg"
        alt="Réunion stratégique avec l'équipe Mebusco"
        className="h-56 w-full object-cover contrast-70 hover:contrast-100 hover:scale-99 transition-all duration-300 md:h-80"
      />
     </div> 

      <OtherDimensions currentKey="scientifique" />
     <div className="w-full md:w-1/4 mx-auto p-4">  
      <Button  chemin='/contact' nom='demander un devis' bg='bg-white' color='text-black'/>
     </div> 

       <Whatsapp/>
      <Footer />
    </div>
  );
}