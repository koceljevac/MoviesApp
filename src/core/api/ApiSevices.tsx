// src/api/ApiService.ts
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const ApiService = {
  getPopularMovies: async () => {
    const endpoint = `/movie/popular?language=en-US&page=1&api_key=${API_KEY}`;
    const fullUrl = `${BASE_URL}${endpoint}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  },

  getTopRatedMovies: async () => {
    const endpoint = `/movie/top_rated?api_key=${API_KEY}`;
    const fullUrl = `${BASE_URL}${endpoint}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  },

  getPopularActors: async () => {
    const endpoint = `/person/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const fullUrl = `${BASE_URL}${endpoint}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  },
};
