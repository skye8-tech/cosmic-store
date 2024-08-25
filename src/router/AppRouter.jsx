import Layout from "@layouts/Layout";
import { Home } from "@pages";
import About from "@pages/About/About";
import Login from "@pages/Authentication/Login";
import Register from "@pages/Authentication/Register";
import ProductDetails from "@pages/ProductDetails/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

const children = [
  { element: <Home />, path: "/" },
  { element: <Register />, path: "/register" },
  { element: <Login />, path: "/login" },
  { element: <ProductDetails />, path: "/product/:id" },
  { element: <About />, path: "/about" },
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
