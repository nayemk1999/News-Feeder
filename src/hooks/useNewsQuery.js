import fetchData from "../utilis/fatchData";
import fatchData from "../utilis/fatchData";
import { useState, useEffect } from "react";

const VITE_BASE_URL = "http://localhost:8000/v2";

function useNewsQuery() {
  const [data, setData] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (url) => {
    try {
      const response = await fetchData(url);
      setData(response); // Assuming articles is the data we want to retrieve
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { data, fetchAPI };
}

export default useNewsQuery;
