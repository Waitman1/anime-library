"use client";

import React from "react";

import AnimeListPage from "./components/AnimeListPage";
import Header from "./components/Header";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 container mx-auto ">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="container mx-auto px-4 bg-slate-300">
        {/* Топ Аниме */}
        <section id="top-anime" className="container">
          <AnimeListPage />
        </section>
      </main>
    </div>
  );
};

export default Home;
