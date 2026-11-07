import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleGrid from "../components/ArticleGrid";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ArticleModal from "../components/ArticleModal";
import CustomCursor from "../components/CustomCursor";
import { blogPosts, featuredPost } from "../data/blogData";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeArticle, setActiveArticle] = useState(null);

  // Filter posts based on category
  const filteredPosts =
    selectedCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase() === selectedCategory.toLowerCase());

  const showFeatured =
    selectedCategory === "Todos" ||
    featuredPost.category.toLowerCase() === selectedCategory.toLowerCase();

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between selection:bg-gold/20 selection:text-ink">
      <CustomCursor />
      
      <div>
        <Navbar />
        <main>
          <Hero />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {showFeatured && (
            <FeaturedArticle onOpenArticle={(article) => setActiveArticle(article)} />
          )}

          <ArticleGrid
            posts={filteredPosts}
            onOpenArticle={(article) => setActiveArticle(article)}
          />

          <Newsletter />
        </main>
      </div>

      <Footer />

      {activeArticle && (
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </div>
  );
}
