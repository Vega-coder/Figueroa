import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import FotografiaComercialPage from "./pages/FotografiaComercialPage";
import EstrategiaWebPage from "./pages/EstrategiaWebPage";
import IaFactorHumanoPage from "./pages/IaFactorHumanoPage";
import PortafolioPage from "./pages/PortafolioPage";
import BlogPage from "./pages/BlogPage";
import ContactoPage from "./pages/ContactoPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Brief Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/fotografia-comercial" element={<FotografiaComercialPage />} />
        <Route path="/estrategia-web" element={<EstrategiaWebPage />} />
        <Route path="/ia-factor-humano" element={<IaFactorHumanoPage />} />
        <Route path="/portafolio" element={<PortafolioPage />} />

        {/* Supporting Routes */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/diario" element={<BlogPage />} />
        <Route path="/contacto" element={<ContactoPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
