import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LendingPartner from "./components/LendingPartner.jsx";
import AboutUs from './components/AboutUs.jsx';
import PrivacyPage from "./components/PrivacyPage.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import FAQs from "./components/FAQs.jsx";
import MamaCalculator from "./components/MamaCalculator.jsx";
import MamaShoppingmall from "./components/MamaShoppingmall.jsx";
import PressRelease from "./components/PressRelease.jsx";
import Sitemap from "./components/Sitemap.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CustomerCare from "./components/CustomerCare.jsx";
import Blog from "./components/Blog.jsx";
import Feature from "./components/Feature.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Landing.jsx";
import Home from "./Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path:'/home',
    element: <Home />
  },
  {
    path:'/home/blue',
    element: <App />
  },
  {
    path: "/aboutus",
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
  {
    path: "/mama-calculator",
    element: <MamaCalculator />
  },
  {
    path: "/mama-shoppingmall",
    element: <MamaShoppingmall />
  },
  {
    path: "/press-release",
    element: <PressRelease />
  },
  {
    path: "/sitemap",
    element: <Sitemap />
  },
  {
    path: "/testimonials",
    element: <Testimonials />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/customer-care",
    element: <CustomerCare />
  },
  {
    path:"/features",
    element: <Feature />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
