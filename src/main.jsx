import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main/Main';
import Portfolio from './Pages/Portfolio/Portfolio/Portfolio';
import Toyota from './Pages/Home/Project/Toyota/Toyota';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    
  },
  {
    path:'/portfolio',
    element:<Portfolio></Portfolio>
  },
  {
    path:'/toyota',
    element:<Toyota></Toyota>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
