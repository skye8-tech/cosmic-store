import Layout from "@layouts/Layout";
import { Home } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const children = [{ element: <Home />, path: "/" }];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    errorElement: (
      <a href="/" className="text-center">
        This page does not exist
      </a>
    ),
    children,
  },
]);
