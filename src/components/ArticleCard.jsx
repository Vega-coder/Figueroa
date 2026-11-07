import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function ArticleCard({ post, onOpenArticle }) {
  return (
    <article
      onClick={() => onOpenArticle(post)}
      className="editorial-card group cursor-pointer flex flex-col justify-between p-6 sm:p-8 transition-all duration-500"
    >
      <div>
        {/* Post Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/10 mb-6 border border-ink/5">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 ease-editorial"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-paper/90 backdrop-blur-sm px-2.5 py-0.5 border border-ink/10 text-[0.62rem] uppercase tracking-[0.2em] font-medium text-ink">
            {post.category}
          </div>
        </div>

        {/* Post Meta */}
        <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-ash font-medium mb-3">
          <span className="font-mono">{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        {/* Post Title */}
        <h3 className="heading-display text-2xl sm:text-2xl lg:text-[1.75rem] text-ink leading-tight group-hover:text-gold-deep transition-colors duration-700">
          {post.title}
        </h3>

        {/* Post Excerpt */}
        <p className="mt-3 font-serif italic text-base text-ash leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Footer Read Action */}
      <div className="mt-8 pt-4 border-t border-ink/5 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-ink font-semibold group-hover:tracking-[0.35em] group-hover:text-gold-deep transition-all duration-500">
          <span>Leer</span>
          <FiArrowUpRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <span className="text-[0.65rem] font-mono text-ash/60">GF/ED</span>
      </div>
    </article>
  );
}
