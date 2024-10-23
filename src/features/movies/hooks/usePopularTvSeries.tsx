import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieRepository } from "../repository/MovieRepository";
import { Series } from "../types/Series";

export const usePopularTVSeries = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["popularTvSeries"],
      queryFn: ({ pageParam = 1 }) =>
        MovieRepository.getTopPopularTVSeries(pageParam),
      getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
      staleTime: 5 * 60 * 1000, // Cache for 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      initialPageParam: 1,
    });

  const popularTVSeries = data?.pages.flatMap((page) => page.results) || [];
  const errorMessage = isError ? error?.message || "An error occurred" : null;

  return {
    data: popularTVSeries,
    isLoading,
    error: errorMessage,
    fetchNextPage,
    hasNextPage,
  };
};
