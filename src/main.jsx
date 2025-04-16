import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import App from './App'
import './index.css'

const router = createBrowserRouter([
{
  path:'/',
  element: <App />,
  children:[
    {index:true,element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/contact',element:<Contact/>},
    {path:'/blog',element:<Blog/>},
  ]
}

])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
