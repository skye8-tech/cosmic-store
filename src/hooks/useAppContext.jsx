import { useContext } from "react";
import { AppContext } from "@providers";
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AppContextProvider");
  }

  return context;
};