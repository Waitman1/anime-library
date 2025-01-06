"use client";

import React from "react";

type AnimeCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const AnimeCard: React.FC<AnimeCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="w-[252px] h-[60vh] rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="w-full h-[80%] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow overflow-hidden">
        <div className="flex flex-col flex-grow">
          <h3 className="font-bold text-lg text-gray-800 ">{title}</h3>
          <p className="text-gray-600 mt-1 text-ellipsis overflow-hidden w-full h-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
