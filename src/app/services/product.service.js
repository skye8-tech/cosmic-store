import { createApi } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `base/products`,
    prepareHeaders: (headers, { getState }) => {
      const {
        auth: { token },
      } = getState();
      if (token) {
        headers.set("Authorization", "Bearer " + token);
      }
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {},
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
