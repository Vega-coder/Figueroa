import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { featuredPost } from "../data/blogData";

export default function FeaturedArticle({ onOpenArticle }) {
  return (
    <section className="py-12 md:py-16 border-b border-ink/10">
      <div className="container-editorial">
        <article
          onClick={() => onOpenArticle(featuredPost)}
          className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Featured Visual */}
          <div className="lg:col-span-7 overflow-hidden border border-ink/10 bg-ink/5">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-ink/10">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover grayscale-[15%] contrast-[105%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 ease-editorial"
                loading="eager"
              />
              <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-md px-3 py-1 border border-ink/10">
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-ink">
                  Destacado
                </span>
              </div>
            </div>
          </div>

          {/* Featured Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Meta */}
            <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-ash font-medium mb-4">
              <span className="text-gold-deep font-semibold">{featuredPost.category}</span>
              <span>·</span>
              <span className="font-mono">{featuredPost.date}</span>
              <span>·</span>
              <span>{featuredPost.readTime}</span>
            </div>

            {/* Title */}
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-ink group-hover:text-gold-deep transition-colors duration-700 leading-[1.02] tracking-tight">
              {featuredPost.title}
            </h2>

            {/* Excerpt */}
            <p className="mt-4 sm:mt-6 font-serif italic text-base sm:text-lg text-ash leading-relaxed">
              "{featuredPost.excerpt}"
            </p>

            {/* Read Action */}
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.25em] text-ink font-semibold group-hover:tracking-[0.35em] group-hover:text-gold-deep transition-all duration-500">
              <span className="underline-anim">Leer ensayo</span>
              <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
