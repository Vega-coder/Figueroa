import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import Newsletter from "../components/Newsletter";

export default function EstudioPage() {
  const commitments = [
    {
      title: "Excelencia artesanal",
      desc: "Rechazamos la producción en masa y los atajos automáticos. Cada imagen y cada identidad se trabaja con la precisión de un taller de alta costura."
    },
    {
      title: "Tradición e innovación",
      desc: "Honramos las reglas clásicas de la composición y la tipografía renacentista, aplicando herramientas contemporáneas para resultados que trascienden el tiempo."
    },
    {
      title: "Compromiso profundo",
      desc: "Aceptamos un número limitado de proyectos al año para dedicar a cada uno el tiempo, la energía y la intimidad que exige una obra memorable."
    },
    {
      title: "Estética con propósito",
      desc: "La belleza sin estrategia es un adorno fugaz. Diseñamos con intención comercial y claridad de mensaje para impulsar el valor real de su firma."
    }
  ];

  const milestones = [
    { year: "2012", title: "Fundación del taller", desc: "Inicio de operaciones en Ciudad de México como estudio boutique enfocado en fotografía de producto y branding artesanal." },
    { year: "2016", title: "Expansión editorial", desc: "Consolidación de proyectos editoriales, libros de arte monográficos y dirección visual para casas de moda y hotelería." },
    { year: "2020", title: "Proyección internacional", desc: "Colaboraciones con marcas en Suiza, Estados Unidos y Latinoamérica, manteniendo siempre la cercanía y escala boutique." },
    { year: "2024", title: "12 años de trayectoria", desc: "Lanzamiento del Diario Editorial y la Revista Monográfica 'Al Otro Lado de la Mesa' como manifiestos del oficio." }
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
              El Estudio · Trayectoria 2012 — 2026
            </span>
            <h1 className="heading-mega text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-ink leading-[0.94] tracking-tight max-w-6xl">
              Más de doce años construyendo marcas con propósito.
            </h1>
            <p className="mt-8 md:mt-12 font-serif italic text-xl sm:text-2xl text-ash max-w-3xl leading-relaxed">
              Somos un estudio de fotografía y diseño. Trabajamos con cercanía, con tiempo y con oficio. Cada proyecto que desarrollamos es una historia que merece ser contada con rigor y belleza.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY & FOUNDER */}
        <section className="py-20 md:py-28 border-b border-ink/10">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] bg-ink/10 overflow-hidden border border-ink/10">
                  <img
                    src="/images/studio/gemberth-portrait.jpg"
                    alt="Gemberth Figueroa — Fundador y Director Creativo"
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="font-display text-lg text-ink font-semibold">Gemberth Figueroa</span>
                  <p className="text-xs font-serif italic text-ash">Fundador & Director Creativo</p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-gold-deep font-semibold">
                  Nuestra Filosofía
                </span>
                <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
                  "El diseño es el silencio donde la marca empieza a hablar."
                </h2>
                <div className="space-y-4 font-serif text-base sm:text-lg text-ink/80 leading-relaxed">
                  <p>
                    Fundamos este taller bajo una premisa innegociable: no queríamos ser una agencia de volumen ni una fábrica de contenidos descartables. Queríamos ser un refugio creativo donde cada cliente pudiera sentarse con nosotros a pensar su marca con la calma que merece.
                  </p>
                  <p>
                    A lo largo de más de una década hemos visto cómo las tendencias digitales pasan y mueren en cuestión de meses, mientras que las obras construidas con honestidad formal, tipografía cuidada y fotografía auténtica continúan emocionando a quienes las descubren.
                  </p>
                  <p>
                    Nuestra dedicación no es hacia la pantalla; es hacia la persona que interactúa con la marca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR COMMITMENTS */}
        <section className="py-20 md:py-28 bg-[#faf9f7] border-b border-ink/10">
          <div className="container-editorial">
            <div className="max-w-2xl mb-16">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium">
                Pilares Inmutables
              </span>
              <h2 className="heading-display text-4xl sm:text-5xl text-ink mt-3">
                Cuatro compromisos.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {commitments.map((c, idx) => (
                <div key={idx} className="p-8 bg-paper border border-ink/10 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-gold-deep text-sm font-semibold">0{idx + 1}.</span>
                    <h3 className="heading-display text-2xl sm:text-3xl text-ink mt-3">{c.title}</h3>
                    <p className="mt-4 font-serif italic text-base text-ash leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-ink/5 flex items-center gap-2 text-xs text-gold-deep">
                    <FiCheck />
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider">Compromiso cumplido</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-20 md:py-28 border-b border-ink/10">
          <div className="container-editorial">
            <div className="max-w-2xl mb-16">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium">
                Cronología
              </span>
              <h2 className="heading-display text-4xl sm:text-5xl text-ink mt-3">
                Algunos momentos.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {milestones.map((m) => (
                <div key={m.year} className="border-t-2 border-gold pt-6">
                  <span className="font-display text-3xl text-ink font-light">{m.year}</span>
                  <h3 className="heading-display text-xl text-ink mt-2">{m.title}</h3>
                  <p className="mt-3 font-serif italic text-sm text-ash leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 md:py-28 bg-ink text-paper text-center">
          <div className="container-editorial max-w-3xl mx-auto">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-gold font-medium mb-4 inline-block">
              Colaboración
            </span>
            <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl text-paper">
              ¿Construimos algo juntos?
            </h2>
            <p className="mt-6 font-serif italic text-lg text-paper/75">
              Aceptamos proyectos seleccionados donde podamos aportar visión estratégica y artesanía visual integral.
            </p>
            <div className="mt-10">
              <Link
                to="/contacto"
                className="px-8 py-4 bg-gold text-ink text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-deep hover:text-paper transition-all inline-flex items-center gap-2"
              >
                <span>Iniciar conversación</span>
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
