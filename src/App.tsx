// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Company from "./pages/aboutUs/Company";
import Portfolio from "./pages/aboutUs/Portfolio";
import Vision from "./pages/aboutUs/Vision";
import Contact from "./pages/contactUs/Contact";
import FAQ from "./pages/contactUs/FAQ";
import Guide from "./pages/product/Guide";
import Materials from "./pages/product/Materials";
import Product from "./pages/product/Product";
import Main from "./pages/main/Main";
import Header from "./\bcomponents/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/company" element={<Company />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
