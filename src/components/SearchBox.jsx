import { useContext, useState } from "react";
import SearchIcon from "../assets/icons/search.svg";
import CloseIcon from "../assets/icons/close.svg";
import { debounce } from "../utilis/debounceControl";
import { NewsContext } from "../context/newsContext";
// import fatchData from "../utilis/fatchData";
import useNewsQuery from "../hooks/useNewsQuery";
import fetchData from "../utilis/fatchData";

const SearchBox = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { setData } = useContext(NewsContext);
  const { fetchAPI } = useNewsQuery();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchText("");
  };

  const handleOnChange = async (e) => {
    const term = e.target.value;
    setSearchText(term);
    if (term) {
      debounce(async function () {
        const data = await fetchAPI(`/search?q=${term}`);
        setData(data);
      }, 500);
    } else {
      const newdata = await fetchData();
      setData(newdata);
    }
  };

  return (
    <div className="flex items-center">
      {/* Search Box */}
      <div
        className={`ml-2 p-1 rounded-lg bg-white shadow-md ${
          isSearchOpen ? "visible" : "invisible"
        }`}
      >
        <input
          type="search"
          placeholder="Search..."
          className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchText}
          onChange={handleOnChange}
        />
      </div>

      {/* Search Icon */}
      <button
        onClick={toggleSearch}
        className="p-2 rounded-full bg-gray-300 focus:outline-none"
      >
        <img src={isSearchOpen ? CloseIcon : SearchIcon} />
        {/* <img src={CloseIcon} /> */}
      </button>
    </div>
  );
};

export default SearchBox;
