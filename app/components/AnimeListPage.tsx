import { useEffect, useState } from "react";
import { Pagination, PaginationProps } from "antd";
import { $api } from "../api";
import { AnimeList, IPagination, Title } from "../types/anime.types";
import AnimeCard from "./AnimeCard";
import { Loader } from "./Loader";
import SearchInput from "./SearchInput";

const AnimeListPage: React.FC = ({}) => {
  const [titles, setTitles] = useState<Title[]>();
  const [pagination, setPagination] = useState<IPagination>();
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handlePageChange: PaginationProps["onChange"] = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    setLoading(true);
    $api
      .get<AnimeList>("/title/updates", {
        params: {
          playlist_type: "array",
          page: activePage,
          items_per_page: 8,
        },
      })
      .then((response) => {
        setLoading(false);
        setTitles(response.data.list);
        setPagination(response.data.pagination); // Передаем данные в setTitles
      });
  }, [activePage]);

  return (
    <>
      <div className="container py-5 px-0">
        <SearchInput />
        <h2 className="text-5xl font-bold text-gray-800 mb-4 pt-7 ml-12">
          Топ Аниме
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
          className="mt-24 flex justify-center custom-pagination"
          current={activePage}
          total={pagination?.pages}
          defaultCurrent={1}
          showSizeChanger={false}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default AnimeListPage;
