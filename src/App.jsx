import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import EstudioPage from "./pages/EstudioPage";
import ServiciosPage from "./pages/ServiciosPage";
import PortafolioPage from "./pages/PortafolioPage";
import ProcesoPage from "./pages/ProcesoPage";
import RevistaPage from "./pages/RevistaPage";
import BlogPage from "./pages/BlogPage";
import ContactoPage from "./pages/ContactoPage";

// Note: Using HashRouter ensures 100% compatibility with GitHub Pages static hosting,
// direct reloads, subpaths, and Vercel without 404 rewrite issues.
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estudio" element={<EstudioPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/portafolio" element={<PortafolioPage />} />
        <Route path="/proceso" element={<ProcesoPage />} />
        <Route path="/revista" element={<RevistaPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/diario" element={<BlogPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
