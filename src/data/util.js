import {Home,Lightbulb,FlaskConical,Share2,GraduationCap} from "lucide-react"

export const navLinks = [
    {
        Key:"accueil",
        label:"Accueil",
        shortLabel:"Accueil",
        path:"/",
        icon:Home
    },

    {
        Key:"comprehension",
        label:"Notre Compréhension de l'Entreprise",
        shortLabel:"Notre Vision",
        path:"/notre-comprehension-entreprise",
        icon:Lightbulb
    },

    {
      Key:"intervention-classique",
      label:"Approche intervention classique",
      shortLabel:" intervention classique",
      path:"/approche-classique",
      icon:FlaskConical 
    },
    
    {
        Key:"approche-metaphysique",
        label:"Approche selon le modèle J.E. Mebenga de l'entreprise métaphysique",
        shortLabel:"Modèle J.E. Mebenga",
        path:"/approche-metaphysique",
        icon:Share2
    },

     {
        Key:"formation",
        label:"Formation",
        shortLabel:"Nos Formations",
        path:"/formation",
        icon:GraduationCap
    },
    
]