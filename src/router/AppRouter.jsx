import Layout from "@layouts/Layout";
import { Home } from "@pages";
import About from "@pages/About/About";
import Account from "@pages/Account/Account";
import Login from "@pages/Authentication/Login";
import Register from "@pages/Authentication/Register";

import Cart from "@pages/Cart/Cart";
import { createBrowserRouter, Outlet } from "react-router-dom";

import ProductDetails from "@pages/ProductDetails/ProductDetails";


const children = [
  { element: <Home />, path: "/" },
  { element: <Register />, path: "/register" },
  { element: <Login />, path: "/login" },
  { element: <ProductDetails />, path: "/product/:id" },
  { element: <About />, path: "/about" },
    {element: <Cart/>,path:"/cart"}
  { element: <Account />, path: "/account" },

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
