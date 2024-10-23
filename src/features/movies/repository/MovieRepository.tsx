import { ApiService } from "../../../core/api/ApiSevices";
import { Movie } from "../../movies/types/Movie";
import { Series } from "../../movies/types/Series";

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
      })),
      nextPage: data.page < data.total_pages ? data.page + 1 : undefined,
    };
  },

  getTopPopularTVSeries: async (
    page: number
  ): Promise<{ results: Series[]; nextPage: number | undefined }> => {
    const data = await ApiService.getPopularTVseries(page);

    return {
      results: data.results.map((series: Series) => ({
        id: series.id,
        name: series.name,
        release_date: series.release_date,
        poster_path: `https://image.tmdb.org/t/p/w500${series.poster_path}`,
        vote_average: series.vote_average,
        overview: series.overview,
      })),
      nextPage: data.page < data.total_pages ? data.page + 1 : undefined,
    };
  },
};
