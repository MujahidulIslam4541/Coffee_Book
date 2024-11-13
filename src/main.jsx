import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './Lyouts/MainLayouts.jsx';
import Home from './Pages/Home.jsx';
import Coffes from './Pages/Coffes.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import CoffeeCard from './components/CoffeeCard.jsx';
import CoffeDetails from './Pages/CoffeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <CoffeeCard></CoffeeCard>,
            loader:()=> fetch('../coffees.json')
          },
          {
            path: '/category/:category',
            element: <CoffeeCard></CoffeeCard>,
            loader:()=> fetch('../coffees.json')
          },
        ],
      },
      {
        path: '/coffees',
        element: <Coffes></Coffes>,
        loader:()=> fetch('../coffees.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/coffee/:id',
        element: <CoffeDetails></CoffeDetails>,
        loader:()=> fetch('../coffees.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
