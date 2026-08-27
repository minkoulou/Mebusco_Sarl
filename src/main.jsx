import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {App} from './App.jsx'
import Accueil from './pages/accueil.jsx'
import {Scientifique} from './pages/scientifique.jsx'
import {Spirituelle} from './pages/spirituelle.jsx'
import CultoEndogene from './pages/culto-endogene.jsx'
import Formation from './pages/formation.jsx'
import Contact from './pages/contact.jsx'



const routes=createBrowserRouter([
  {
    path:"/",
    element:<Accueil/>
  },

  {
    path:"/dimension-scientifique",
    element:<Scientifique/>
  },

   {
    path:"/dimension-spirituelle",
    element:<Spirituelle/>
  },

 {
    path:"/dimension-culto-endogene",
    element:<CultoEndogene/>
  },

   {
    path:"/formation",
    element:<Formation/>
  },


   {
    path:"/contact",
    element:<Contact/>
  }
])

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <RouterProvider router={routes}/>
 </StrictMode>   
)
