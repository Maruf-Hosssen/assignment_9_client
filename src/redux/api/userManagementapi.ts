import { baseapi } from './baseapi';

const userManagement = baseapi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: '/profiles',
        method: 'GET',
      
      }),
    }),
  }),
});

export const { useGetAllUserQuery } = userManagement;
