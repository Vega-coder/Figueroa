import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiSmartphone, FiZap, FiShoppingBag, FiArrowUpRight, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { SITE_CONFIG } from "../config/siteConfig";

export default function EstrategiaWebPage() {
  const features = [
    {
      icon: <FiSmartphone className="text-2xl text-brand" />,
      title: "Diseño Mobile-First Real",
      desc: "Más del 85% de tus prospectos abrirán tu enlace desde la biografía de Instagram o estados de WhatsApp. Tu sitio está diseñado con ergonomía táctil para que navegar con una sola mano sea un placer."
    },
    {
      icon: <FiZap className="text-2xl text-brand" />,
      title: "Velocidad de Carga Instantánea (menor a 1s)",
      desc: "Construimos con código moderno en React y Vite. Nada de plantillas lentas ni plugins que se caen. Cada segundo que ahorras es un cliente que no se va a la competencia."
    },
    {
      icon: <FiShoppingBag className="text-2xl text-brand" />,
      title: "Menús & Catálogos sin Fricción",
      desc: "Tus clientes ven fotos limpias, precios claros y eligen lo que quieren. Con un solo clic, su pedido se transfiere con el detalle exacto a tu WhatsApp de ventas."
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
              Pilar 02 · Estrategia & Desarrollo Web
            </span>
            <h1 className="heading-mega text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-carbon leading-[1.02] max-w-5xl">
              El escaparate digital donde tus clientes compran sin fricción.
            </h1>
            <p className="mt-6 font-serif italic text-lg sm:text-2xl text-muted max-w-3xl leading-relaxed">
              Sitios web ultrarrápidos, menús interactivos y páginas de aterrizaje optimizadas para teléfonos móviles. Diseñadas para convertir visitantes en clientes reales, no solo en visitas vacías.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_CONFIG.getWhatsAppUrl("Hola Gemberth, quiero cotizar un sitio web moderno y rápido para mi negocio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-carbon px-8 py-4 rounded text-xs uppercase tracking-[0.2em] font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                <span>Cotizar mi sitio web</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3 ADVANTAGES */}
        <section className="py-20 md:py-28 border-b border-muted-border">
          <div className="container-editorial">
            <div className="max-w-2xl mb-16">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold block mb-2">
                Ingeniería Digital
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-carbon">
                Tu web no es un folleto digital; es tu mejor vendedor 24/7.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((item, idx) => (
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
                    <span>Estándar garantizado</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON BLOCK */}
        <section className="py-20 md:py-28 bg-carbon text-paper">
          <div className="container-editorial max-w-4xl mx-auto">
            <h2 className="heading-display text-3xl sm:text-5xl text-paper text-center mb-12">
              La diferencia entre una web tradicional y una web orientada a ventas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-paper/5 border border-paper/10 space-y-4">
                <span className="text-xs uppercase tracking-wider text-ash font-bold block">
                  Webs lentas tradicionales
                </span>
                <ul className="space-y-3 text-sm text-paper/70 font-normal">
                  <li className="flex items-start gap-2">❌ Tardan 5 a 8 segundos en abrir desde Instagram.</li>
                  <li className="flex items-start gap-2">❌ El cliente se pierde en textos interminables.</li>
                  <li className="flex items-start gap-2">❌ Formularios eternos que nadie contesta.</li>
                  <li className="flex items-start gap-2">❌ Fotos pesadas y borrosas en celulares.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-brand/10 border border-brand/40 space-y-4">
                <span className="text-xs uppercase tracking-wider text-brand font-bold block">
                  Nuestra arquitectura moderna
                </span>
                <ul className="space-y-3 text-sm text-paper font-medium">
                  <li className="flex items-start gap-2">✓ Carga instantánea (menor a 1 segundo) con React.</li>
                  <li className="flex items-start gap-2">✓ Botón directo a WhatsApp con mensaje precargado.</li>
                  <li className="flex items-start gap-2">✓ Fotos comerciales en WebP nítidas y ultraligeras.</li>
                  <li className="flex items-start gap-2">✓ 100% pensada para el mercado de Ocaña y Colombia.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href={SITE_CONFIG.getWhatsAppUrl("Hola Gemberth, quiero renovar mi web con tu arquitectura rápida orientada a ventas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand hover:bg-brand-hover text-carbon px-8 py-3.5 rounded text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer"
              >
                <FaWhatsapp className="text-lg" />
                <span>Solicitar diagnóstico gratuito de mi web</span>
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
