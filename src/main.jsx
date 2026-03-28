import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ExploreCars from './pages/ExploreCars.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
        path:"explore",
        element:<ExploreCars/>
      }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
