import { useInfiniteQuery } from "@tanstack/react-query";
import { ActorsRepository } from "../repository/ActorsRepository";

export const usePopularActors = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["popularActors"],
      queryFn: ({ pageParam }) => ActorsRepository.getPopularActors(pageParam),
      getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
      retry: 1,
      initialPageParam: 1,
    });

  const popularActor = data?.pages.flatMap((page) => page.results) || [];
  const errorMessage = isError ? error?.message || "An error occurred" : null;

  return {
    data: popularActor,
    isLoading,
    error: errorMessage,
    fetchNextPage,
    hasNextPage,
  };
};
