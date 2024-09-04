import "@assets/styles/index.css";
import { AppProvider } from "@providers";
import React from "react";
import ReactDOM from "react-dom/client";
import { useAppContext } from "@hooks/useAppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppProvider /> */}
    const {(isLoggedIn, logOut, logIn)} = useAppContext();
  </React.StrictMode>
);
