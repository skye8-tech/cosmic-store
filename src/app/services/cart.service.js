import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `baseurl/carts`,
    preparedHeaders: (headers, { getState }) => {
      const {
        auth: { token },
      } = getState();
      if (token) {
        headers.set("Authorization", "Bearer " + token);
      }
    },
  }),
  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: (body) => ({ url: "/create", method: "POST", body }),
    }),
  }),
});

export const { useCreateCartMutation } = cartApi;
