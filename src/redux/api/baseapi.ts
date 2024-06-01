import { getFromLocalStorage } from '@/utils/local-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseapi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    headers: {
      authorization: getFromLocalStorage('accessToken') as string,
    },
  }),

  endpoints: () => ({}),
});
