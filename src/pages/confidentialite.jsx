import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { Whatsapp } from "../components/whatsapp";
import { Seo, breadcrumbJsonLd } from "../components/seo";

export default function Confidentialite() {
  const location = useLocation();

  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">

      <Seo
        title="Confidentialité — Mebusco SARL"
        description="Politique de confidentialité de Mebusco SARL : usage des informations transmises via le formulaire de contact, canaux de transmission, vos droits."
        path="/confidentialite"
        jsonLd={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Confidentialité", path: "/confidentialite" },
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
          <span className="text-navy dark:text-white">Confidentialité</span>
        </div>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="bg-navy px-4 py-12 text-white dark:bg-slate-950 md:px-8 md:py-16 ">
        <div className="mx-auto max-w-6xl principal">
          <span className="block h-1 w-10 bg-carmin" />
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-carmin ">
            Informations pratiques
          </p>
          <h1 className="mt-2 max-w-2xl font-serif text-2xl font-bold md:text-4xl">
            Confidentialité et données de contact
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            Les informations saisies servent à traiter votre demande et à
            vous recontacter.
          </p>
        </div>
      </section>

      {/* ---------- CONTENU ---------- */}
      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10">

          <div>
            <h2 className="text-lg font-bold text-navy dark:text-white">
              Votre demande
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Mebusco SARL, à Yaoundé, utilise les coordonnées et les
              informations de projet que vous choisissez de communiquer pour
              préparer une réponse, un devis ou une proposition de formation.
              Aucun abonnement publicitaire n'est demandé par ce formulaire.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy dark:text-white">
              Canaux de transmission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              L'envoi direct du formulaire, lorsqu'il est disponible, passe
              par un service tiers d'envoi d'e-mails. Si vous choisissez le
              courriel ou WhatsApp, votre message est transmis par votre
              application et soumis aux conditions de ce service. Aucun
              message n'est envoyé tant que vous n'avez pas déclenché
              l'envoi.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy dark:text-white">
              Informations à préserver
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Ne joignez pas de données bancaires, de mots de passe ni de
              documents confidentiels à ce premier contact. Les modalités
              d'échange des pièces nécessaires à une mission seront convenues
              séparément.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy dark:text-white">
              Vos coordonnées
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Pour demander une rectification ou la suppression de vos
              informations de contact, écrivez à{" "}
              <a href="mailto:mebuscosarl@gmail.com" className="font-semibold text-carmin hover:underline">
                mebuscosarl@gmail.com
              </a>
              . Le traitement de la demande tient compte des documents qu'il
              peut être nécessaire de conserver dans le cadre d'une relation
              contractuelle.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy dark:text-white">
              Navigation
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Cette version du site ne met en place ni outil publicitaire ni
              mesure d'audience par cookies. L'hébergeur et les services de
              transmission peuvent traiter des données techniques
              nécessaires à leur fonctionnement.
            </p>
          </div>

        </div>
      </section>

      </main>

      <Whatsapp/>
      <Footer />
    </div>
  );
}