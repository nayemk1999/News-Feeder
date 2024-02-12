import React, { useContext, useRef, useState } from "react";
import { NewsContext } from "../context/newsContext";
import useNewsQuery from "../hooks/useNewsQuery";
import { debounce } from "../utilis/debounceControl";

export default function CategoriesMenu() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { setData } = useContext(NewsContext);
  const { fetchAPI } = useNewsQuery();

  const handleClick = async (value) => {
    setSelectedCategory(value);
    if (value) {
      const data = await fetchAPI(`/top-headlines?category=${value}`);
      setData(data);
    } else {
      const data = await fetchAPI();
      setData(data);
    }
  };

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a
            href="#"
            onClick={() => handleClick("general")}
            className={`${selectedCategory === "general" && "text-[#00d991]"}`}
          >
            General
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("business")}
            className={`${selectedCategory === "business" && "text-[#00d991]"}`}
          >
            Business
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("entertainment")}
            className={`${
              selectedCategory === "entertainment" && "text-[#00d991]"
            }`}
          >
            Entertainment
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("health")}
            className={`${selectedCategory === "health" && "text-[#00d991]"}`}
          >
            Health
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("science")}
            className={`${selectedCategory === "science" && "text-[#00d991]"}`}
          >
            Science
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("sports")}
            className={`${selectedCategory === "sports" && "text-[#00d991]"}`}
          >
            Sports
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("technology")}
            className={`${
              selectedCategory === "technology" && "text-[#00d991]"
            }`}
          >
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}
