import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCpu, FiHeart, FiMessageSquare, FiUsers, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { SITE_CONFIG } from "../config/siteConfig";

export default function IaFactorHumanoPage() {
  const implementations = [
    {
      icon: <FiMessageSquare className="text-2xl text-brand" />,
      title: "Flujos de WhatsApp con Tono Humano",
      desc: "Adiós a los bots que repiten 'Elija una opción del 1 al 5'. Diseñamos guías de conversación que saludan con calidez, recopilan la información clave y transfieren al cliente listo para cerrar la venta contigo."
    },
    {
      icon: <FiCpu className="text-2xl text-brand" />,
      title: "Generación & Curaduría de Contenido con IA",
      desc: "Usamos modelos de lenguaje y herramientas generativas para estructurar copies, ideas de reels y redacción persuasiva, pero con filtro y calibración artística humana antes de publicar."
    },
    {
      icon: <FiUsers className="text-2xl text-brand" />,
      title: "Automatización de Prospectos",
      desc: "Sistemas silenciosos que capturan nombre, producto de interés y presupuesto de cada persona que escribe, organizando tu base de datos para que nunca se te escape un cliente."
    }
  ];

  return (
    <div className="min-h-screen bg-paper text-carbon flex flex-col justify-between selection:bg-brand/25 font-sans">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-muted-border bg-pearl">
          <div className="container-editorial">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold block mb-4">
              Pilar 03 · IA & Automatización con Sentido Humano
            </span>
            <h1 className="heading-mega text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-carbon leading-[1.02] max-w-5xl">
              Tecnología que agiliza tu negocio sin volverlo un robot frío.
            </h1>
            <p className="mt-6 font-serif italic text-lg sm:text-2xl text-muted max-w-3xl leading-relaxed">
              Integración de flujos inteligentes de atención y respuestas en WhatsApp, sistemas de captura de prospectos y generación ágil de contenido, siempre supervisados y calibrados con empatía y cercanía real.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_CONFIG.getWhatsAppUrl("Hola Gemberth, quiero implementar automatización inteligente con WhatsApp y herramientas de IA para mi negocio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-carbon px-8 py-4 rounded text-xs uppercase tracking-[0.2em] font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                <span>Automatizar con calidez</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3 IMPLEMENTATIONS */}
        <section className="py-20 md:py-28 border-b border-muted-border">
          <div className="container-editorial">
            <div className="max-w-2xl mb-16">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold block mb-2">
                Soluciones Prácticas
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-carbon">
                Menos tareas repetitivas, más tiempo para atender bien.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {implementations.map((item, idx) => (
                <div key={idx} className="editorial-card rounded-2xl bg-paper p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand/15 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="heading-display text-2xl text-carbon mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-muted-border/60 text-xs font-semibold text-brand flex items-center gap-1.5">
                    <FiCheck />
                    <span>Configuración personalizada</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE HUMAN TOUCH MANIFESTO */}
        <section className="py-20 md:py-28 bg-carbon text-paper">
          <div className="container-editorial max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-brand font-bold block mb-3">
                Criterio & Sensibilidad
              </span>
              <h2 className="heading-display text-3xl sm:text-5xl text-paper">
                La IA procesa; las personas conectan.
              </h2>
            </div>

            <div className="space-y-6 font-serif italic text-base sm:text-lg text-paper/80 leading-relaxed text-center">
              <p>
                "En un mercado saturado de respuestas automatizadas torpes y contenido genérico sin alma, la mayor ventaja competitiva que puede tener tu negocio en Ocaña y en Colombia es el <span className="text-brand font-bold not-italic font-sans">factor humano</span>."
              </p>
              <p>
                No dejamos que una máquina hable por ti sin supervisión. Diseñamos la infraestructura técnica para liberarte de tareas mecánicas, de modo que cuando tú o tu equipo atiendan al cliente, lo hagan con toda la energía, la empatía y la calidez que cierran los grandes negocios.
              </p>
            </div>

            <div className="mt-12 text-center">
              <a
                href={SITE_CONFIG.getWhatsAppUrl("Hola Gemberth, quiero hablar sobre cómo integrar IA en mi empresa con tu criterio humano.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand hover:bg-brand-hover text-carbon px-8 py-3.5 rounded text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer"
              >
                <FaWhatsapp className="text-lg" />
                <span>Agendar sesión de estrategia</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
