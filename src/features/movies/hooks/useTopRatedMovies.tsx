import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieRepository } from "../repository/MovieRepository";

export const useTopRatedMovies = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["topRatedMovies"],
      queryFn: ({ pageParam = 1 }) =>
        MovieRepository.getTopRatedMovies(pageParam),
      getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
      staleTime: 5 * 60 * 1000, // Cache for 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      initialPageParam: 1,
    });

  const topRatedMovies = data?.pages.flatMap((page) => page.results) || [];
  const errorMessage = isError ? error?.message || "An error occurred" : null;

  return {
    data: topRatedMovies,
    isLoading,
    error: errorMessage,
    fetchNextPage,
    hasNextPage,
  };
};
