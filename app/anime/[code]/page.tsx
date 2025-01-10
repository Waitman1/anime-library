"use client";

import { $api, IMG_HOST, VIDEO_HOST } from "@/app/api";
import Badge from "@/app/components/Badge";
import Header from "@/app/components/Header";
import { Loader } from "@/app/components/Loader";
import { Title } from "@/app/types/anime.types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function AnimePage() {
  const { code } = useParams();

  const [title, setTitle] = useState<Title>();
  const [activeEpisode, setActiveEpisode] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    $api
      .get<Title>("/title", {
        params: {
          playlist_type: "array",
          code: code,
        },
      })
      .then((response) => {
        setTitle(response.data);
        setLoading(false);
      });
  }, [code]);

  return (
    <div>
      <Header />
      <main>
        <div className="container mx-auto px-4 flex justify-center bg-black">
          <div className="w-full max-w-3xl flex flex-col py-10 items-center">
            {loading && <Loader />}
            <img
              className="rounded-lg w-48 h-auto"
              src={IMG_HOST + title?.posters.original.url}
              alt="Anime Poster"
            />
            <p className="text-justify mt-5 text-white text-sm sm:text-base">
              {title?.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {title?.genres.map((genre) => (
                <Badge key={genre} text={genre} />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 w-full max-w-3xl">
          <select
            className="bg-slate-800 rounded-md p-2 mt-5 mb-5 text-white  text-sm sm:text-base outline-none"
            value={activeEpisode}
            onChange={(e) => setActiveEpisode(Number(e.target.value))}
          >
            {title?.player.list.map((episode) => (
              <option key={episode.uuid} value={episode.episode}>
                Серия {episode.episode}
              </option>
            ))}
          </select>
          {title?.player.list.map((episode) => (
            <div key={episode.uuid} className="mb-10">
              {episode?.episode === activeEpisode && (
                <ReactPlayer
                  width="100%"
                  height="auto"
                  url={VIDEO_HOST + episode.hls.hd}
                  controls
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
