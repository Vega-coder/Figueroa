import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { processPhases } from "../data/siteData";

export default function ProcesoPage() {
  const uncompromised = [
    { title: "La honestidad visual", desc: "No usamos plantillas prefabricadas ni recursos sintéticos genéricos. Todo lo que producimos nace de la identidad genuina del cliente." },
    { title: "El tiempo necesario", desc: "Preferimos decir que no a un proyecto antes que entregarlo a medias por exigencias de calendarios imposibles." },
    { title: "El diálogo directo", desc: "Usted habla siempre directamente con quienes crean y diseñan su proyecto, sin intermediarios comerciales ni burocracia." },
    { title: "La excelencia técnica", desc: "Cuidamos el micraje del papel, la temperatura de color de la luz y el espaciado tipográfico hasta el último milímetro." }
  ];

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between selection:bg-gold/20 selection:text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-ink/10">
          <div className="container-editorial">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium mb-4 block">
              Metodología de Trabajo · Paso a Paso
            </span>
            <h1 className="heading-mega text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-ink leading-[0.94] tracking-tight max-w-6xl">
              Cuatro fases para construir algo eterno.
            </h1>
            <p className="mt-8 md:mt-12 font-serif italic text-xl sm:text-2xl text-ash max-w-3xl leading-relaxed">
              Trabajamos con método, no con prisa. Cada proyecto se construye paso a paso, respetando un proceso que hemos perfeccionado durante más de una década.
            </p>
          </div>
        </section>

        {/* 4 PHASES DETAILED */}
        <section className="py-16 md:py-24">
          <div className="container-editorial space-y-16">
            {processPhases.map((phase) => (
              <div
                key={phase.phase}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 border border-ink/10 bg-paper"
              >
                <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-ink/10 pb-6 lg:pb-0 lg:pr-8">
                  <span className="font-mono text-5xl sm:text-6xl text-gold-deep font-light">
                    {phase.phase}
                  </span>
                  <h2 className="heading-display text-3xl sm:text-4xl text-ink mt-4">
                    {phase.title}
                  </h2>
                  <div className="text-[0.68rem] uppercase tracking-[0.25em] text-ash font-semibold mt-2">
                    {phase.subtitle}
                  </div>
                </div>

                <div className="lg:col-span-9 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-deep mb-3">
                      Qué hacemos en esta fase
                    </h3>
                    <p className="font-serif italic text-lg sm:text-xl text-ink/80 leading-relaxed max-w-3xl">
                      "{phase.description}"
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-ink/10">
                    <span className="text-[0.68rem] uppercase tracking-[0.25em] font-bold text-ink block mb-3">
                      Entregables de la etapa
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm font-serif text-ash">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FiCheck className="text-gold-deep mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE NEVER COMPROMISE */}
        <section className="py-20 md:py-28 bg-[#faf9f7] border-y border-ink/10">
          <div className="container-editorial">
            <div className="max-w-2xl mb-16">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium">
                Declaración de Principios
              </span>
              <h2 className="heading-display text-4xl sm:text-5xl text-ink mt-3">
                Lo que nunca comprometemos.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {uncompromised.map((item, idx) => (
                <div key={idx} className="p-8 bg-paper border border-ink/10">
                  <h3 className="heading-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 font-serif italic text-base text-ash leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-ink text-paper text-center">
          <div className="container-editorial max-w-3xl mx-auto">
            <h2 className="heading-display text-4xl sm:text-5xl text-paper">
              ¿Listo para dar el primer paso?
            </h2>
            <p className="mt-4 font-serif italic text-lg text-paper/75">
              El proceso comienza con una conversación honesta.
            </p>
            <div className="mt-8">
              <Link
                to="/contacto"
                className="px-8 py-4 bg-gold text-ink text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-deep hover:text-paper transition-all inline-flex items-center gap-2"
              >
                <span>Agendar reunión de descubrimiento</span>
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
