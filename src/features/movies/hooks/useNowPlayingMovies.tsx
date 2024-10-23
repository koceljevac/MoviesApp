import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieRepository } from "../repository/MovieRepository";

export const useNowPlayingMovies = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["nowPlayingMovies"],
      queryFn: ({ pageParam }) =>
        MovieRepository.getNowPlayingMovies(pageParam),
      getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
      retry: 1,
      initialPageParam: 1,
    });

  const nowPlayingMovies = data?.pages.flatMap((page) => page.results) || [];

  const errorMessage = isError ? error?.message || "An error occurred" : null;

  return {
    data: nowPlayingMovies,
    isLoading,
    error: errorMessage,
    fetchNextPage,
    hasNextPage,
  };
};
