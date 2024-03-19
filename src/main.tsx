import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Shop } from './components/pages/new-component/shop';
import{ CheckOutPage } from './components/pages/check-out-page/check-out-page';
import { Configuratorpage } from './components/pages/configurator/configuratorpage'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/configurator",
      element: <Configuratorpage />,
    },
    {
      path: "/checkout",
      element: <CheckOutPage />,
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
