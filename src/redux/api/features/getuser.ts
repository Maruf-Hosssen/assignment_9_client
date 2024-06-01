import { baseapi } from '../baseapi';

export enum tagTypes {
  user = 'user',
  admin = 'admin',
}

export const tagTypesList = [tagTypes.user, tagTypes.admin];

const getUsers = baseapi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: '/profile',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSingleUserQuery } = getUsers;
