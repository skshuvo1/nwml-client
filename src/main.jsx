import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main/Main';
import Portfolio from './Pages/Portfolio/Portfolio/Portfolio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
  },
  {
    path:'/portfolio',
    element:<Portfolio></Portfolio>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
