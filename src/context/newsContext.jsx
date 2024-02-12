/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import useNewsQuery from "../hooks/useNewsQuery";

export const NewsContext = createContext(null);
export const NewsDispatchContext = createContext(null);

const NewsContextProvider = ({ children }) => {
  const { fetchAPI } = useNewsQuery();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAPI();
      setData(data);
    }
    fetchData();
    return () => null;
  }, []);

  return (
    <NewsContext.Provider value={{ data, setData }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;

export const useNews = () => {
  return useContext(NewsContext);
};

