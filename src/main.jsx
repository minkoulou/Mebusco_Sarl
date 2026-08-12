import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {App} from './App.jsx'
import Accueil from './pages/accueil.jsx'
import Scientifique from './pages/scientifique.jsx'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Accueil/>
  },

  {
    path:"/dimension-scientifique",
    element:<Scientifique/>
  }
])

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <RouterProvider router={routes}/>
 </StrictMode>   
)
