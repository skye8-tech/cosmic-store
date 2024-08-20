import Layout from "@layouts/Layout";
import { Home } from "@pages";
import Login from "@pages/Authentication/Login";
import Register from "@pages/Authentication/Register";
import WishList from "@pages/WishList/WishList";

import { createBrowserRouter, Outlet } from "react-router-dom";

const children = [
  { element: <Home />, path: "/" },
  { element: <Register />, path: "/register" },
  { element: <Login />, path: "/login" },
  { element: <WishList />, path: "/wishlist" },
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
