import { baseapi } from '../baseapi';

const adoptionRequest = baseapi.injectEndpoints({
  endpoints: (build) => ({
    adoption: build.mutation({
      query: (data) => ({
        url: '/adoption-request',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      }),
    }),
    getAdoption: build.query({
      query: () => ({
        url: '/adoption-requests',
        method: 'GET',
      }),
    }),
  }),
});

export const { useAdoptionMutation, useGetAdoptionQuery } = adoptionRequest;
