import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from "./pages/Home.jsx";
import GenderTemplate from "./pages/GenderTemplate.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ProductTemplate from "./pages/ProductTemplate.jsx";
import { useEffect } from "react";
import {men, women} from './products.js'
import "./index.scss";

function App() {
  return (
    <BrowserRouter basename="/">
      <AppContent />
    </BrowserRouter>
  );
}
function AppContent() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return(
    <>
        <Header/>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/men" element={<GenderTemplate gender={men}/>}></Route>
              <Route path="/women" element={<GenderTemplate gender={women}/>}></Route>
              <Route path="/about-us" element={<AboutUs/>}></Route>
              <Route path="/product/:id" element={<ProductTemplate/>}></Route>
          </Routes>
        <Footer/>
    </>
  )
}

export default App
