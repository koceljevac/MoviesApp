import { mapGenreIdsToNamesFromList } from "../../utils/GetGenresByIds";
import { Series } from "../models/Series";
import { ApiService } from "../../../core/api/ApiSevices";

export const SeriesRepository = {
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
        vote_count: series.vote_count,
        genre_ids: mapGenreIdsToNamesFromList(series.genre_ids),
      })),
      nextPage: data.page < data.total_pages ? data.page + 1 : undefined,
    };
  },
};
