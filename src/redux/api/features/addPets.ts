import { baseapi } from '../baseapi';

const addPets = baseapi.injectEndpoints({
  endpoints: (build) => ({
    addPet: build.mutation({
      query: (data) => ({
        url: '/pets',
        method: 'POST',
        contentType: 'application/json',
        data,
      }),
    }),
    getpets: build.query({
      query: () => ({
        url: '/pets',
        method: 'GET',
      }),
    }),
  }),
});
export const { useAddPetMutation, useGetpetsQuery } = addPets;
