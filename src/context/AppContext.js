import React, { createContext, useState } from "react";
import { setLocalStorage, getLocalStorage } from "@/src/utils/local-storage.js";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  const submitEmail = (email) => {
    const formData = new FormData();
    formData.append("email", email);

    const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/createUser`;
    const config = {
      method: "POST",
      headers: {
        Accept: "applicaton/json",
      },
      body: formData,
    };

    return fetch(BASE_URL, config);
  };

  const checkSubscribed = () => !!getLocalStorage("hasSubscribed");

  const setSubscribed = () => setLocalStorage("hasSubscribed", true);

  const contextObject = {
    isLoading,
    setLoading,
    submitEmail,
    setSubscribed,
    checkSubscribed,
  };

  return (
    <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>
  );
};
