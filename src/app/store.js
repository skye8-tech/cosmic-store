import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (middlewares) => [middlewares.concat(cartApi.middleware)],
});
