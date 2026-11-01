import {Home,FileChartColumn,GraduationCap,Award,UserRound,Globe,Briefcase} from "lucide-react"

export const navLinks = [
    {
        Key:"accueil",
        label:"Accueil",
        shortLabel:"Accueil",
        path:"/",
        icon:Home
    },

    {
        Key:"etudes",
        label:"Études et business plans",
        shortLabel:"Études",
        path:"/etudes-business-plans",
        icon:FileChartColumn
    },

    {
      Key:"formation",
      label:"Formations",
      shortLabel:"Formations",
      path:"/formation",
      icon:GraduationCap
    },

    {
        Key:"references",
        label:"Références",
        shortLabel:"Références",
        path:"/references",
        icon:Award
    },

    {
        Key:"etranger",
        label:"Diaspora",
        shortLabel:"Diaspora",
        path:"/investiguer",
        icon:Globe
    },

      {
        Key:"PME",
        label:"PME INTERNATIONALES",
        shortLabel:"PME INTERNATIONALES",
        path:"/developper-activite-cmr",
        icon:Briefcase
    },

    {
        Key:"apropos",
        label:"À propos",
        shortLabel:"À propos",
        path:"/a-propos",
        icon:UserRound
    },

]