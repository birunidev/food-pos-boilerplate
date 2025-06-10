import { useSearchParams } from "react-router-dom";

interface UseCategoriesFilterReturn {
  filter: {
    page: number;
    pageSize: number;
  };
  setFilter: (newFilter: Record<string, string | number>) => void;
}

export const useCategoriesFilter = (): [
  UseCategoriesFilterReturn["filter"],
  UseCategoriesFilterReturn["setFilter"]
] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = {
    page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
    pageSize: searchParams.get("pageSize")
      ? Number(searchParams.get("pageSize"))
      : 10,
  };

  const setFilter = (newFilter: Record<string, string | number>) => {
    setSearchParams((prev) => ({
      ...prev,
      ...newFilter,
    }));
  };

  return [filter, setFilter];
};
