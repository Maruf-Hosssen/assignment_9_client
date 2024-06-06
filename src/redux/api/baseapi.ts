import axiosBaseQuery from '@/helpers/axios';
import { getFromLocalStorage } from '@/utils/local-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseapi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL as string,
  }),

  endpoints: () => ({}),
});
