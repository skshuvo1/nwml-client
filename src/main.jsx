import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main/Main';
import Portfolio from './Pages/Portfolio/Portfolio/Portfolio';
import Toyota from './Pages/Home/Project/Production/Toyota/Toyota';
import Warping from './Pages/Home/Project/Warping/Warping';
import Sizing from './Pages/Home/Project/Sizing/Sizing';
import Folding from './Pages/Home/Project/Folding/Folding';
import Production from './Pages/Home/Project/Production/Production';
import Rapier from './Pages/Home/Project/Production/Rapier/Rapier';
import Picanol from './Pages/Home/Project/Production/Picanol/Picanol';
import Vamatex from './Pages/Home/Project/Production/Vamatex/Vamatex';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/portfolio',
    element: <PrivateRoute><Portfolio></Portfolio></PrivateRoute>
  },
  {
    path: '/warping',
    element: <Warping></Warping>
  },
  {
    path: '/sizing',
    element: <Sizing></Sizing>
  },
  {
    path: '/folding',
    element: <Folding></Folding>
  },
  {
    path: 'production',
    element: <PrivateRoute><Production></Production></PrivateRoute>,
  },
  {
    path: '/toyota',
    element: <Toyota></Toyota>
  },
  {
    path: 'rapier',
    element: <Rapier></Rapier>
  },
  {
    path: 'picanol',
    element: <Picanol></Picanol>
  },
  {
    path: 'vamatex',
    element: <Vamatex></Vamatex>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
