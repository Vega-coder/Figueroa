import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "../config/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Fotografía Comercial", path: "/fotografia-comercial" },
    { name: "Estrategia & Web", path: "/estrategia-web" },
    { name: "IA + Factor Humano", path: "/ia-factor-humano" },
    { name: "Casos / Portafolio", path: "/portafolio" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-md border-b border-muted-border transition-all duration-300">
        <div className="container-editorial flex items-center justify-between h-20 md:h-22">
          {/* Logo Horizontal: Isotipo + Nombre + Tagline */}
          <Link to="/" className="flex items-center gap-3.5 group">
            {/* Isotipo auténtico: Letra G con bigote */}
            <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="./isotype.svg"
                alt="Gemberth Figueroa Isotipo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display tracking-[0.14em] text-sm md:text-base font-bold uppercase text-carbon group-hover:text-brand transition-colors">
                Gemberth Figueroa
              </span>
              <span className="text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.24em] text-muted font-semibold">
                Fotografía · Estrategia Digital · IA
              </span>
            </div>
          </Link>

          {/* Desktop Clean Horizontal Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[0.72rem] uppercase tracking-[0.18em] font-medium text-carbon/80">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-brand font-bold border-b-2 border-brand"
                      : "hover:text-brand"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button: Cotizar por WhatsApp */}
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-carbon px-5 py-2.5 rounded text-[0.72rem] uppercase tracking-[0.2em] font-bold shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <FaWhatsapp className="text-base" />
              <span>Cotizar por WhatsApp</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-carbon hover:text-brand transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-carbon text-paper flex flex-col justify-between p-6 sm:p-10 animate-fadeIn lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center border-b border-paper/10 pb-5">
            <div className="flex items-center gap-3">
              <img
                src="./isotype-dark.svg"
                alt="Isotipo"
                className="w-9 h-9 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-wider text-paper uppercase">
                  Gemberth Figueroa
                </span>
                <span className="text-[0.55rem] uppercase tracking-widest text-brand">
                  Ocaña · Colombia
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-paper/80 hover:text-brand text-2xl p-2 cursor-pointer"
              aria-label="Cerrar"
            >
              <FiX />
            </button>
          </div>

          <div className="py-8 space-y-4 my-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-display text-2xl sm:text-3xl font-light tracking-tight transition-colors ${
                    isActive ? "text-brand font-semibold italic pl-3 border-l-2 border-brand" : "text-paper/90 hover:text-brand"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-paper/10 space-y-4">
            <a
              href={SITE_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-brand text-carbon py-3.5 rounded font-bold uppercase text-xs tracking-widest shadow-md"
            >
              <FaWhatsapp className="text-lg" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <div className="flex justify-between items-center text-[0.65rem] text-ash uppercase tracking-wider">
              <span>{SITE_CONFIG.location}</span>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                {SITE_CONFIG.instagram}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
