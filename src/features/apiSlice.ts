import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ApiResponse {
  data: any; // 
}

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app' }),
  endpoints: (builder) => ({
    getQuestions: builder.query<ApiResponse, void>({
        query: () => '/getQuestions', 
    }),
    getCategories: builder.query<ApiResponse, void>({
        query: () => '/getCategories', 
    }),
  })
});

export const { useGetQuestionsQuery, useGetCategoriesQuery } = apiService;

