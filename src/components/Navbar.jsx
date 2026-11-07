import React, { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: "Inicio", href: "#" },
    { name: "Estudio", href: "#estudio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Proceso", href: "#proceso" },
    { name: "Revista", href: "#revista" },
    { name: "Diario", href: "#", active: true },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/5 transition-all duration-300">
        <div className="container-editorial flex items-center justify-between h-20 md:h-24">
          {/* Logo / Brand mark */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center font-display font-light text-ink text-base group-hover:border-gold transition-colors duration-500">
              GF
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-[0.18em] text-xs md:text-sm font-semibold uppercase text-ink group-hover:text-gold-deep transition-colors duration-500">
                Gemberth Figueroa
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.28em] text-ash font-medium">
                Fotografía & Diseño de Autor
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[0.72rem] uppercase tracking-[0.25em] font-medium text-ink/75">
            <a href="#" className="text-gold-deep font-semibold">Diario</a>
            <a href="#estudio" className="hover:text-gold-deep transition-colors duration-300">Estudio</a>
            <a href="#servicios" className="hover:text-gold-deep transition-colors duration-300">Servicios</a>
            <a href="#portafolio" className="hover:text-gold-deep transition-colors duration-300">Portafolio</a>
            <a href="#contacto" className="hover:text-gold-deep transition-colors duration-300">Contacto</a>
          </nav>

          {/* Menu Trigger Button */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.25em] font-semibold text-ink border border-ink/25 px-4 py-2 hover:border-gold hover:text-gold-deep transition-all duration-500"
            >
              <span>Escríbenos</span>
              <FiArrowUpRight className="text-xs" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 px-3 py-2 text-ink hover:text-gold-deep transition-colors duration-300"
              aria-label="Abrir menú"
            >
              <span className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold hidden md:inline">
                {isOpen ? "Cerrar" : "Menú"}
              </span>
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-ink text-paper flex flex-col justify-between p-8 md:p-16 animate-fadeIn transition-opacity duration-500">
          <div className="flex justify-between items-center border-b border-paper/10 pb-6">
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-gold font-medium">
              Índice General · MMXXIV
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-paper/70 hover:text-gold transition-colors p-2 text-xl"
              aria-label="Cerrar"
            >
              <FiX />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto max-w-5xl mx-auto w-full">
            <div className="space-y-4 md:space-y-6">
              {menuLinks.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-display text-3xl md:text-5xl font-light tracking-tight transition-colors duration-500 ${
                      link.active
                        ? "text-gold italic"
                        : "text-paper/90 hover:text-gold hover:translate-x-2 transition-transform duration-300"
                    }`}
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="border-t md:border-t-0 md:border-l border-paper/10 pt-8 md:pt-0 md:pl-12 flex flex-col justify-between">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium mb-3">
                  Estudio Creativo Boutique
                </p>
                <p className="font-serif italic text-lg md:text-xl text-paper/80 leading-relaxed">
                  "Fotografía, dirección de arte y diseño concebidos con la cadencia y devoción del oficio artesanal."
                </p>
              </div>

              <div className="mt-8 space-y-2 text-[0.75rem] text-ash-soft">
                <p className="font-mono text-paper/90">contacto@gemberthfigueroa.com</p>
                <p>Ciudad de México · Proyectos globales</p>
              </div>
            </div>
          </div>

          <div className="border-t border-paper/10 pt-4 flex flex-col md:flex-row justify-between text-[0.68rem] text-ash uppercase tracking-[0.25em]">
            <span>© 2026 Gemberth Figueroa</span>
            <span>Hecho con tiempo, no con prisa.</span>
          </div>
        </div>
      )}
    </>
  );
}
