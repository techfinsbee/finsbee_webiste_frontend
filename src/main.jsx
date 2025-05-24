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
import HomeCancellation from "./components/Home/HomeCancellation.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Landing.jsx";
import './App.css'
import Home from "./Home.jsx";
import PartnerWithUs from "./components/PartnerWithUs";
import ReferFriend from "./components/ReferFriend";
import Blogs from "./components/ViewBlogs";
import PersonalLoan from "./components/OurProducts/PersonalLoan.jsx";
import BusinessLoan from "./components/OurProducts/BusinessLoan.jsx";
import HomeLoan from "./components/OurProducts/HomeLoan.jsx";
import LoanAgainstProperty from "./components/OurProducts/LoanAgainstProperty.jsx";
import LoanAgainstSecurities from "./components/OurProducts/LoanAgainstSecurity.jsx";
import CreditScore from "./components/OurProducts/CheckCreditScore.jsx";
import PersonalLoanCity from './components/Cities/PersonalLoanCity';
import ScrollToTop from './components/ScrollToTop';
import CheckEligibility from "./components/Eligibility/CheckEligibility.jsx";
const cities = ['Banglore','Kolkata','Jaipur','Coimbatore','Ahmedabad','Delhi','Mumbai','Chennai','Hyderabad','Pune','Surat','Indore','Vadodara','Lucknow','Varanasi','Patna','Noida','Amritsar']

const cityRoutes = cities.map((city) => ({
  path: `/apply-loan/personal-loan/${city.toLowerCase()}`,
  element: <PersonalLoanCity city={city} />,
}));

// Wrapper component to include ScrollToTop
const AppWithScrollToTop = ({ children }) => (
  <>
    <ScrollToTop />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWithScrollToTop><App /></AppWithScrollToTop>
  },
  {
    path:'/home',
    element: <AppWithScrollToTop><Home /></AppWithScrollToTop>
  },
  {
    path:'/home/landing',
    element: <AppWithScrollToTop><Landing /></AppWithScrollToTop>
  },
  {
    path: "/aboutus",
    element: <AppWithScrollToTop><AboutUs /></AppWithScrollToTop>
  },
  {
    path: "/privacy-policy",
    element: <AppWithScrollToTop><PrivacyPage /></AppWithScrollToTop>
  },
  {
    path: "/terms-and-conditions",
    element: <AppWithScrollToTop><TermsAndConditions /></AppWithScrollToTop>
  },
  {
    path: "/faqs",
    element: <AppWithScrollToTop><FAQs /></AppWithScrollToTop>
  },
  {
    path: "/mama-calculator",
    element: <AppWithScrollToTop><MamaCalculator /></AppWithScrollToTop>
  },
  {
    path: "/mama-shoppingmall",
    element: <AppWithScrollToTop><MamaShoppingmall /></AppWithScrollToTop>
  },
  {
    path: "/press-release",
    element: <AppWithScrollToTop><PressRelease /></AppWithScrollToTop>
  },
  {
    path: "/sitemap",
    element: <AppWithScrollToTop><Sitemap /></AppWithScrollToTop>
  },
  {
    path: "/testimonials",
    element: <AppWithScrollToTop><Testimonials /></AppWithScrollToTop>
  },
  {
    path: "/blog",
    element: <AppWithScrollToTop><Blog /></AppWithScrollToTop>
  },
  {
    path: "/customer-care",
    element: <AppWithScrollToTop><CustomerCare /></AppWithScrollToTop>
  },
  {
    path:"/features",
    element: <AppWithScrollToTop><Feature /></AppWithScrollToTop>
  },
  {
    path:"/cancellation-and-refund",
    element: <AppWithScrollToTop><HomeCancellation /></AppWithScrollToTop>
  },
  {
    path: "/partner-with-us",
    element: <AppWithScrollToTop><PartnerWithUs /></AppWithScrollToTop>,
  },
  {
    path: "/refer-a-friend",
    element: <AppWithScrollToTop><ReferFriend /></AppWithScrollToTop>,
  },
  {
    path: "/blogs",
    element: <AppWithScrollToTop><Blogs /></AppWithScrollToTop>,
  },
  {
    path: "/personal-loan",
    element: <AppWithScrollToTop><PersonalLoan /></AppWithScrollToTop>,
  },
  {
    path: "/business-loan",
    element: <AppWithScrollToTop><BusinessLoan /></AppWithScrollToTop>,
  },
  {
    path: "/home-loan",
    element: <AppWithScrollToTop><HomeLoan /></AppWithScrollToTop>,
  },
  {
    path: "/loan-against-property",
    element: <AppWithScrollToTop><LoanAgainstProperty /></AppWithScrollToTop>,
  },
  {
    path: "/loan-against-securities",
    element: <AppWithScrollToTop><LoanAgainstSecurities /></AppWithScrollToTop>,
  },
  {
    path: "/check-credit-score",
    element: <AppWithScrollToTop><CreditScore /></AppWithScrollToTop>,
  },
  {
    path: "/check-eligibility",
    element: <AppWithScrollToTop><CheckEligibility /></AppWithScrollToTop>,
  },
  ...cityRoutes.map(route => ({
    ...route,
    element: <AppWithScrollToTop>{route.element}</AppWithScrollToTop>
  }))
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)