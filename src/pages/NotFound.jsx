import { Frown } from "lucide-react";
import { Link } from "react-router-dom";

export function NOTFOUND (){
      return(
        <>
          <main className="flex flex-col justify-center items-center">

             <div className="min-h-screen flex flex-col max-w-6xl items-center justify-center gap-6">

                <Frown size={72} className="text-gray-600"/>

                <h1 className="text-7xl px-2 capitalize font-bold text-slate-800 text-center">oups !</h1>

                <h2 className="text-3xl px-2 capitalize text-center">404 - Page non trouvée</h2>

                <p className="text-2xl px-2 text-center"> Le lien est peut-être incorrect ou la page a été déplacée.</p>

                <Link to="/" className="px-2 text-xl text-white active:scale-105 transition-all duration-500 border p-2 rounded-full bg-blue-600">Retour à l'accueil</Link>

             </div>

          </main>
        </>
      )
}