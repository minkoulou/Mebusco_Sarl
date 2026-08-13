import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/util";

// Libellés par défaut (peuvent être surchargés par page via la prop `labels`,
// puisque chaque page dimension utilise un wording marketing différent pour
// les mêmes liens : "Dimension Spirituelle" ici, "Sagesse Spirituelle" là).
const defaultLabels = {
  scientifique: "Dimension Scientifique",
  Spirituelle: "Dimension Spirituelle",
  endogène: "Culto-Endogène",
  formation: "Pôle Formation",
};

export default function OtherDimensions({ currentKey, labels = {} }) {
  const others = navLinks.filter(
    (link) => link.Key !== "accueil" && link.Key !== currentKey
  );
  const displayLabels = { ...defaultLabels, ...labels };

  return (
    <section className="bg-parchemin px-4 py-14 dark:bg-slate-800 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          Explorer nos autres dimensions
        </p>

        <div className="mt-6 flex flex-col gap-3">
          {others.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.Key}
                to={link.path}
                className="flex items-center gap-4 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900"
              >
                <Icon className="h-5 w-5 text-carmin" strokeWidth={1.6} />
                <span className="flex-1 text-sm font-medium text-navy dark:text-white">
                  {displayLabels[link.Key] ?? link.label}
                </span>
                <ArrowRight className="h-4.5 w-4.5 text-carmin" strokeWidth={1.6} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}