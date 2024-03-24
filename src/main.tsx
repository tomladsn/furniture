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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmCFOAlEaRNxfIP0xIuiLW9CEqjAIM0ao",
    authDomain: "furniture-644ca.firebaseapp.com",
    projectId: "furniture-644ca",
    storageBucket: "furniture-644ca.appspot.com",
    messagingSenderId: "304650859627",
    appId: "1:304650859627:web:843e7fa6aa3e73b227ad2e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
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
