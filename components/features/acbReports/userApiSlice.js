import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.mutation({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
    getUser: builder.mutation({
      query: (credentials) => ({
        url: `users/${credentials.id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllUsersMutation, useGetUserMutation } = usersApiSlice;
