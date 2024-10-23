import { ApiService } from "../../../core/api/ApiSevices";
import { Actor } from "../models/Actor";
import { KnownFor } from "../models/KnowFor";

export const ActorsRepository = {
  getPopularActors: async (
    page: number
  ): Promise<{ results: Actor[]; nextPage: number | undefined }> => {
    const data = await ApiService.getPopularActors(page);

    const results = data.results.map((actor: Actor) => ({
      id: actor.id,
      name: actor.name,
      profile_path: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : null,
      popularity: actor.popularity,
      known_for: actor.known_for.map((project: KnownFor) => ({
        id: project.id,
        title: project.title,
        poster_path: project.poster_path
          ? `https://image.tmdb.org/t/p/w500${project.poster_path}`
          : null,
      })),
    }));

    const nextPage = data.page < data.total_pages ? data.page + 1 : undefined;

    return { results, nextPage };
  },
};
