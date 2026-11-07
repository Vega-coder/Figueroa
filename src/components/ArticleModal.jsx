import React, { useEffect } from "react";
import { FiX, FiClock, FiCalendar, FiShare2 } from "react-icons/fi";

export default function ArticleModal({ article, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/70 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-12 animate-fadeIn">
      <div className="relative bg-paper text-ink w-full max-w-4xl border border-ink/20 shadow-2xl my-8 overflow-hidden">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-paper/95 backdrop-blur-md border-b border-ink/10 px-6 sm:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-ash font-medium">
            <span className="text-gold-deep font-semibold">{article.category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 text-ink/70 hover:text-gold-deep transition-colors p-1"
            aria-label="Cerrar artículo"
          >
            <span className="text-[0.65rem] uppercase tracking-[0.2em] hidden sm:inline">Cerrar</span>
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-12 md:p-16">
          {/* Eyebrow */}
          <div className="text-[0.68rem] uppercase tracking-[0.3em] text-gold-deep font-semibold mb-4">
            Diario Editorial · GF Studio
          </div>

          {/* Heading */}
          <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-tight">
            {article.title}
          </h1>

          {/* Metadata line */}
          <div className="mt-6 pb-6 border-b border-ink/10 flex flex-wrap items-center justify-between gap-4 text-xs text-ash font-mono">
            <div className="flex items-center gap-4">
              <span>{article.date}</span>
              <span>•</span>
              <span>Por {article.author}</span>
            </div>
            <div className="text-[0.68rem] uppercase tracking-wider text-ash font-sans">
              CDMX · Taller de Diseño
            </div>
          </div>

          {/* Image */}
          <div className="my-8 aspect-[16/9] w-full overflow-hidden border border-ink/10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt Lead */}
          <div className="font-serif italic text-xl sm:text-2xl text-ink/90 border-l-2 border-gold pl-6 my-8 leading-relaxed">
            "{article.excerpt}"
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg font-serif text-ink/80 leading-relaxed">
            {article.content ? (
              article.content.map((p, idx) => <p key={idx}>{p}</p>)
            ) : (
              <p>{article.excerpt}</p>
            )}
          </div>

          {/* Editorial Sign-off */}
          <div className="mt-16 pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center font-display text-lg text-gold-deep font-bold">
                GF
              </div>
              <div>
                <div className="font-display font-medium text-sm text-ink">Gemberth Figueroa</div>
                <div className="text-xs text-ash font-serif italic">Director Creativo & Fotógrafo</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-ink text-xs uppercase tracking-[0.25em] font-medium hover:bg-ink hover:text-paper transition-all"
            >
              Volver al diario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
