import { store } from "@app";
import { router } from "@router";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

export const AppProvider = () => (
  <Provider store={store}>
    {/* Other providers */}
    <RouterProvider router={router} />
  </Provider>
);
