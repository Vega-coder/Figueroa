import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import Newsletter from "../components/Newsletter";
import { magazineArticles } from "../data/siteData";

export default function RevistaPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between selection:bg-gold/20 selection:text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-ink/10">
          <div className="container-editorial">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium mb-4 block">
              Publicación Monográfica · Edición Periódica
            </span>
            <h1 className="heading-mega text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-ink leading-[0.94] tracking-tight max-w-6xl">
              Al Otro Lado de la Mesa.
            </h1>
            <p className="mt-8 md:mt-12 font-serif italic text-xl sm:text-2xl text-ash max-w-3xl leading-relaxed">
              Una revista editorial sobre el oficio de construir marcas. Observaciones desde el estudio, entrevistas con personas que han fundado cosas, y reportajes visuales en profundidad.
            </p>
          </div>
        </section>

        {/* FEATURED ESSAY */}
        <section className="py-16 md:py-24 border-b border-ink/10">
          <div className="container-editorial">
            <article
              onClick={() => setSelectedArticle(magazineArticles[0])}
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-7 overflow-hidden border border-ink/10 bg-paper">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={magazineArticles[0].image}
                    alt={magazineArticles[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-md px-3 py-1 border border-ink/10 text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-ink">
                    Ensayo Central
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="text-[0.68rem] uppercase tracking-[0.25em] text-ash font-medium mb-3">
                  <span className="text-gold-deep font-semibold">{magazineArticles[0].issue}</span>
                  <span> · </span>
                  <span>{magazineArticles[0].readTime}</span>
                </div>

                <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-ink group-hover:text-gold-deep transition-colors leading-[1.05]">
                  {magazineArticles[0].title}
                </h2>

                <p className="mt-4 font-serif italic text-lg text-ash leading-relaxed">
                  "{magazineArticles[0].excerpt}"
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.25em] text-ink font-semibold group-hover:tracking-[0.35em] group-hover:text-gold-deep transition-all">
                  <span className="underline-anim">Leer artículo</span>
                  <FiArrowUpRight />
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ALL TEXTS / ARTICLES */}
        <section className="py-16 md:py-24">
          <div className="container-editorial">
            <div className="flex items-baseline justify-between mb-12 pb-4 border-b border-ink/10">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium">
                Todos los textos ({magazineArticles.length})
              </span>
              <span className="font-serif italic text-sm text-ash">
                Crónicas de artesanos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {magazineArticles.map((art) => (
                <article
                  key={art.id}
                  onClick={() => setSelectedArticle(art)}
                  className="editorial-card group cursor-pointer p-6 sm:p-8 bg-paper flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-6 bg-ink/10">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] font-mono text-gold-deep">
                      {art.date} · {art.readTime}
                    </span>
                    <h3 className="heading-display text-2xl text-ink mt-2 group-hover:text-gold-deep transition-colors">
                      {art.title}
                    </h3>
                    <p className="mt-3 font-serif italic text-sm text-ash line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.25em] text-ink group-hover:text-gold-deep font-semibold">
                    <span>Leer</span>
                    <FiArrowUpRight />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/80 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-12 animate-fadeIn">
          <div className="relative bg-paper text-ink w-full max-w-4xl border border-ink/20 shadow-2xl my-8 overflow-hidden">
            <div className="sticky top-0 z-20 bg-paper/95 backdrop-blur-md border-b border-ink/10 px-6 sm:px-10 py-4 flex items-center justify-between">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gold-deep font-semibold">
                Revista · {selectedArticle.issue}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-ink/70 hover:text-gold-deep p-1 cursor-pointer"
              >
                <span className="text-[0.65rem] uppercase tracking-[0.2em]">Cerrar</span>
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="p-6 sm:p-12 md:p-16">
              <div className="text-[0.68rem] uppercase tracking-[0.3em] text-gold-deep font-semibold mb-3">
                Edición Monográfica
              </div>

              <h1 className="heading-display text-3xl sm:text-5xl text-ink leading-tight">
                {selectedArticle.title}
              </h1>

              <div className="mt-4 pb-6 border-b border-ink/10 text-xs font-mono text-ash flex items-center gap-4">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="my-8 aspect-[16/9] overflow-hidden border border-ink/10">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="font-serif italic text-xl text-ink/90 border-l-2 border-gold pl-6 my-8 leading-relaxed">
                "{selectedArticle.excerpt}"
              </div>

              <div className="space-y-6 text-base sm:text-lg font-serif text-ink/80 leading-relaxed">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-12 pt-6 border-t border-ink/10 text-right">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 border border-ink text-xs uppercase tracking-[0.25em] font-medium hover:bg-ink hover:text-paper transition-all cursor-pointer"
                >
                  Volver a la revista
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
