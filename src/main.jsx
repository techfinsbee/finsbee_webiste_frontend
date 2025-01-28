import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
