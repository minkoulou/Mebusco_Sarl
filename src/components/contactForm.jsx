import { useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CircleCheck } from "lucide-react";
import { prestationOptions } from "../data/site";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export  function ContactForm() {

  const [searchParams] = useSearchParams();
  const prestationDepuisLien = searchParams.get("prestation") || "";

  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error
  const [prestation, setPrestation] = useState(
    prestationOptions.some((p) => p.id === prestationDepuisLien)
      ? prestationDepuisLien
      : ""
  );

  function handleSubmit(e) {
    e.preventDefault();

    // Piège à robots : ce champ est invisible pour un humain. Si un
    // formulaire automatisé le remplit, on abandonne silencieusement l'envoi.
    if (formRef.current.website.value) return;

    setStatus("loading");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
          formRef.current.reset();
          setPrestation("");
          setStatus("sent");
      })
      .catch((err) => {
        console.error("Erreur EmailJS:", err);
        setStatus("error");
      });

  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800 md:p-8 mt-12 ">
      <h2 className="text-lg font-bold text-navy dark:text-white">
        Formulaire de Contact
      </h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Veuillez remplir les informations ci-dessous. Un courriel ou un téléphone suffit pour vous répondre.
      </p>

      {status === "sent" ? (
        <div className="mt-6 flex flex-col items-center gap-3 rounded-xl bg-parchemin py-8 text-center dark:bg-slate-900">
          <CircleCheck className="h-10 w-10 text-carmin" strokeWidth={1.4} />
          <p className="font-semibold text-navy dark:text-white">Votre demande a été envoyée.</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Nous vous répondrons avec les prochaines étapes. La mission ou la préinscription ne sont
            confirmées qu'après notre réponse écrite.
          </p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Nom complet */}
          <div>
            <label
              htmlFor="nom"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
            >
              Nom complet
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              maxLength={120}
              placeholder="Ex: Jean Dupont"
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
            />
          </div>

          {/* Email professionnel */}
          <div>
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
            >
              Email professionnel
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@entreprise.com"
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label
              htmlFor="telephone"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
            >
              Téléphone
            </label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              placeholder="+237 ..."
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
            />
          </div>        

          {/* Sujet de consultation */}
          <div>
            <label
              htmlFor="sujet"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
            >
              Sujet de consultation
            </label>
            <input
              id="sujet"
              name="sujet"
              maxLength={180}
              placeholder="Ex: Étude pour un projet touristique"
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
            >
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Décrivez votre besoin, le stade d'avancement du projet et le résultat recherché..."
              className="mt-1.5 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
            />
          </div>

          
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Ne pas remplir ce champ</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Consentement */}
          <label className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
            <input
              type="checkbox"
              required
              name="consentement"
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-carmin focus:ring-carmin"
            />
            <span>
              J'ai lu les{" "}
              <Link to="/confidentialite" className="text-carmin underline underline-offset-2 hover:no-underline">
                informations de confidentialité
              </Link>{" "}
              et souhaite être recontacté(e) au sujet de cette demande.
            </span>
          </label>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Ne transmettez pas ici de données bancaires ou d'informations confidentielles.
          </p>

          {status === "error" && (
            <p className="text-sm text-carmin">
              L'envoi a échoué. Réessaie dans un instant.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 bg-carmin py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:brightness-110 disabled:opacity-60"
          >
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
            ) : (
              <Send className="h-4 w-4" strokeWidth={2} />
            )}
            Envoyer le message
          </button>
        </form>
      )}
    </div>
  );
}