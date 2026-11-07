import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-paper border-t border-ink/10 pt-20 pb-12 text-ink">
      <div className="container-editorial">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-ink/10">
          {/* Brand Manifesto Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-ink/30 flex items-center justify-center font-display font-light text-ink text-base group-hover:border-gold transition-colors">
                GF
              </div>
              <span className="font-display tracking-[0.2em] text-sm uppercase font-semibold text-ink group-hover:text-gold-deep transition-colors">
                Gemberth Figueroa
              </span>
            </Link>
            <p className="font-serif italic text-base text-ash leading-relaxed max-w-sm">
              Estudio de fotografía y diseño fundado en 2012. Fotografía profesional, diseño gráfico y dirección de arte con la cadencia del oficio.
            </p>
            <div className="text-xs font-mono text-ash">
              Ciudad de México · México
            </div>
          </div>

          {/* Col 1: El Estudio */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[0.7rem] uppercase tracking-[0.3em] font-bold text-ink">
              El Estudio
            </h4>
            <ul className="space-y-2.5 text-xs text-ash">
              <li><Link to="/estudio" className="hover:text-gold-deep transition-colors">Sobre Gemberth</Link></li>
              <li><Link to="/proceso" className="hover:text-gold-deep transition-colors">Proceso creativo</Link></li>
              <li><Link to="/estudio" className="hover:text-gold-deep transition-colors">Manifiesto</Link></li>
            </ul>
          </div>

          {/* Col 2: Creaciones */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[0.7rem] uppercase tracking-[0.3em] font-bold text-ink">
              Creaciones
            </h4>
            <ul className="space-y-2.5 text-xs text-ash">
              <li><Link to="/portafolio" className="hover:text-gold-deep transition-colors">Portafolio</Link></li>
              <li><Link to="/blog" className="hover:text-gold-deep transition-colors">Diario editorial</Link></li>
              <li><Link to="/revista" className="hover:text-gold-deep transition-colors">Revista impresa</Link></li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[0.7rem] uppercase tracking-[0.3em] font-bold text-ink">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-xs text-ash">
              <li><Link to="/servicios" className="hover:text-gold-deep transition-colors">Fotografía editorial</Link></li>
              <li><Link to="/servicios" className="hover:text-gold-deep transition-colors">Diseño gráfico</Link></li>
              <li><Link to="/servicios" className="hover:text-gold-deep transition-colors">Branding & Identidad</Link></li>
              <li><Link to="/servicios" className="hover:text-gold-deep transition-colors">Dirección de arte</Link></li>
            </ul>
          </div>

          {/* Col 4: Horario */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[0.7rem] uppercase tracking-[0.3em] font-bold text-ink">
              Horario
            </h4>
            <div className="space-y-1.5 text-xs text-ash font-mono">
              <p className="font-sans text-[0.68rem] uppercase tracking-wider text-ink font-semibold">Lun — Vie</p>
              <p>8:00 — 12:00</p>
              <p>14:00 — 18:00</p>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.25em] text-ink hover:text-gold-deep transition-colors font-semibold cursor-pointer"
            >
              <span>Subir</span>
              <FiArrowUp />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.68rem] uppercase tracking-[0.22em] text-ash">
          <div>
            © 2026 Gemberth Figueroa. Todos los derechos reservados.
          </div>
          <div className="font-serif italic capitalize tracking-normal text-sm text-ink/70">
            Hecho con tiempo, no con prisa.
          </div>
        </div>
      </div>
    </footer>
  );
}
