import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieRepository } from "../repository/MovieRepository";

export const useSimilarMovies = (movieId: number) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["similarMovies", movieId], // Add movieId as part of the query key
      queryFn: ({ pageParam = 1 }) =>
        MovieRepository.getSimilarMovies(pageParam, movieId), // Pass both movieId and pageParam
      getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
      staleTime: 5 * 60 * 1000, // Cache time for 5 minutes
      retry: 1, // Retry once on error
      refetchOnWindowFocus: false,
      initialPageParam: 1,
    });

  const topRatedMovies = data?.pages.flatMap((page) => page.results) || [];

  return {
    data: topRatedMovies,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  };
};
