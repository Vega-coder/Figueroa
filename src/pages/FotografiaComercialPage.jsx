import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { SITE_CONFIG } from "../config/siteConfig";

export default function FotografiaComercialPage() {
  const services = [
    {
      title: "Bodegón de Producto & Alta Gama",
      desc: "Iluminación controlada en estudio para perfumes, cosmética, joyería y productos manufacturados. Destacamos el brillo real, la textura del material y el empaque para que tu cliente sienta la calidad antes de comprar.",
      image: "./images/brief/perfume-afnan.jpg"
    },
    {
      title: "Arquitectura & Espacios Comerciales",
      desc: "Fotografía de locales comerciales, hoteles, restaurantes y patrimonio de Ocaña. Capturamos la atmósfera, la distribución y la iluminación interior con equilibrio visual y corrección de perspectiva.",
      image: "./images/brief/ocana-patrimonio.jpg"
    },
    {
      title: "Retrato Corporativo & Marca Personal",
      desc: "Dirección de poses y expresiones para fundadores, médicos, abogados y comerciantes. Generamos autoridad y cercanía sin poses rígidas ni acartonadas.",
      image: "./images/brief/gemberth-camara.jpg"
    },
    {
      title: "Gastronomía & Menús de Alta Conversión",
      desc: "Fotografía culinaria con estilismo de producto que despierta el apetito al instante. Especialmente optimizada para menús digitales y publicaciones en redes.",
      image: "./images/brief/bodegon-luxury.jpg"
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
              Pilar 01 · Fotografía Comercial & Producto
            </span>
            <h1 className="heading-mega text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-carbon leading-[1.02] max-w-5xl">
              Imágenes que elevan tu precio y generan deseo.
            </h1>
            <p className="mt-6 font-serif italic text-lg sm:text-2xl text-muted max-w-3xl leading-relaxed">
              Sesiones de producto en estudio, locaciones comerciales, retratos de marca y dirección de arte pensada para que tu catálogo deje de competir por precio y se perciba de alto valor.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_CONFIG.getWhatsAppUrl("Hola Gemberth, quiero cotizar una sesión de fotografía comercial para mis productos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-carbon px-8 py-4 rounded text-xs uppercase tracking-[0.2em] font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                <span>Cotizar sesión fotográfica</span>
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 md:py-28 border-b border-muted-border">
          <div className="container-editorial">
            <div className="max-w-2xl mb-16">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brand font-bold block mb-2">
                Especialidades en Cámara
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-carbon">
                Todo producto tiene un ángulo que justifica su valor.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((item, idx) => (
                <div key={idx} className="editorial-card rounded-2xl overflow-hidden bg-paper p-8 flex flex-col justify-between">
                  <div>
                    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-carbon/5">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="heading-display text-2xl sm:text-3xl text-carbon mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-muted-border/60">
                    <a
                      href={SITE_CONFIG.getWhatsAppUrl(`Hola Gemberth, me interesa el servicio de ${item.title}. ¿Qué disponibilidad tienes?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand hover:underline"
                    >
                      <span>Consultar disponibilidad</span>
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION: DEJA DE VENDER BARATO */}
        <section className="py-20 md:py-28 bg-carbon text-paper">
          <div className="container-editorial max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-brand font-bold block mb-4">
              Filosofía de Taller
            </span>
            <h2 className="heading-display text-3xl sm:text-5xl text-paper leading-tight">
              "Si tu foto parece tomada a las carreras, el cliente asumirá que tu producto es barato."
            </h2>
            <p className="mt-6 font-serif italic text-base sm:text-lg text-paper/75 leading-relaxed">
              La fotografía profesional no es un gasto estético; es la barrera que te separa de la guerra de descuentos. Cuando tu imagen comunica rigor, los clientes dejan de regatear y pagan con gusto.
            </p>
            <div className="mt-8">
              <a
                href={SITE_CONFIG.getWhatsAppUrl("Hola Gemberth, quiero dejar de vender barato y elevar la percepción de mi catálogo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-carbon px-8 py-3.5 rounded text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer"
              >
                <FaWhatsapp className="text-lg" />
                <span>Hablar de tu catálogo</span>
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
