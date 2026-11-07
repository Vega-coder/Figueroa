import React from "react";
import { categories } from "../data/blogData";

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="py-8 border-b border-ink/10">
      <div className="container-editorial flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category label & pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-ash font-semibold mr-2">
            Categorías:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`text-[0.72rem] uppercase tracking-[0.25em] font-semibold py-1.5 px-3 transition-all duration-300 ${
                  isActive
                    ? "text-gold-deep border-b border-gold-deep"
                    : "text-ink/60 hover:text-gold-deep"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Studio Note / Issue indicator */}
        <div className="hidden lg:flex items-center gap-2 text-[0.68rem] font-mono text-ash tracking-wider">
          <span>Edición V · CDMX</span>
        </div>
      </div>
    </div>
  );
}
