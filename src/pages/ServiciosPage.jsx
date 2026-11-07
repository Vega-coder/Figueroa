import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { servicesData } from "../data/siteData";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between selection:bg-gold/20 selection:text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-ink/10">
          <div className="container-editorial">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium mb-4 block">
              Servicios & Especialidades
            </span>
            <h1 className="heading-mega text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-ink leading-[0.94] tracking-tight max-w-6xl">
              Cinco oficios, una firma.
            </h1>
            <p className="mt-8 md:mt-12 font-serif italic text-xl sm:text-2xl text-ash max-w-3xl leading-relaxed">
              Cada servicio se construye a la medida. No ofrecemos paquetes genéricos: cada marca es un traje que diseñamos desde el primer hilo. Hecho con tiempo, no con prisa.
            </p>
          </div>
        </section>

        {/* SERVICES DEEP DIVE */}
        <section className="py-16 md:py-24">
          <div className="container-editorial space-y-24">
            {servicesData.map((srv, idx) => (
              <div
                key={srv.id}
                id={srv.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="aspect-[4/3] bg-ink/5 overflow-hidden border border-ink/10 relative group">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-md px-3 py-1 font-mono text-xs text-gold-deep font-semibold">
                      {srv.number}
                    </div>
                  </div>
                </div>

                {/* Text & Deliverables */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-gold-deep font-semibold">
                    {srv.subtitle}
                  </span>
                  <h2 className="heading-display text-4xl sm:text-5xl text-ink mt-2">
                    {srv.title}
                  </h2>
                  <p className="mt-6 font-serif italic text-lg text-ash leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-ink/10">
                    <h3 className="text-[0.7rem] uppercase tracking-[0.25em] font-bold text-ink mb-4">
                      Alcances & Disciplinas
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-serif text-ink/85">
                      {srv.disciplines.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <FiCheck className="text-gold-deep flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-ink hover:text-gold-deep transition-colors"
                    >
                      <span>Cotizar este oficio</span>
                      <FiArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-ink/10 text-center">
          <div className="container-editorial max-w-3xl mx-auto">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium mb-4 inline-block">
              Propuesta Personalizada
            </span>
            <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl text-ink">
              Cada proyecto es único.
            </h2>
            <p className="mt-6 font-serif italic text-lg text-ash">
              Conversemos sobre el alcance de su marca para estructurar una propuesta técnica y económica que responda fielmente a sus objetivos.
            </p>
            <div className="mt-10">
              <Link
                to="/contacto"
                className="px-8 py-4 bg-ink text-paper text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ink transition-all inline-flex items-center gap-2"
              >
                <span>Solicitar propuesta</span>
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
