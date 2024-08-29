import { store } from "@app";
import { AppContext } from "@providers";
import { router } from "@router";
import { LocalStorage } from "@util";
import { useState } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

// export const AppContext = createContext();
const ContextProvider = ({ children }) => {
  const access_token = LocalStorage.load("token");
  const [isLoggedIn, setIsLoggedIn] = useState(access_token ? true : false);
  const logOut = () => {
    console.log("User is loggin out.....");
    LocalStorage.remove("token");
    setIsLoggedIn(false);
  };
  const logIn = () => {
    console.log("User is loggin out.....");
    setIsLoggedIn(access_token ? true : false);
  };
  return (
    <AppContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        logOut: logOut,
        logIn: logIn,
        // other context values here...
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppProvider = () => (
  <Provider store={store}>
    {/* Other providers */}
    {/* AppContext */}
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </Provider>
);
