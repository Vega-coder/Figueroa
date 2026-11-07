import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import Newsletter from "../components/Newsletter";
import { portfolioProjects, servicesData, processPhases } from "../data/siteData";
import { blogPosts } from "../data/blogData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between selection:bg-gold/20 selection:text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="pt-20 pb-20 md:pt-32 md:pb-28 border-b border-ink/10">
          <div className="container-editorial">
            <div className="flex items-center gap-3 text-[0.68rem] md:text-xs uppercase tracking-[0.3em] text-ash font-medium mb-6">
              <span className="w-8 h-[1px] bg-gold" />
              <span>Estudio Creativo Boutique · CDMX</span>
            </div>

            <h1 className="heading-mega text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] text-ink leading-[0.92] tracking-tight max-w-6xl">
              Creamos lo que hace inolvidable tu marca.
            </h1>

            <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-7">
                <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-ink/80 leading-relaxed">
                  Más de doce años creando proyectos visuales con propósito a través de la fotografía profesional, el diseño gráfico y la dirección de arte. Oficio, técnica y devoción en cada detalle.
                </p>
              </div>

              <div className="md:col-span-5 flex md:justify-end gap-4">
                <Link
                  to="/portafolio"
                  className="px-8 py-4 bg-ink text-paper text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ink transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span>Ver Proyectos</span>
                  <FiArrowUpRight />
                </Link>
                <Link
                  to="/contacto"
                  className="px-8 py-4 border border-ink text-ink text-xs uppercase tracking-[0.25em] font-semibold hover:border-gold hover:text-gold-deep transition-all duration-300"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY STATEMENT */}
        <section className="py-20 md:py-28 bg-ink text-paper border-b border-paper/10">
          <div className="container-editorial text-center max-w-4xl mx-auto">
            <span className="text-[0.68rem] uppercase tracking-[0.35em] text-gold font-medium mb-4 inline-block">
              Manifiesto Fundacional
            </span>
            <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-paper tracking-tight">
              No construimos marcas. Construimos legados.
            </h2>
            <p className="mt-8 font-serif italic text-lg sm:text-xl text-paper/75 leading-relaxed">
              En una era dominada por lo instantáneo y lo efímero, defendemos la paciencia del artesano. Cada trazo tipográfico, cada rayo de luz en el encuadre y cada volumen de empaque nacen de un compromiso intransigente con la belleza que perdura.
            </p>
            <div className="mt-10">
              <Link
                to="/estudio"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-semibold hover:text-paper transition-colors"
              >
                <span>Conocer el estudio</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="py-20 md:py-28 border-b border-ink/10">
          <div className="container-editorial">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-ink/10 gap-6">
              <div>
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium">
                  Disciplinas del Estudio
                </span>
                <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl text-ink mt-3">
                  Cinco oficios, una sola firma.
                </h2>
              </div>
              <Link
                to="/servicios"
                className="text-xs uppercase tracking-[0.25em] font-semibold text-ink hover:text-gold-deep transition-colors inline-flex items-center gap-2"
              >
                <span>Explorar servicios</span>
                <FiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.slice(0, 3).map((srv) => (
                <div
                  key={srv.id}
                  className="editorial-card group p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden mb-6 bg-ink/5">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <span className="font-mono text-gold-deep text-sm font-semibold">{srv.number}</span>
                    <h3 className="heading-display text-3xl text-ink mt-2 group-hover:text-gold-deep transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-3 font-serif italic text-sm text-ash leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-ink/5">
                    <Link
                      to="/servicios"
                      className="text-[0.68rem] uppercase tracking-[0.22em] font-semibold text-ink group-hover:text-gold-deep inline-flex items-center gap-2"
                    >
                      <span>Descubrir oficio</span>
                      <FiArrowUpRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PORTFOLIO SECTION */}
        <section className="py-20 md:py-28 bg-[#faf9f7] border-b border-ink/10">
          <div className="container-editorial">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-ink/10 gap-6">
              <div>
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium">
                  Portafolio Seleccionado
                </span>
                <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl text-ink mt-3">
                  Historias contadas con oficio.
                </h2>
              </div>
              <Link
                to="/portafolio"
                className="text-xs uppercase tracking-[0.25em] font-semibold text-ink hover:text-gold-deep transition-colors inline-flex items-center gap-2"
              >
                <span>Ver todos los proyectos</span>
                <FiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  to="/portafolio"
                  className="editorial-card group block p-6 sm:p-8 bg-paper"
                >
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
                  <div className="text-[0.68rem] uppercase tracking-[0.2em] font-mono text-ash mb-2">
                    {item.client} · {item.year}
                  </div>
                  <h3 className="heading-display text-2xl text-ink group-hover:text-gold-deep transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-serif italic text-sm text-ash line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.25em] text-ink group-hover:text-gold-deep font-semibold">
                    <span>Ver caso</span>
                    <FiArrowUpRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS PREVIEW */}
        <section className="py-20 md:py-28 border-b border-ink/10">
          <div className="container-editorial">
            <div className="max-w-3xl mb-16">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium">
                Metodología
              </span>
              <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl text-ink mt-3">
                Un proceso riguroso. Resultados que trascienden.
              </h2>
              <p className="mt-6 font-serif italic text-lg text-ash">
                Cada proyecto se construye paso a paso, respetando un proceso que hemos perfeccionado durante más de una década.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processPhases.map((p) => (
                <div key={p.phase} className="p-6 border border-ink/10 bg-paper">
                  <span className="font-mono text-2xl text-gold-deep font-light">{p.phase}</span>
                  <h3 className="heading-display text-2xl text-ink mt-3">{p.title}</h3>
                  <div className="text-[0.68rem] uppercase tracking-[0.2em] text-ash font-semibold mt-1 mb-3">
                    {p.subtitle}
                  </div>
                  <p className="font-serif italic text-sm text-ash leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/proceso"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-ink hover:text-gold-deep transition-colors"
              >
                <span>Conocer nuestro proceso paso a paso</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* LATEST ESSAYS FROM DIARY */}
        <section className="py-20 md:py-28 bg-[#faf9f7] border-b border-ink/10">
          <div className="container-editorial">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-ink/10 gap-6">
              <div>
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium">
                  Diario Editorial
                </span>
                <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl text-ink mt-3">
                  Reflexiones desde el taller.
                </h2>
              </div>
              <Link
                to="/blog"
                className="text-xs uppercase tracking-[0.25em] font-semibold text-ink hover:text-gold-deep transition-colors inline-flex items-center gap-2"
              >
                <span>Leer todo el diario</span>
                <FiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  to="/blog"
                  className="editorial-card group p-6 sm:p-8 bg-paper flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden mb-6 bg-ink/10">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <span className="text-[0.68rem] uppercase tracking-[0.2em] font-mono text-gold-deep">
                      {post.category} · {post.readTime}
                    </span>
                    <h3 className="heading-display text-2xl text-ink mt-2 group-hover:text-gold-deep transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 font-serif italic text-sm text-ash line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.25em] text-ink group-hover:text-gold-deep font-semibold">
                    <span>Leer ensayo</span>
                    <FiArrowUpRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
