import { Phone } from "lucide-react";

export function Whatsapp (){
    return (
        <>
          <a href="https://wa.me/237699939116" target="_blank " rel="noopener noreferrer"  className="fixed z-20 w-15 h-15 drop-shadow-green-400 drop-shadow-md animate-bounce flex justify-center items-center right-2 bg-green-400 rounded-full md:bottom-4 bottom-14 ">
            <Phone size={34}  strokeWidth={1.6} className="text-white"/>
          </a>
        </>
    )
}