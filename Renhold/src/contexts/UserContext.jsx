import { createContext, useContext } from "react";

export const INITIAL_STATE = {
  language: "en",
};

export const UserContext = createContext({
  ...INITIAL_STATE,
  setLanguageState: (language) => {},
});

export function useUserContext() {
    return useContext(UserContext);
    }
