// src/api/ApiService.ts
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const ApiService = {
  getPopularMovies: async (page: number) => {
    const endpoint = `/movie/popular?language=en-US&page=${page}&api_key=${API_KEY}`;
    const fullUrl = `${BASE_URL}${endpoint}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  },

  getTopRatedMovies: async (page: number) => {
    const endpoint = `/movie/top_rated?language=en-US&page=${page}&api_key=${API_KEY}`;
    const fullUrl = `${BASE_URL}${endpoint}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  },

  getNowPlayingMovies: async (page: number) => {
    const endpoint = `/movie/now_playing?language=en-US&page=${page}&api_key=${API_KEY}`;
    const fullUrl = `${BASE_URL}${endpoint}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  },

  getPopularTVseries: async (page: number) => {
    const endpoint = `/tv/popular?language=en-US&page=${page}&api_key=${API_KEY}`;
    const fullUrl = `${BASE_URL}${endpoint}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  },
  getPopularActors: async (page: number) => {
    const endpoint = `/person/popular?language=en-US&page=${page}&api_key=${API_KEY}`;
    const fullUrl = `${BASE_URL}${endpoint}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  },

  getSimilarMovies: async (movieId: number, page: number = 1) => {
    const endpoint = `/movie/${movieId}/similar?language=en-US&page=${page}&api_key=${API_KEY}`;
    const fullUrl = `${BASE_URL}${endpoint}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  },
};
