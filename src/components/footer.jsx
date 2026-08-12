import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy px-4 py-10 text-white dark:bg-slate-950 md:px-8 md:py-14">
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
            <a href="tel:+237699939116" className="hover:underline">
              699 939 116
            </a>
            {" / "}
            <a href="tel:+237678707872" className="hover:underline">
              678 707 872
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-4.5 w-4.5 text-carmin" strokeWidth={1.6} />
            <a href="mailto:contact@mebusco.com" className="hover:underline">
              contact@mebusco.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}