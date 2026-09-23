import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { createRoot,hydrateRoot } from 'react-dom/client'
import {HelmetProvider} from 'react-helmet-async'
import './index.css'
// import {App} from './App.jsx'
import {Accueil} from './pages/accueil.jsx'
import Comprehension from './pages/comprehension.jsx'
import {ApprocheClassique} from './pages/approche-classique.jsx'
import Formation from './pages/formation.jsx'
import Contact from './pages/contact.jsx'
import ApprocheMetaphysique from  './pages/Approchemetaphysique.jsx'

 
 
 
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Accueil/>
  },
 
  {
    path:"/notre-comprehension-entreprise",
    element:<Comprehension/>
  },
 
  {
    path:"/approche-classique",
    element:<ApprocheClassique/>
  },
 
 {
    path:"/approche-metaphysique",
    element:<ApprocheMetaphysique/>
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

const rootElement = document.getElementById('root')

// L'application enveloppée du HelmetProvider pour le SEO
const app = (
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={routes} />
    </HelmetProvider>
  </StrictMode>
)

// Système intelligent d'hydratation / rendu pour la production
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}