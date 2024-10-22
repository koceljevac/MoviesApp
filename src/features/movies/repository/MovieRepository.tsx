// src/repositories/MovieRepository.ts
import { ApiService } from '../../../core/api/ApiSevices';
import { Movie } from '../../movies/types/Movie';

export const MovieRepository = {
  getPopularMovies: async (): Promise<Movie[]> => {
    const endpoint = '/movie/popular?language=en-US&page=1';
    const data = await ApiService.get(endpoint);

    console.log(data)

    return data.results.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
      vote_average: movie.vote_average,
      overview: movie.overview,
    }));
  },
};
