"use client";

import React, { useState } from "react";
import AnimeCard from "./components/AnimeCard";

const Home: React.FC = () => {
  const animeList = [
    {
      title: "Death Note",
      description: "A story about a notebook that grants the power to kill.",
      imageUrl:
        "https://opis-cdn.tinkoffjournal.ru/mercury/death-note-in.ccq6hr..jpg",
    },
    {
      title: "Naruto",
      description: "A young ninja striving to become Hokage.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      title: "Attack on Titan",
      description: "Humanity's battle against titans.",
      imageUrl:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 container mx-auto ">
      {/* Header */}
      <header className="bg-white shadow-md ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
          <img
            className="w-30 h-20"
            src="https://storage.yandexcloud.net/fabula-app/production/8dd91af5-00b7-4137-9582-a5f27012fdfb/generations/images/2025-01-05_23-56-15_529697/f5aa2c17-7014-4502-90b8-32a3eeca7765/626660b0-1e7e-417c-b9fd-da0892b55a00.jpg?AWSAccessKeyId=YCAJEGZY1jba0S1CJAiQtKiG3&Signature=C8u%2Fim9%2F9CukjKj7nzY5rAj7G%2FA%3D&Expires=1736207786"
            alt=""
          />
          <button
            className="sm:hidden text-gray-800 focus:outline-none z-30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:block absolute sm:static top-0 left-0 h-[100%] w-[100%] sm:w-auto bg-white sm:bg-transparent z-10 shadow-md sm:shadow-none`}
          >
            <ul className="flex flex-col items-end   sm:flex-row sm:space-x-4 sm:py-0 py-20 text-gray-600 items-center">
              <li>
                <a href="#" className="block py-2 px-4 hover:text-blue-500">
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#top-anime"
                  className="block py-6 px-4 hover:text-blue-500"
                >
                  Топ Аниме
                </a>
              </li>
              <li>
                <a
                  href="#latest-updates"
                  className="block py-2 px-4 hover:text-blue-500"
                >
                  Последнее обновление
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Топ Аниме */}
        <section id="top-anime" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Топ Аниме</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
            {animeList.map((anime, index) => (
              <AnimeCard
                key={index}
                title={anime.title}
                description={anime.description}
                imageUrl={anime.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
