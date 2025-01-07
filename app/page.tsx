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
      <main className="container mx-auto px-4 bg-gray-300">
        {/* Топ Аниме */}
        <section id="top-anime" className="container">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pt-7">
            Топ Аниме
          </h2>

          <AnimeListPage />
        </section>
      </main>
    </div>
  );
};

export default Home;
