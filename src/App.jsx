import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Advisory from './pages/Advisory';
import Articles from './pages/Articles';
import HRMSArticle from './pages/HRMSArticle';
import ERPArticle from './pages/ERPArticle';
import IntegrationArticle from './pages/IntegrationArticle';
import BuyingGuideArticle from './pages/BuyingGuideArticle';
import Recognition from './pages/Recognition';
import Services from './pages/Services';
import PayrollOutsourcing from './pages/PayrollOutsourcing';

function Home() {
  return (
    <>
      <Hero />
      <Contact />
    </>
  );
}

function ScrollToHash() {

  const location = useLocation();

  React.useEffect(() => {

    if (location.hash) {

      const element = document.querySelector(location.hash);

      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }, 100);

      }

    } else {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>

      <ScrollToHash />
<Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/advisory"
          element={<Advisory />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/payroll-outsourcing-uae/*"
          element={<PayrollOutsourcing />}
        />

        <Route
          path="/articles"
          element={<Articles />}
        />


        <Route
          path="/articles/how-to-choose-the-right-hrms"
          element={<HRMSArticle />}
        />

        <Route
          path="/articles/why-erp-projects-fail"
          element={<ERPArticle />}
        />

        <Route
          path="/articles/erp-and-hr-software"
          element={<IntegrationArticle />}
        />

<Route
  path="/articles/10-questions-before-buying-business-software"
  element={<BuyingGuideArticle />}
/>

<Route
  path="/recognition"
  element={<Recognition />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;