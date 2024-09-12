import Layout from "@layouts/Layout";
import { Home } from "@pages";
import About from "@pages/About/About";
import Account from "@pages/Account/Account";
import Login from "@pages/Authentication/Login";
import Register from "@pages/Authentication/Register";
import Checkout from "@pages/checkout/Checkout";
import { createBrowserRouter } from "react-router-dom";
import Cart from "@pages/Cart/Cart";
import ProductDetails from "@pages/ProductDetails/ProductDetails";
import VendorDashboard from "@pages/VendorPages/Dashboard/VendorDashboard";
import VendorLayout from "@layouts/VendorLayout";
import Orders from "@pages/VendorPages/Orders/Orders";

const children = [
  { element: <Home />, path: "/" },
  { element: <Register />, path: "/register" },
  { element: <Login />, path: "/login" },
  { element: <ProductDetails />, path: "/product/:id" },
  { element: <About />, path: "/about" },
  { element: <Cart />, path: "/cart" },
  { element: <Account />, path: "/account" },
  { element: <VendorDashboard />, path: "/dashboard" },
  { element: <Checkout />, path: "/checkout" },
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
  {
    element: <VendorLayout />,
    path: "vendor",
    errorElement: (
      <a href="/" className="text-center">
        This page does not exist
      </a>
    ),
    children: [
      { element: <VendorDashboard />, index: true },
      { element: <Orders />, path: "orders" },
      { element: <h1>To be done</h1>, path: "*" },
    ],
  },
]);
