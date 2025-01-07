import { useEffect, useState } from "react";
import { Pagination, PaginationProps } from "antd";
import { $api } from "../api";
import { AnimeList, IPagination, Title } from "../types/anime.types";
import AnimeCard from "./AnimeCard";

const AnimeListPage: React.FC = ({}) => {
  const [titles, setTitles] = useState<Title[]>();
  const [pagination, setPagination] = useState<IPagination>();
  const [activePage, setActivePage] = useState(1);

  const handlePageChange: PaginationProps["onChange"] = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    $api
      .get<AnimeList>("/title/updates", {
        params: {
          playlist_type: "array",
          page: activePage,
          items_per_page: 10,
        },
      })
      .then((response) => {
        setTitles(response.data.list);
        setPagination(response.data.pagination); // Передаем данные в setTitles
      });
  }, [activePage]);

  return (
    <div className="container py-5 px-0">
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
        className="mt-24 flex justify-center"
        current={activePage}
        total={pagination?.pages}
        defaultCurrent={1}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default AnimeListPage;
