import { useQuery } from '@tanstack/react-query';
import { Movie } from '../../movies/types/Movie';
import { MovieRepository } from '../repository/MovieRepository';

export const useMovies = () => {
  const { 
    data: movies = [], 
    isLoading: loading, 
    isError, 
    error 
  } = useQuery<Movie[], Error>({
    queryKey: ['movies'], 
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
