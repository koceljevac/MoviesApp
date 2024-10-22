import { useQuery } from '@tanstack/react-query';
import { Movie } from '../types/Movie';
import { MovieRepository } from '../repository/MovieRepository';

export const usePopularMovies = () => {
  const { 
    data: movies = [], 
    isLoading: loading, 
    isError, 
    error 
  } = useQuery<Movie[], Error>({
    queryKey: ['popularMovies'], 
    queryFn: MovieRepository.getPopularMovies,
    staleTime: 5 * 60 * 1000, 
    retry: 1, 
    refetchOnWindowFocus: false, 
  });

  const errorMessage = isError ? (error?.message || 'An error occurred') : null;

  return { 
    movies, 
    loading, 
    error: errorMessage 
  };
};
