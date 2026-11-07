import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiX, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { portfolioProjects } from "../data/siteData";

export default function PortafolioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["Todos", "Fotografía", "Branding", "Diseño", "Editorial"];

  const filtered =
    activeCategory === "Todos"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between selection:bg-gold/20 selection:text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-ink/10">
          <div className="container-editorial">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium mb-4 block">
              Archivo de Obras · 2012 — 2026
            </span>
            <h1 className="heading-mega text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-ink leading-[0.94] tracking-tight max-w-6xl">
              Historias contadas con oficio.
            </h1>
            <p className="mt-8 md:mt-12 font-serif italic text-xl sm:text-2xl text-ash max-w-3xl leading-relaxed">
              Una selección curada de proyectos donde la fotografía, el diseño y la estrategia se unen para construir marcas memorables. Cada cliente ha confiado en nuestra mirada para hacer visible su esencia.
            </p>
          </div>
        </section>

        {/* FILTER BAR */}
        <div className="py-8 border-b border-ink/10 bg-paper sticky top-20 md:top-24 z-30">
          <div className="container-editorial flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-ash font-semibold mr-2">
                Disciplina:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[0.72rem] uppercase tracking-[0.25em] font-semibold py-1.5 px-3 transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "text-gold-deep border-b border-gold-deep"
                      : "text-ink/60 hover:text-gold-deep"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="hidden md:inline-block font-mono text-xs text-ash">
              {filtered.length} proyectos
            </span>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <section className="py-16 md:py-24">
          <div className="container-editorial">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedProject(item)}
                  className="editorial-card group cursor-pointer p-6 sm:p-8 bg-paper flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-6 bg-ink/10 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-paper/90 backdrop-blur-sm px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.2em] font-medium text-ink">
                        {item.category}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[0.68rem] font-mono text-ash mb-2">
                      <span>{item.client}</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="heading-display text-2xl sm:text-3xl text-ink group-hover:text-gold-deep transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gold-deep font-sans">
                      {item.discipline}
                    </p>
                    <p className="mt-3 font-serif italic text-sm text-ash line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-ink/5 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.25em] text-ink group-hover:text-gold-deep font-semibold">
                    <span>Ver caso completo</span>
                    <FiArrowUpRight />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 md:py-28 bg-ink text-paper text-center border-t border-paper/10">
          <div className="container-editorial max-w-3xl mx-auto">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-gold font-medium mb-4 inline-block">
              Próximo Capítulo
            </span>
            <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl text-paper">
              Construyamos el próximo proyecto.
            </h2>
            <p className="mt-6 font-serif italic text-lg text-paper/75">
              Si su marca busca elevar su estándar visual y comunicar con autenticidad, nos encantaría conocer los detalles.
            </p>
            <div className="mt-10">
              <Link
                to="/contacto"
                className="px-8 py-4 bg-gold text-ink text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-deep hover:text-paper transition-all inline-flex items-center gap-2"
              >
                <span>Escríbanos hoy</span>
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/80 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-12 animate-fadeIn">
          <div className="relative bg-paper text-ink w-full max-w-4xl border border-ink/20 shadow-2xl my-8 overflow-hidden">
            <div className="sticky top-0 z-20 bg-paper/95 backdrop-blur-md border-b border-ink/10 px-6 sm:px-10 py-4 flex items-center justify-between">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gold-deep font-semibold">
                {selectedProject.discipline}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-ink/70 hover:text-gold-deep p-1 cursor-pointer"
              >
                <span className="text-[0.65rem] uppercase tracking-[0.2em]">Cerrar</span>
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="p-6 sm:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ash mb-3">
                <span>Cliente: {selectedProject.client}</span>
                <span>Año de entrega: {selectedProject.year}</span>
              </div>

              <h2 className="heading-display text-3xl sm:text-5xl text-ink">
                {selectedProject.title}
              </h2>

              <div className="my-8 aspect-[16/10] overflow-hidden border border-ink/10 bg-ink/5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 font-serif text-base sm:text-lg text-ink/80 leading-relaxed">
                <p className="italic text-xl text-ink">
                  "{selectedProject.description}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-ink/10">
                <h4 className="text-[0.7rem] uppercase tracking-[0.25em] font-bold text-ink mb-3">
                  Entregables Desarrollados
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-serif text-ink/80">
                  {selectedProject.deliverables.map((d, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FiCheck className="text-gold-deep" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex items-center justify-between pt-6 border-t border-ink/10">
                <Link
                  to="/contacto"
                  className="px-6 py-3 bg-ink text-paper text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ink transition-colors"
                >
                  Solicitar un proyecto similar
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs uppercase tracking-[0.2em] text-ash hover:text-ink transition-colors"
                >
                  Volver al portafolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
