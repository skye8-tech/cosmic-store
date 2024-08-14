import Layout from "@layouts/Layout";
import { Home } from "@pages";
import Register from "@pages/Authentication/Register";
import { createBrowserRouter, Outlet } from "react-router-dom";

const children = [{ element: <Home />, path: "/" },
  {element: <Register/> , path:"/register"}
];

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
