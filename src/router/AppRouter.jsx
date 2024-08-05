import { Home } from "@pages";
import { createBrowserRouter, Outlet } from "react-router-dom";

const children = [{ element: <Home />, path: "/" }];

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Outlet></Outlet>
      </>
    ),
    path: "",
    errorElement: (
      <a href="/" className="text-center">
        This page does not exist
      </a>
    ),
    children,
  },
]);
