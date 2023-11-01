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
import Warping from './Pages/Home/Project/Warping/Warping';
import Sizing from './Pages/Home/Project/Sizing/Sizing';
import Folding from './Pages/Home/Project/Folding/Folding';
import Production from './Pages/Home/Project/Production/Production';

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
  },
  {
    path:'/warping',
    element:<Warping></Warping>
  },
  {
    path:'/sizing',
    element:<Sizing></Sizing>
  },
  {
    path:'/folding',
    element:<Folding></Folding>
  },
  {
    path:'production',
    element:<Production></Production>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
