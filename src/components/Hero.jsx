import React from "react";

export default function Hero() {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-ink/10">
      <div className="container-editorial">
        {/* Subtle eyebrow header */}
        <div className="flex items-center gap-3 text-[0.68rem] md:text-xs uppercase tracking-[0.3em] text-ash font-medium mb-6">
          <span className="w-8 h-[1px] bg-gold" />
          <span>Diario editorial · MMXXIV</span>
        </div>

        {/* Large Display Title */}
        <h1 className="heading-mega text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] text-ink leading-[0.92] tracking-tight max-w-5xl">
          Reflexiones sobre el oficio.
        </h1>

        {/* Lead Manifesto Paragraph */}
        <div className="mt-8 md:mt-12 max-w-2xl">
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-ink/75 leading-relaxed">
            Compartimos filosofía, procesos y la intimidad de los proyectos. Un espacio para pensar el diseño, la fotografía y la construcción de marcas con tiempo y cuidado.
          </p>
        </div>
      </div>
    </section>
  );
}
