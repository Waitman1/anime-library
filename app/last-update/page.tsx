"use client";

import { $api } from "@/app/api";

import Header from "@/app/components/Header";
import { Loader } from "@/app/components/Loader";
import { AnimeList, IPagination, Title } from "@/app/types/anime.types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import { Pagination, PaginationProps } from "antd";

export default function AnimePage() {
  const { code } = useParams();

  const [titles, setTitles] = useState<Title[]>();

  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [pagination, setPagination] = useState<IPagination>();

  const handlePageChange: PaginationProps["onChange"] = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    setLoading(true);
    $api
      .get<AnimeList>("/title/changes", {
        params: {
          playlist_type: "array",
          items_per_page: 8,
          code: code,
          page: activePage,
        },
      })
      .then((response) => {
        setTitles(response.data.list);
        setPagination(response.data.pagination);
        setLoading(false);
      });
  }, [activePage, code]);

  return (
    <div>
      <Header />
      <h2 className="text-3xl font-bold text-black mb-4 pt-7 ml-12">
        Последнее обновление
      </h2>
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
      <Pagination
        className="mt-24 flex justify-center custom-pagination mb-4"
        current={activePage}
        total={pagination?.pages}
        defaultCurrent={1}
        showSizeChanger={false}
        onChange={handlePageChange}
      />
    </div>
  );
}
