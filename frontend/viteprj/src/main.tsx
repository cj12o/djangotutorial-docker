import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from '../pages/login.tsx'
import Home from '../pages/home.tsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
  {path:"/",element:<App/>,children:[
    {path:"/",element:<Home/>},
    {path:"/login",element:<Login/>}
  ]}
]) 

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>
  </RouterProvider>
  
)
