import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMapPin, FiArrowUp } from "react-icons/fi";
import { SITE_CONFIG } from "../config/siteConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-carbon text-paper border-t border-carbon pt-20 pb-12">
      <div className="container-editorial">
        {/* SECTION 6: CLOSING CTA BLOCK */}
        <div className="pb-16 border-b border-paper/15 text-center max-w-3xl mx-auto">
          <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold inline-block mb-4">
            Iniciemos Hoy · Ocaña & Colombia
          </span>

          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-paper leading-tight tracking-tight">
            ¿Listo para transformar la forma en que tu negocio se muestra y vende en internet?
          </h2>

          <p className="mt-5 font-serif italic text-base sm:text-lg text-paper/75 leading-relaxed">
            Conversemos sobre tu marca. Te mostramos qué piezas necesitas para elevar el valor de tu oferta este mes.
          </p>

          <div className="mt-8">
            <a
              href={SITE_CONFIG.getWhatsAppUrl("Hola Gemberth, vi el cierre de tu sitio web y quiero hablar sobre mi marca para este mes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand hover:bg-brand-hover text-carbon px-8 py-4 rounded text-xs uppercase tracking-[0.22em] font-bold shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <FaWhatsapp className="text-lg" />
              <span>Hablar con Gemberth por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* BOTTOM METADATA & LINKS */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Logo & Brand Info */}
          <div className="md:col-span-5 flex items-center gap-4">
            <img
              src="./isotype-dark.svg"
              alt="Gemberth Figueroa"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display tracking-[0.14em] text-sm font-bold uppercase text-paper">
                Gemberth Figueroa
              </span>
              <span className="text-[0.6rem] uppercase tracking-widest text-brand">
                Fotografía · Estrategia Digital · IA
              </span>
            </div>
          </div>

          {/* Location & Social */}
          <div className="md:col-span-5 flex flex-wrap items-center gap-6 text-xs text-ash">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-brand text-sm" />
              <span>{SITE_CONFIG.location}</span>
            </div>
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand transition-colors"
            >
              <FaInstagram className="text-brand text-sm" />
              <span>{SITE_CONFIG.instagram}</span>
            </a>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-ash hover:text-brand transition-colors font-semibold cursor-pointer"
            >
              <span>Subir</span>
              <FiArrowUp />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between text-[0.65rem] text-ash uppercase tracking-wider gap-2">
          <span>© 2026 Gemberth Figueroa. Todos los derechos reservados.</span>
          <span>Tecnología de Alto Rendimiento · Criterio Humano</span>
        </div>
      </div>
    </footer>
  );
}
