// src/repositories/MovieRepository.ts
import { ApiService } from '../../../core/api/ApiSevices';
import { Movie } from '../../movies/types/Movie';

export const MovieRepository = {
  getPopularMovies: async (): Promise<Movie[]> => {
    const data = await ApiService.getPopularMovies(); 

    return data.results.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
      vote_average: movie.vote_average,
      overview: movie.overview,
    }));
  },

  getTopRatedMovies: async (): Promise<Movie[]> => {
    const data = await ApiService.getTopRatedMovies(); 

    return data.results.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
      vote_average: movie.vote_average,
      overview: movie.overview,
    }));
  }
};
