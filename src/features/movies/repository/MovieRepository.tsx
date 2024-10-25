import { ApiService } from "../../../core/api/ApiSevices";
import { Movie } from "../../movies/types/Movie";
import { mapGenreIdsToNamesFromList } from "../../utils/GetGenresByIds";

export const MovieRepository = {
  getPopularMovies: async (
    page: number
  ): Promise<{ results: Movie[]; nextPage: number | undefined }> => {
    const data = await ApiService.getPopularMovies(page);

    return {
      results: data.results.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        overview: movie.overview,
      })),
      nextPage: data.page < data.total_pages ? data.page + 1 : undefined,
    };
  },

  getTopRatedMovies: async (
    page: number
  ): Promise<{ results: Movie[]; nextPage: number | undefined }> => {
    const data = await ApiService.getTopRatedMovies(page);

    return {
      results: data.results.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        overview: movie.overview,
        vote_count: movie.vote_count,
        genre_ids: mapGenreIdsToNamesFromList(movie.genre_ids),
      })),
      nextPage: data.page < data.total_pages ? data.page + 1 : undefined,
    };
  },

  getNowPlayingMovies: async (
    page: number
  ): Promise<{ results: Movie[]; nextPage: number | undefined }> => {
    const data = await ApiService.getNowPlayingMovies(page);

    return {
      results: data.results.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        overview: movie.overview,
        vote_count: movie.vote_count,
        genre_ids: mapGenreIdsToNamesFromList(movie.genre_ids),
      })),
      nextPage: data.page < data.total_pages ? data.page + 1 : undefined,
    };
  },

  getSimilarMovies: async (
    page: number,
    moviesId: number
  ): Promise<{ results: Movie[]; nextPage: number | undefined }> => {
    const data = await ApiService.getSimilarMovies(moviesId, page);
    return {
      results: data.results.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        overview: movie.overview,
        vote_count: movie.vote_count,
        genre_names: movie.genre_ids, // These are already genre names
      })),
      nextPage: data.page < data.total_pages ? data.page + 1 : undefined,
    };
  },
};
