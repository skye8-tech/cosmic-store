import { AppContext } from "@providers";
import { useContext } from "react";

export function useAuth() {
  const auth = useContext(AppContext);
  return {
    isLoggedIn: auth.isLoggedIn,
    logOut: auth.logOut,
    logIn: auth.logIn,
    // other context values here...
  };
}
