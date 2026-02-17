import client from './client.js';
import { toaster } from '../utils/utils.js';

export const exercisesApi = {
  fetchFilters: async ({ filter, page = 1, limit = 10 }) => {
    try {
      const params = new URLSearchParams({
        filter: filter || '',
        page,
        limit
      });
      
      const { data } = await client.get(`/filters?${params}`);
      return data;
    } catch (error) {
      return { results: [], totalPages: 0, page: 1 };
    }
  },

  fetchExercises: async ({ page, limit = 10, keyword, muscles, bodypart, equipment }) => {
    try {
      const params = {
        page,
        limit,
        ...(keyword && { keyword }),
        ...(muscles && { muscles }),
        ...(bodypart && { bodypart }),
        ...(equipment && { equipment }),
      };

      const { data } = await client.get('/exercises', { params });
      return data;
    } catch (error) {
      return { results: [], totalPages: 0, page: 1 };
    }
  },

  getExerciseById: async (id) => {
    try {
      const { data } = await client.get(`/exercises/${id}`);
      return data;
    } catch (error) {
      toaster.showErrorToast(`Error: ${error.message}`);
      throw error;
    }
  },

  updateRating: async (id, ratingPayload) => {
    const { data } = await client.patch(`/exercises/${id}/rating`, ratingPayload);
    return data;
  },

  quoteOfDay: async () => {
    const { data } = await client.get('/quote');
    return data;
  },

  getExercisesFilteredOrSearched: async (params = {}) => {
    const { filters = {}, search, page, limit } = params;
  
    const queryParams = {
      page,
      limit,
      ...filters,
      ...(search && { keyword: search })
    };

    const { data } = await client.get('/exercises', { params: queryParams });
    return data;
  },
  
  getFilters: async (params) => {
     return exercisesApi.fetchFilters(params);
  }
};