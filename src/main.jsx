import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
// import {App} from './App.jsx'
import Accueil from './pages/accueil.jsx'
import Comprehension from './pages/comprehension.jsx'
import {ApprocheClassique} from './pages/approche-classique.jsx'
// import CultoEndogene from './pages/culto-endogene.jsx'
import Formation from './pages/formation.jsx'
import Contact from './pages/contact.jsx'
import ApprocheMetaphysique from  './pages/Approchemetaphysique.jsx'
import EtudesBusinessPlans from './pages/etudes-business-plans.jsx'
import SeminaireEntreprisesFamiliales from './pages/seminaire-entreprises-familiales.jsx'
import APropos from './pages/a-propos.jsx'
import References from './pages/references.jsx'

 
 
 
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
    path:"/etudes-business-plans",
    element:<EtudesBusinessPlans/>
  },
 
  {
    path:"/seminaire-entreprises-familiales",
    element:<SeminaireEntreprisesFamiliales/>
  },
 
  {
    path:"/a-propos",
    element:<APropos/>
  },
 
  {
    path:"/references",
    element:<References/>
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

const app = (
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={routes}/>
    </HelmetProvider>
  </StrictMode>
)

// react-snap injecte du HTML statique dans #root au build : on hydrate
// cette version plutôt que de la remplacer, pour garder le contenu
// visible immédiatement par les crawlers/agents avant même l'exécution du JS.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}