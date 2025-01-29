import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LendingPartner from "./components/LendingPartner.jsx";
import AboutUs from './components/AboutUs.jsx';
import PrivacyPage from "./components/PrivacyPage.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import FAQs from "./components/FAQs.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/lending-partners",
    element: <LendingPartner />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPage />
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />
  },
  
  {
    path: "/faqs",
    element: <FAQs />
  },

])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
