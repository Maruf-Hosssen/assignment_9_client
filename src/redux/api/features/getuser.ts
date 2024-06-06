import { baseapi } from '../baseapi';

export enum tagTypes {
  user = 'user',
  admin = 'admin',
}

export const tagTypesList = [tagTypes.user, tagTypes.admin];

const getUsers = baseapi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: (data) => ({
        url: '/profile',
        method: 'GET',
        contentType: 'application/json',
        data,
      }),
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: '/profile',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      }),
    }),
  }),
});

export const { useGetSingleUserQuery, useUpdateUserMutation } = getUsers;
