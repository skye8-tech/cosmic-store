import { createApi } from "@reduxjs/toolkit/react/query";

const cartApi = createApi({
  name: "cartApi",
  preparedHeaders: (getState, { headers }) => {
    const { token } = getState();
    if (token) {
      headers.set("Authorization", "Bearer " + token);
    }
  },
  reducers: ({ builder }) => {
    createCart: builder.mutation({});
  },
});

export const { useCreateCartMutation } = cartApi.reducers;
