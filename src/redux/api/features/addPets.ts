import { baseapi } from '../baseapi';

const addPets = baseapi.injectEndpoints({
  endpoints: (build) => ({
    addPet: build.mutation({
      query: (data) => ({
        url: '/pets',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      }),
    }),
    getpets: build.query({
      query: () => ({
        url: '/pets',
        method: 'GET',
      }),
    }),
    getSinglepet: build.query({
      query: (petId) => ({
        url: `/pet/${petId}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useAddPetMutation, useGetpetsQuery, useGetSinglepetQuery } =
  addPets;
