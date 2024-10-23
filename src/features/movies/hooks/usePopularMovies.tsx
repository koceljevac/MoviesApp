import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieRepository } from "../repository/MovieRepository";

export const usePopularMovies = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["popularMovies"],
      queryFn: ({ pageParam = 1 }) =>
        MovieRepository.getPopularMovies(pageParam),
      getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
      staleTime: 5 * 60 * 1000, // Cache for 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      initialPageParam: 1,
    });

  const popularMovies = data?.pages.flatMap((page) => page.results) || [];
  const errorMessage = isError ? error?.message || "An error occurred" : null;

  return {
    data: popularMovies,
    isLoading,
    error: errorMessage,
    fetchNextPage,
    hasNextPage,
  };
};
