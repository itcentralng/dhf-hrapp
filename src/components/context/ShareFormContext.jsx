import React, { createContext, useContext, useEffect, useState } from "react";
const ShareFormContext = createContext();

export const useShareForm = () => useContext(ShareFormContext);

export const ShareFormProvider = ({ children }) => {
  const [displayShareForm, setDisplayShareForm] = useState(false);

  return (
    <ShareFormContext.Provider
      value={{ displayShareForm, setDisplayShareForm }}
    >
      {children}
    </ShareFormContext.Provider>
  );
};
