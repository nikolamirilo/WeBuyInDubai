import { useEffect } from "react";
import { useGlobalState } from "./../context/GlobalContext";

export const useLoader = () => {
  const { setLoading } = useGlobalState();
  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
};
