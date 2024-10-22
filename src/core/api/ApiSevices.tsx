// src/api/ApiService.ts
const API_KEY = '2c0db6c63678075a6698817405b8b105'; // Tvoj API ključ
const BASE_URL = 'https://api.themoviedb.org/3'; // Bazni URL

export const ApiService = {

    get: async (endpoint: string) => {
    const fullUrl = `${BASE_URL}${endpoint}&api_key=${API_KEY}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  },

};
