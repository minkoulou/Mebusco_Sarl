import { Link, useLocation } from "react-router-dom";
import { CalendarDays, Clock, MapPin, Check } from "lucide-react";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { Whatsapp } from "../components/whatsapp";
import Button from "../components/boutons";
import { Seo, breadcrumbJsonLd } from "../components/seo";
import {
    seminar,
  publicCible,
  quatreAxes,
  programme,
  dossierPerennisation,
  forfaitInclus,
} from "../data/seminaire";

export default function SeminaireEntreprisesFamiliales() {
  const location = useLocation();

  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">

      <Seo
        title="Séminaire Entreprises familiales — jeux et enjeux de la pérennité"
        description={`Séminaire résidentiel du ${seminar.dates} : gouverner, transmettre et faire durer l'entreprise familiale. ${seminar.prix}, préinscription sans paiement.`}
        path="/seminaire-entreprises-familiales"
        jsonLd={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          {
            name: "Séminaire Entreprises familiales",
            path: "/seminaire-entreprises-familiales",
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
            Séminaire Entreprises familiales
          </span>
        </div>
      </div>

      {/* ---------- HERO + CARTE TARIF ---------- */}
      <section className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:items-start">

          <div className="md:col-span-7">
            <span className="block h-1 w-10 bg-carmin" />
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-carmin">
              Séminaire résidentiel · Préinscriptions
            </p>
            <h1 className="mt-2 font-serif text-2xl font-bold md:text-4xl">
              Entreprises familiales : jeux et enjeux de la pérennité
            </h1>
            <p className="mt-4 text-sm text-white/80 md:text-base">
              Gouverner, transmettre et faire durer l'entreprise familiale.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/80 md:text-sm">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-carmin" strokeWidth={1.8} />
                {seminar.dates}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-carmin" strokeWidth={1.8} />
                {seminar.duree}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-carmin" strokeWidth={1.8} />
                {seminar.lieu}
              </span>
            </div>
          </div>

          <aside className="rounded-2xl border-2 border-white/15 bg-white/5 p-6 shadow-[6px_6px_0_rgba(200,17,46,0.35)] backdrop-blur-sm md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
              Le forfait par participant
            </p>
            <p className="mt-1 text-3xl font-extrabold text-white">
              {seminar.prix}
            </p>
            <p className="mt-3 text-sm text-white/70">
              Hébergement, restauration prévue au programme et supports pédagogiques.
            </p>
            <div className="mt-5">
              <Button chemin='/contact' nom='demander une préinscription' bg='bg-white' color='text-black'/>
            </div>
            <p className="mt-4 text-xs text-white/60">
              Demande sans paiement. L'inscription sera confirmée après
              communication et acceptation des conditions définitives.
            </p>
          </aside>

        </div>
      </section>

      {/* ---------- À QUI S'ADRESSE CE SÉMINAIRE ---------- */}
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            À qui s'adresse ce séminaire ?
          </p>
          <h2 className="mt-2 text-xl font-bold text-navy dark:text-white md:text-2xl">
            Préparer la continuité au-delà du fondateur
          </h2>

          <ul className="mt-4 flex flex-wrap gap-2">
            {publicCible.map((p) => (
              <li
                key={p}
                className="rounded-full bg-parchemin px-4 py-1.5 text-xs font-semibold text-navy dark:bg-slate-800 dark:text-white"
              >
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            Aucun prérequis technique n'est exigé. Une connaissance de
            l'entreprise sur laquelle vous souhaitez travailler facilite les
            ateliers. Les professionnels du conseil et de l'accompagnement
            peuvent également participer.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quatreAxes.map((axe) => (
              <div key={axe.titre}>
                <h3 className="text-sm font-bold text-navy dark:text-white">{axe.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {axe.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LE PARCOURS PÉDAGOGIQUE ---------- */}
      <section className="bg-parchemin px-4 py-12 dark:bg-slate-800 md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            Le parcours pédagogique
          </p>
          <h2 className="mt-2 text-xl font-bold text-navy dark:text-white md:text-2xl">
            Trois jours pour construire votre feuille de route
          </h2>

          <div className="mt-8 space-y-6">
            {programme.map((jour, i) => (
              <div key={jour.date} className="rounded-2xl bg-white p-6 dark:bg-slate-900">
                <p className="text-xs font-bold uppercase tracking-widest text-carmin">
                  Jour {i + 1} · {jour.date}
                </p>
                <h3 className="mt-1 text-base font-bold text-navy dark:text-white">
                  {jour.titre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {jour.texte}
                </p>
                <p className="mt-3 text-sm font-semibold text-navy dark:text-white">
                  {jour.resultat}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs italic text-slate-500 dark:text-slate-400">
            Le modèle J.E. Mebenga est présenté comme un cadre de réflexion de
            son auteur et mis en discussion. Les restitutions personnelles
            demeurent volontaires.
          </p>
        </div>
      </section>

      {/* ---------- DOSSIER DE PÉRENNISATION + FORFAIT ---------- */}
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-carmin">
              Votre dossier de pérennisation
            </p>
            <h2 className="mt-2 text-lg font-bold text-navy dark:text-white">
              Repartir avec des premières bases de travail
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {dossierPerennisation.map((d) => (
                <li key={d} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-carmin" strokeWidth={2} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Les productions individuelles appartiennent aux entreprises
              participantes. Chacun choisit les informations qu'il partage. La
              grille pédagogique ne constitue pas un audit juridique, fiscal
              ou financier.
            </p>
          </div>

          <div className="rounded-2xl border-l-2 border-navy bg-parchemin p-6 dark:border-slate-600 dark:bg-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wide text-navy dark:text-white">
              Le forfait comprend
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {forfaitInclus.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-carmin" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-navy dark:text-white">
              À votre charge
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Le déplacement jusqu'à l'hôtel, le dîner du premier jour et
              toute consommation ou prestation non incluse. Le lieu et les
              modalités d'accueil seront précisés avant confirmation.
            </p>
          </div>

        </div>
      </section>

      {/* ---------- ANIMATION + COMMENT PARTICIPER ---------- */}
      <section className="bg-parchemin px-4 py-12 dark:bg-slate-800 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-carmin">
              Animation
            </p>
            <h2 className="mt-2 text-lg font-bold text-navy dark:text-white">
              Joseph Mebenga Etoundi
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Ingénieur commercial HEC Liège, consultant et enseignant
              associé à l'Université Catholique d'Afrique Centrale de 2010 à
              2020.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Une intervention d'avocat d'affaires est prévue sur les
              dimensions juridiques de la gouvernance et de la transmission.
              L'intervenant reste à confirmer.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-navy dark:text-white">
              Comment participer ?
            </h3>
            <ol className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex gap-2">
                <span className="font-bold text-carmin">1.</span>
                <span>Adressez votre demande avec le nombre de participants envisagé.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-carmin">2.</span>
                <span>Recevez les informations définitives et les conditions de réservation.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-carmin">3.</span>
                <span>Validez votre inscription selon les modalités communiquées.</span>
              </li>
            </ol>
            <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Aucun règlement n'est demandé sur cette page. Les conditions de
              maintien, de report, d'annulation et de remboursement seront
              communiquées avant paiement.
            </p>
            <div className="mt-5">
              <Button chemin='/contact' nom='demander une préinscription' bg='bg-white' color='text-black'/>
            </div>
          </div>

        </div>
      </section>

      </main>

      <Whatsapp/>
      <Footer />
    </div>
  );
}