import { createContext, useContext, useEffect, useRef, useState } from "react";

const GlobalState = createContext();

export const useGlobalState = () => {
  return useContext(GlobalState);
};

export const GlobalStateProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

  const setDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [width]);

  const contactSection = useRef();

  return (
    <GlobalState.Provider
      value={{
        width,
        contactSection,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
