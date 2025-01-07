"use client";

import { $api } from "@/app/api";
import AnimeCard from "@/app/components/AnimeCard";
import Header from "@/app/components/Header";
import { Title } from "@/app/types/anime.types";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function AnimePage() {
  const { id, code } = useParams();

  useEffect(() => {
    $api
      .get<Title>("/title", {
        params: {
          playlist_type: "array",
          code: code,
          id: id,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }, [id, code]);

  return (
    <div>
      <Header />
      <main>
        <AnimeCard title="title" image="image" code="code" />
      </main>
    </div>
  );
}
