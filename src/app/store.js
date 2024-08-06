import { cartApi, productApi } from "@app/services";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (middlewares) => [
    middlewares.concat(cartApi.middleware).concat(productApi.middleware),
  ],
});
