"use client";

import { useState } from "react";
import { $api } from "../api";
import { AnimeList, Title } from "../types/anime.types";
import { Loader } from "./Loader";
import AnimeCard from "./AnimeCard";

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchInput({
  placeholder = "Поиск по названию",
  type = "text",
}: InputProps) {
  const [inputValue, setInputValue] = useState("");
  const [titles, setTitles] = useState<Title[]>();
  const [loading, setLoading] = useState(false);

  const getSearchTitles = () => {
    $api
      .get<AnimeList>("/title/search", {
        params: {
          search: inputValue,
          items_per_page: 8,
        },
      })
      .then((response) => {
        setTitles(response.data.list);
        setLoading(false);
      });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getSearchTitles();
        }}
      >
        <div className="w-full max-w-xl mx-auto p-4   flex flex-col sm:flex-row gap-4 items-center">
          <input
            type={type}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 sm:text-base"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all"
          >
            Найти
          </button>
        </div>
      </form>

      <div className=" container py-5">
        {loading && <Loader />}
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {titles?.map((title) => (
            <AnimeCard
              key={title.id}
              title={title.names.ru}
              image={title.posters.original.url}
              code={title.code}
            />
          ))}
        </div>
      </div>
    </>
  );
}
