import {Home,FlaskConical,Church,Share2,GraduationCap} from "lucide-react"

export const navLinks = [
    {
        Key:"accueil",
        label:"Accueil",
        shortlabel:"Accueil",
        path:"/",
        icon:Home
    },


    {
      Key:"scientifique",
      label:"Dimension scientifique",
      shortlabel:"Dimension Scientifique",
      path:"/dimension-scientifique",
      icon:FlaskConical 
    },
    
    {
        Key:"Spirituelle",
        label:"Dimension spirituelle",
        shortlabel:"Spirituelle",
        path:"/dimension-spirituelle",
        icon:Church
    },
    
    {
        Key:"endogène",
        label:"Dimension culturelle et endogène",
        shortlabel:"culto-endogène",
        path:"/dimension-culturelle-endogene",
        icon:Share2
    },

     {
        Key:"formation",
        label:"Formation",
        shortlabel:"Formation",
        path:"/formation",
        icon:GraduationCap
    },
    
]