import React from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleGrid({ posts, onOpenArticle }) {
  if (posts.length === 0) {
    return (
      <section className="py-20 text-center container-editorial">
        <p className="font-serif italic text-xl text-ash">
          No hay reflexiones en esta categoría por el momento.
        </p>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial">
        <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-ink/10">
          <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium">
            Entradas Recientes ({posts.length})
          </span>
          <span className="font-serif italic text-sm text-ash">
            El taller en palabras
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <ArticleCard
              key={post.id}
              post={post}
              onOpenArticle={onOpenArticle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
