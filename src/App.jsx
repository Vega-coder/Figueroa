import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BlogPage from "./pages/BlogPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
