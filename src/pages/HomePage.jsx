import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiCheckCircle, FiShield, FiArrowRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { SITE_CONFIG } from "../config/siteConfig";
import { briefPillars, differentialPrinciples, portfolioCases, authorityCredentials } from "../data/briefData";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedCase, setSelectedCase] = useState(null);

  const filterTabs = [
    "Todos",
    "Foto de Producto & Bodegón",
    "Arquitectura & Espacios Comerciales",
    "Diseño Web & Marcas",
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? portfolioCases
      : portfolioCases.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-paper text-carbon flex flex-col justify-between selection:bg-brand/25 selection:text-carbon font-sans">
      <Navbar />

      <main>
        {/* SECCIÓN 1 · HERO SECTION (Airy, Generous Padding) */}
        <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 border-b border-muted-border/80 overflow-hidden bg-gradient-to-b from-pearl/40 to-paper">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
              
              {/* Left Column: Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full badge-brand text-[0.68rem] uppercase tracking-[0.22em] font-bold mb-8">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  <span>Fotografía · Estrategia Digital · IA</span>
                </div>

                <h1 className="heading-mega text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-carbon leading-[1.08] tracking-tight">
                  La potencia de la inteligencia artificial con el <span className="text-brand underline decoration-brand/40 underline-offset-8">criterio y la sensibilidad</span> del ojo humano.
                </h1>

                <p className="mt-8 text-base sm:text-lg md:text-xl text-muted font-normal leading-relaxed max-w-2xl">
                  No usamos la IA para reemplazar la creatividad, sino para multiplicar tus resultados. Unimos más de una década de experiencia detrás del lente con herramientas digitales y automatización para que tu negocio tenga imágenes que enamoran, una web que vende y procesos que te ahorran tiempo.
                </p>

                {/* Primary Action Buttons */}
                <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={SITE_CONFIG.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-carbon px-8 py-4 rounded-lg text-xs uppercase tracking-[0.2em] font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Cotizá tu proyecto por WhatsApp</span>
                  </a>

                  <Link
                    to="/portafolio"
                    className="inline-flex items-center justify-center gap-2 border border-carbon/25 hover:border-brand text-carbon hover:text-brand px-6 py-4 rounded-lg text-xs uppercase tracking-[0.18em] font-bold transition-colors"
                  >
                    <span>Ver Casos de Éxito</span>
                    <FiArrowUpRight className="text-sm" />
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 pt-8 border-t border-muted-border/60 flex flex-wrap items-center gap-8 text-xs text-muted">
                  <div className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-brand text-lg" />
                    <span className="font-semibold text-carbon">Ocaña, N. de Santander</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FiShield className="text-brand text-lg" />
                    <span className="font-semibold text-carbon">+10 años de experiencia comprobada</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Artwork */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-carbon/10 bg-carbon">
                  <img
                    src="./images/brief/perfume-afnan.jpg"
                    alt="Fotografía Comercial de Alto Nivel — Perfume Afnan 9 PM"
                    className="w-full h-full object-cover contrast-[105%]"
                  />
                  {/* Overlay Tag */}
                  <div className="absolute bottom-6 left-6 right-6 bg-carbon/90 backdrop-blur-md p-5 rounded-2xl border border-paper/10 text-paper">
                    <div className="text-[0.65rem] uppercase tracking-widest text-brand font-bold mb-1">
                      Fotografía de Producto & Bodegón
                    </div>
                    <div className="font-display text-lg font-semibold">
                      Perfume Afnan 9 PM · Edición Nocturna
                    </div>
                    <div className="text-xs text-paper/70 font-serif italic mt-1">
                      Iluminación en estudio para elevar la percepción de valor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2 · LOS 3 PILARES DEL ECOSISTEMA (Roomy 3-Column Layout) */}
        <section className="py-24 md:py-36 bg-pearl border-b border-muted-border/80">
          <div className="container-editorial">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold block mb-3">
                Ecosistema Integral
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-carbon leading-tight">
                Tres pilares estratégicos para multiplicar tus ventas.
              </h2>
              <p className="mt-5 font-serif italic text-base sm:text-lg text-muted leading-relaxed">
                No vendemos servicios sueltos ni fotos aisladas; creamos una infraestructura completa donde tu imagen atrae, tu web convierte y tus procesos no te quitan la vida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {briefPillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="editorial-card rounded-2xl p-8 sm:p-10 bg-paper flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-8 bg-carbon/5">
                      <img
                        src={pillar.image}
                        alt={pillar.tag}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-base font-bold text-brand">{pillar.number}.</span>
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-muted">
                        Pilar Estratégico
                      </span>
                    </div>

                    <h3 className="heading-display text-2xl sm:text-3xl text-carbon leading-snug">
                      {pillar.tag}
                    </h3>

                    <h4 className="mt-3.5 font-display text-base font-semibold text-brand leading-snug">
                      {pillar.headline}
                    </h4>

                    <p className="mt-4 text-sm text-muted leading-relaxed font-normal">
                      {pillar.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-muted-border/60">
                      <div className="text-[0.68rem] uppercase tracking-wider font-bold text-carbon mb-3">
                        Qué incluye este pilar:
                      </div>
                      <ul className="space-y-2.5 text-xs text-muted">
                        {pillar.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-brand font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-muted-border/60">
                    <Link
                      to={pillar.route}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-carbon hover:text-brand transition-colors"
                    >
                      <span>Conocer detalles del pilar</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 3 · EL FACTOR DIFERENCIAL (Clean Dark Contrast Block) */}
        <section className="py-24 md:py-36 bg-carbon text-paper border-b border-carbon">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
              
              {/* Photo of Gemberth in action */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-paper/15 shadow-2xl relative">
                  <img
                    src="./images/brief/gemberth-camara.jpg"
                    alt="Gemberth Figueroa — Dirección y Fotografía en Acción"
                    className="w-full h-full object-cover grayscale-[15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="font-display text-lg font-bold text-paper">
                      Gemberth Figueroa
                    </div>
                    <div className="text-xs text-brand font-semibold uppercase tracking-wider mt-0.5">
                      Dirección Creativa, Cámara & Estrategia
                    </div>
                    <p className="text-xs text-paper/70 font-serif italic mt-2.5 leading-relaxed">
                      "La tecnología sin empatía es solo ruido frío. Nuestro trabajo es hacer que tu marca conecte de verdad."
                    </p>
                  </div>
                </div>
              </div>

              {/* Differential Principles */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
                <div>
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold block mb-3">
                    El Factor Diferencial
                  </span>
                  <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-paper leading-tight">
                    Por qué la tecnología sin empatía no vende.
                  </h2>
                  <p className="mt-5 font-serif italic text-base sm:text-lg text-paper/75 leading-relaxed">
                    Cualquiera puede apretar un botón en una IA o disparar fotos con un teléfono. Lo que convierte y hace que la gente pague lo que vales es el criterio, la sensibilidad y el acompañamiento humano.
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  {differentialPrinciples.map((item) => (
                    <div key={item.number} className="flex items-start gap-4 p-6 rounded-2xl bg-paper/5 border border-paper/10">
                      <span className="font-mono text-base font-bold text-brand bg-brand/10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-paper mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-paper/75 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={SITE_CONFIG.getWhatsAppUrl("Hola Gemberth, me llamó la atención tu enfoque de tecnología con criterio humano y quiero asesoría para mi negocio.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand hover:bg-brand-hover text-carbon px-8 py-4 rounded-lg text-xs uppercase tracking-[0.2em] font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Hablar de tu negocio con Gemberth</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4 · PORTAFOLIO Y CASOS DE ÉXITO */}
        <section className="py-24 md:py-36 border-b border-muted-border/80">
          <div className="container-editorial">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold block mb-3">
                  Casos de Estudio Reales
                </span>
                <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-carbon">
                  Resultados tangibles, no promesas al aire.
                </h2>
              </div>

              {/* Filter Tabs with Clear Padding */}
              <div className="flex flex-wrap items-center gap-2.5">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                      activeFilter === tab
                        ? "bg-brand text-carbon font-bold shadow-sm"
                        : "bg-pearl hover:bg-muted-border/60 text-muted"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredProjects.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedCase(item)}
                  className="editorial-card group cursor-pointer rounded-2xl overflow-hidden p-6 sm:p-7 bg-paper flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-carbon/5 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-carbon/85 text-paper px-3 py-1 rounded-md text-[0.62rem] uppercase tracking-wider font-semibold">
                        {item.category}
                      </div>
                    </div>

                    <div className="text-[0.65rem] uppercase tracking-wider font-mono text-muted mb-1.5">
                      {item.client}
                    </div>

                    <h3 className="heading-display text-xl sm:text-2xl text-carbon group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>

                    {/* Problem vs Impact Callout */}
                    <div className="mt-5 p-4 rounded-xl bg-pearl border border-muted-border/60 space-y-2.5 text-xs">
                      <div>
                        <span className="font-bold text-carbon uppercase text-[0.62rem] tracking-wider block">
                          El reto:
                        </span>
                        <p className="text-muted font-normal mt-0.5">{item.problem}</p>
                      </div>
                      <div className="pt-2.5 border-t border-muted-border/40">
                        <span className="font-bold text-brand uppercase text-[0.62rem] tracking-wider block">
                          El impacto comercial:
                        </span>
                        <p className="text-carbon font-medium mt-0.5">{item.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 pt-4 border-t border-muted-border/60 flex items-center justify-between text-xs font-bold text-carbon group-hover:text-brand uppercase tracking-wider">
                    <span>Ver caso detallado</span>
                    <FiArrowUpRight className="text-base" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 5 · AUTORIDAD Y TRAYECTORIA */}
        <section className="py-24 md:py-36 bg-pearl border-b border-muted-border/80">
          <div className="container-editorial">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold block mb-3">
                Trayectoria Demostrada
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-carbon">
                Más de 10 años construyendo identidad visual y confianza.
              </h2>
              <p className="mt-5 font-serif italic text-base sm:text-lg text-muted">
                Respaldado por formación presencial a emprendedores, presencia en los eventos comerciales más importantes de Colombia y soluciones probadas en campo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {authorityCredentials.map((item, idx) => (
                <div key={idx} className="editorial-card rounded-2xl overflow-hidden bg-paper p-8 flex flex-col justify-between">
                  <div>
                    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-carbon/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs uppercase tracking-wider font-bold text-brand block mb-1.5">
                      {item.subtitle}
                    </span>
                    <h3 className="heading-display text-2xl text-carbon mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-muted-border/60 flex items-center gap-2 text-xs font-semibold text-carbon">
                    <FiCheckCircle className="text-brand text-base" />
                    <span>Experiencia acreditada en campo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-carbon/80 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-paper text-carbon w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-carbon/20 my-8">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand hover:bg-brand-hover text-carbon px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Cotizar solución similar</span>
                </a>

                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-xs uppercase tracking-wider font-semibold text-muted hover:text-carbon cursor-pointer"
                >
                  Cerrar caso
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      <Footer />
    </div>
  );
}
