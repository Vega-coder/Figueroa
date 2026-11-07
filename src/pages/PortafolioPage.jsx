import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { SITE_CONFIG } from "../config/siteConfig";
import { portfolioCases } from "../data/briefData";

export default function PortafolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedCase, setSelectedCase] = useState(null);

  const filterTabs = [
    "Todos",
    "Foto de Producto & Bodegón",
    "Arquitectura & Espacios Comerciales",
    "Diseño Web & Marcas",
  ];

  const filtered =
    activeFilter === "Todos"
      ? portfolioCases
      : portfolioCases.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-paper text-carbon flex flex-col justify-between selection:bg-brand/25 font-sans">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-muted-border bg-pearl">
          <div className="container-editorial">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold block mb-4">
              Portafolio Seleccionado · Casos Reales
            </span>
            <h1 className="heading-mega text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-carbon leading-[1.02] max-w-5xl">
              Casos donde la imagen y la web generaron valor real.
            </h1>
            <p className="mt-6 font-serif italic text-lg sm:text-2xl text-muted max-w-3xl leading-relaxed">
              No mostramos fotos por estética vacía. Cada proyecto responde a un problema de negocio concreto: justificar un precio más alto, multiplicar reservas o eliminar la fricción al vender.
            </p>
          </div>
        </section>

        {/* FILTER BAR */}
        <div className="py-6 border-b border-muted-border bg-paper sticky top-20 md:top-22 z-30">
          <div className="container-editorial flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-muted mr-2">
                Filtrar por:
              </span>
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === tab
                      ? "bg-brand text-carbon font-bold shadow-sm"
                      : "bg-pearl hover:bg-muted-border/60 text-muted"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <span className="font-mono text-xs text-muted">
              {filtered.length} proyectos mostrados
            </span>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <section className="py-16 md:py-24">
          <div className="container-editorial">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedCase(item)}
                  className="editorial-card group cursor-pointer rounded-2xl overflow-hidden p-6 bg-paper flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-carbon/5 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-carbon/85 text-paper px-2.5 py-1 rounded text-[0.6rem] uppercase tracking-wider font-semibold">
                        {item.category}
                      </div>
                    </div>

                    <div className="text-[0.65rem] uppercase tracking-wider font-mono text-muted mb-1">
                      {item.client}
                    </div>

                    <h3 className="heading-display text-xl sm:text-2xl text-carbon group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>

                    {/* Impact Box */}
                    <div className="mt-4 p-4 rounded-xl bg-pearl border border-muted-border/60 space-y-2.5 text-xs">
                      <div>
                        <span className="font-bold text-carbon uppercase text-[0.62rem] tracking-wider block">
                          El reto del cliente:
                        </span>
                        <p className="text-muted font-normal mt-0.5">{item.problem}</p>
                      </div>
                      <div className="pt-2 border-t border-muted-border/40">
                        <span className="font-bold text-brand uppercase text-[0.62rem] tracking-wider block">
                          Impacto y resultado:
                        </span>
                        <p className="text-carbon font-medium mt-0.5">{item.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-muted-border/60 flex items-center justify-between text-xs font-bold text-carbon group-hover:text-brand uppercase tracking-wider">
                    <span>Ver caso detallado</span>
                    <FiArrowUpRight className="text-base" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Case Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-carbon/80 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-paper text-carbon w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-carbon/20 my-8">
            <div className="p-6 sm:p-10">
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <span className="text-[0.65rem] uppercase tracking-widest text-brand font-bold block">
                    {selectedCase.category} · {selectedCase.client}
                  </span>
                  <h3 className="heading-display text-2xl sm:text-4xl text-carbon mt-1">
                    {selectedCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 text-muted hover:text-carbon font-bold text-xl cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-carbon/10">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-pearl border border-muted-border">
                  <span className="font-bold text-xs uppercase tracking-wider text-carbon block">
                    El problema que tenía el cliente:
                  </span>
                  <p className="mt-1 text-muted leading-relaxed">{selectedCase.problem}</p>
                </div>

                <div className="p-4 rounded-xl bg-brand/10 border border-brand/30">
                  <span className="font-bold text-xs uppercase tracking-wider text-carbon block">
                    Cómo lo resolvimos y el impacto en sus ventas:
                  </span>
                  <p className="mt-1 text-carbon font-medium leading-relaxed">{selectedCase.impact}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-muted-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={SITE_CONFIG.getWhatsAppUrl(`Hola Gemberth, vi el caso de ${selectedCase.title} y quiero algo similar para mi negocio.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-carbon px-6 py-3 rounded text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Cotizar solución similar por WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-xs uppercase tracking-wider font-semibold text-muted hover:text-carbon cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
