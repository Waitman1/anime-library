"use client";

import Link from "next/link";
import React from "react";
import { IMG_HOST } from "../api";

type AnimeCardProps = {
  title: string;
  image: string;
  code: string;
};

const AnimeCard: React.FC<AnimeCardProps> = ({ title, image, code }) => {
  return (
    <Link href={`/anime/${code}`}>
      <div className="relative w-[252px]  rounded-lg shadow-lg overflow-hidden flex flex-col bg-black group">
        {/* Картинка */}
        <div className="w-full h-[80%] overflow-hidden relative">
          <img
            src={IMG_HOST + image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
          {/* Затемняющий слой */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
        </div>

        <h3 className="py-4   px-4 font-bold text-md text-center text-white truncate">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default AnimeCard;
