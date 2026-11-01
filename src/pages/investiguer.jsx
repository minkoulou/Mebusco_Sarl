import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { Whatsapp } from "../components/whatsapp";
import { Seo, breadcrumbJsonLd } from "../components/seo";

const SERVICE = "Investir et entreprendre depuis l’étranger";

const accompagnements = [
  {
    titre: "Clarifier avant d’investir",
    texte:
      "Nous examinons votre idée, les informations disponibles et les points à vérifier avant d’engager des dépenses.",
    recu: "Une note de diagnostic, une liste de risques et un plan des prochaines étapes.",
  },
  {
    titre: "Construire un projet viable",
    texte:
      "Nous analysons le marché visé et préparons les hypothèses de revenus, de coûts, de trésorerie et de financement.",
    recu: "Une étude ciblée ou un business plan avec un modèle financier modifiable.",
  },
  {
    titre: "Suivre l’activité à distance",
    texte:
      "Nous organisons un suivi convenu avec vous : visites, échanges, documents disponibles et décisions attendues.",
    recu: "Un tableau d’avancement et des comptes rendus selon une fréquence définie.",
  },
];

const etapes = [
  {
    titre: "Qualifier votre besoin",
    texte:
      "Un échange sur votre projet, son échéance et les décisions que vous devez prendre.",
  },
  {
    titre: "Cadrer la mission",
    texte:
      "Une proposition écrite précise le périmètre, les livrables, le calendrier et les honoraires.",
  },
  {
    titre: "Analyser et documenter",
    texte:
      "Nous distinguons les faits vérifiés, les hypothèses et les informations non confirmées.",
  },
  {
    titre: "Restituer et accompagner",
    texte:
      "Nous présentons les résultats et convenons, si nécessaire, d’un suivi complémentaire.",
  },
];

const questions = [
  {
    q: "Puis-je commencer avec une simple idée ?",
    r: "Oui. Un premier échange permet de déterminer les informations manquantes et de définir une éventuelle mission de diagnostic.",
  },
  {
    q: "Gérez-vous les fonds de mon projet ?",
    r: "Non. Vous gardez la maîtrise de vos fonds et réglez directement les dépenses de votre activité. MEBUSCO facture ses prestations de conseil et de suivi.",
  },
  {
    q: "Le suivi garantit-il la rentabilité ?",
    r: "Non. Il vous apporte de la visibilité et des éléments pour décider. Les résultats dépendent notamment du marché, des moyens engagés et de l’exécution.",
  },
];

/* classes partagées par les champs du formulaire (clair + sombre) */
const labelCls = "block text-sm font-bold text-navy dark:text-slate-200";
const inputCls =
  "mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-base font-normal text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carmin dark:border-slate-600 dark:bg-slate-900 dark:text-white";

export  function InvestirDepuisEtranger() {

  const location = useLocation();

  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const lines = [
      "Bonjour MEBUSCO,",
      "Je souhaite échanger sur le service : " + SERVICE,
      "",
    ];
    for (const [k, v] of data.entries()) {
      if (k !== "Accord") lines.push(k + " : " + v);
    }
    lines.push("", "Accord donné pour être recontacté au sujet de cette demande.");

    window.location.href =
      "mailto:mebuscosarl@gmail.com?subject=" +
      encodeURIComponent("Demande — " + SERVICE) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));

    setStatus(
      "Votre logiciel de messagerie va préparer le courriel. Vérifiez-le puis cliquez sur Envoyer. Si rien ne s’ouvre, écrivez à mebuscosarl@gmail.com ou contactez-nous par WhatsApp. Aucune demande n’a été envoyée automatiquement.",
    );
  }

  return (
    <div className="bg-white pb-16 dark:bg-slate-900 md:pb-0">

      <Seo
        title="Investir et entreprendre depuis l’étranger"
        description="Depuis Yaoundé, MEBUSCO vous accompagne pour évaluer votre projet, construire son modèle économique et suivre ses étapes avec des informations documentées."
        path="/investiguer"
        jsonLd={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Investir depuis l’étranger", path: "/investiguer" },
        ])}
      />

      <NavBar currentPath={location.pathname} />

      <main>

      {/* ---------- HERO ---------- */}
      
      <section className="bg-navy px-4 py-14 text-white dark:bg-slate-950 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-carmin">
            Diaspora • Porteurs de projets • Associés à distance
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.12] md:text-6xl">
            Investir et entreprendre depuis l’étranger
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Votre projet au Cameroun mérite des décisions éclairées et un suivi de proximité.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-white/75 md:text-base">
            Depuis Yaoundé, MEBUSCO vous accompagne pour évaluer votre projet,
            construire son modèle économique et suivre ses étapes avec des
            informations documentées.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#demande"
              className="flex items-center justify-center gap-4 rounded-2xl border-2 border-navy bg-white px-6 py-3 text-center font-semibold uppercase text-black shadow-[4px_2px_5px_navy] transition-all duration-300 -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none dark:bg-red-500 dark:text-white"
            >
              Présenter mon projet
              <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={1.8} />
            </a>
            <a
              href="https://wa.me/237678707572"
              className="rounded-2xl border-2 border-white/40 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              Échanger sur WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs text-white/60 md:text-sm">
            Premier échange de qualification de 20 minutes, sans engagement.
          </p>
        </div>
      </section>

      {/* ---------- VOTRE SITUATION ---------- */}
      <section className="px-4 py-14 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.5fr] md:gap-12">
          <h2 className="text-2xl font-bold leading-tight text-navy dark:text-white md:text-3xl">
            Votre situation,
            <br />
            notre point de départ.
          </h2>
          <div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
              {[
                "Vous souhaitez créer une activité au Cameroun sans être présent en permanence ?",
                "Vous financez le projet d’un proche et souhaitez en comprendre les besoins et les résultats ?",
                "Vous préparez la reprise ou le développement d’une entreprise familiale ?",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-carmin" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Nous définissons avec vous la décision à éclairer, les
              informations nécessaires et le résultat attendu avant de
              proposer une mission.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- ACCOMPAGNEMENT ADAPTÉ ---------- */}
      <section className="bg-parchemin px-4 py-14 dark:bg-slate-800 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-navy dark:text-white md:text-3xl">
            Un accompagnement adapté à votre étape
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {accompagnements.map((a) => (
              <article
                key={a.titre}
                className="rounded-2xl border-t-[3px] border-carmin bg-white p-6 shadow-sm dark:bg-slate-900"
              >
                <h3 className="text-lg font-bold text-navy dark:text-white">
                  {a.titre}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {a.texte}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <strong className="text-navy dark:text-white">Vous recevez :</strong>{" "}
                  {a.recu}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            <strong className="text-navy dark:text-white">Honoraires sur devis.</strong>{" "}
            Le prix dépend du périmètre, du terrain à couvrir et des
            compétences à mobiliser. Les prestations, frais et modalités de
            paiement sont convenus avant le démarrage.
          </p>
        </div>
      </section>

      {/* ---------- MÉTHODE ---------- */}
      <section className="px-4 py-14 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.5fr] md:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-carmin">
              Notre méthode
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy dark:text-white md:text-3xl">
              De la question initiale à la décision.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Vous savez ce qui est réalisé, ce qui reste incertain et quelle
              étape envisager ensuite.
            </p>
          </div>

          <div>
            {etapes.map((e, i) => (
              <article
                key={e.titre}
                className="border-b border-slate-200 py-4 first:pt-0 dark:border-slate-700"
              >
                <h3 className="text-lg font-bold text-navy dark:text-white">
                  <span className="text-carmin">0{i + 1} / </span>
                  {e.titre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {e.texte}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LIVRABLES / EXPÉRIENCE ---------- */}
      <section className="bg-parchemin px-4 py-14 dark:bg-slate-800 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-navy dark:text-white md:text-3xl">
            Des livrables pour agir
          </h2>

          <div className="mt-6 rounded-r-2xl border-l-4 border-carmin bg-white p-6 dark:bg-slate-900">
            <span className="text-xs font-bold uppercase tracking-widest text-carmin">
              Illustration de mission — exemple fictif
            </span>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Un porteur de projet souhaite développer une activité de services
              à Yaoundé. Le dossier de décision pourrait comparer les segments
              de clientèle, les charges de lancement et trois scénarios de
              trésorerie. Le suivi pourrait ensuite rapprocher les actions
              prévues des actions réalisées.
            </p>
          </div>

          <h3 className="mt-8 text-lg font-bold text-navy dark:text-white">
            Expérience de l’animateur du cabinet
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            Joseph MEBENGA ETOUNDI intervient en élaboration de business plans,
            modélisation économique et financière, études de faisabilité et
            accompagnement à la création d’entreprises.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            <strong className="text-navy dark:text-white">Références anonymisées :</strong>{" "}
            réalisation de business plans pour un client individuel et un
            client professionnel ; contribution à une étude de faisabilité
            d’une raffinerie d’or pour une entreprise publique en 2024. Aucun
            résultat commercial ou financier de ces clients n’est présenté ici.
          </p>
        </div>
      </section>

      {/* ---------- QUESTIONS ---------- */}
      <section className="px-4 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-navy dark:text-white md:text-3xl">
            Vos questions
          </h2>

          <div className="mt-6">
            {questions.map((item) => (
              <details
                key={item.q}
                className="border-b border-slate-200 py-4 dark:border-slate-700"
              >
                <summary className="cursor-pointer font-bold text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carmin dark:text-white">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                  {item.r}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DEMANDE ---------- */}
      <section
        id="demande"
        className="scroll-mt-20 bg-parchemin px-4 py-14 dark:bg-slate-800 md:px-8 md:py-16"
      >
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.5fr] md:gap-12">

          <div>
            <h2 className="text-2xl font-bold text-navy dark:text-white md:text-3xl">
              Présentez-nous votre projet
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Indiquez votre besoin et votre échéance. Nous vous recontacterons
              pour préciser la suite.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              <a href="tel:+237699939116" className="font-semibold text-carmin hover:underline">
                +237 699 93 91 16
              </a>
              <br />
              <a href="tel:+237678707572" className="font-semibold text-carmin hover:underline">
                +237 678 70 75 72
              </a>
              <br />
              <a href="mailto:mebuscosarl@gmail.com" className="font-semibold text-carmin hover:underline">
                mebuscosarl@gmail.com
              </a>
            </p>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Ne transmettez pas de document confidentiel à ce stade.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 md:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelCls}>
                Nom complet *
                <input name="Nom" required maxLength={100} autoComplete="name" className={inputCls} />
              </label>
              <label className={labelCls}>
                Courriel *
                <input name="Courriel" type="email" required maxLength={150} autoComplete="email" className={inputCls} />
              </label>
              <label className={labelCls}>
                Téléphone / WhatsApp
                <input name="Téléphone" type="tel" maxLength={40} autoComplete="tel" className={inputCls} />
              </label>
              <label className={labelCls}>
                Pays de résidence *
                <input name="Pays" required maxLength={80} autoComplete="country-name" className={inputCls} />
              </label>
              <label className={labelCls}>
                Entreprise ou projet
                <input name="Entreprise" maxLength={120} autoComplete="organization" className={inputCls} />
              </label>
              <label className={labelCls}>
                Ville / pays du projet *
                <input name="Localisation du projet" required maxLength={120} className={inputCls} />
              </label>
              <label className={labelCls}>
                Accompagnement souhaité
                <select name="Besoin" className={inputCls}>
                  <option>Diagnostic de projet</option>
                  <option>Étude de marché / business plan</option>
                  <option>Recherche de partenaires</option>
                  <option>Suivi local</option>
                  <option>Autre besoin</option>
                </select>
              </label>
              <label className={labelCls}>
                Échéance envisagée
                <select name="Échéance" className={inputCls}>
                  <option>Moins de 3 mois</option>
                  <option>3 à 6 mois</option>
                  <option>Plus de 6 mois</option>
                  <option>À préciser</option>
                </select>
              </label>
              <label className={`${labelCls} sm:col-span-2`}>
                Votre besoin en quelques lignes *
                <textarea
                  name="Description"
                  required
                  maxLength={1500}
                  className={`${inputCls} min-h-30`}
                />
              </label>
              <label className="flex items-start gap-2.5 text-sm font-normal text-slate-700 dark:text-slate-300 sm:col-span-2">
                <input
                  type="checkbox"
                  name="Accord"
                  required
                  className="mt-1 h-4 w-4 accent-carmin"
                />
                J’accepte d’être recontacté par MEBUSCO au sujet de cette demande.
              </label>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Ce formulaire prépare un courriel dans votre messagerie. Vous
              devez l’envoyer vous-même. Les informations serviront à traiter
              votre demande ; aucune inscription publicitaire automatique. Pour
              une demande de rectification ou de suppression, contactez
              mebuscosarl@gmail.com.
            </p>

            <button
              type="submit"
              className="mt-5 flex items-center justify-center gap-3 rounded-2xl border-2 border-navy bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[4px_2px_5px_rgba(200,17,46,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none dark:border-carmin dark:bg-carmin"
            >
              Préparer ma demande par courriel
              <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={1.8} />
            </button>

            <p
              role="status"
              aria-live="polite"
              className="mt-4 text-sm font-bold text-navy dark:text-white"
            >
              {status}
            </p>
          </form>

        </div>
      </section>

      </main>

      <Whatsapp />
      <Footer />
    </div>
  );
}