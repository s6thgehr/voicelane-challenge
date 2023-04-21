import React, { useState } from "react";
import { search } from "@orama/orama";
import orama from "../db/orama";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchResult = await search(orama, {
      term: query,
      properties: "*",
      boost: {
        author: 1.5, // optional: boost author field by x1.5
      },
    });
    onSearch(searchResult.hits);
  };
  return (
    <form className="my-8">
      <input
        className="mr-4 p-2 border border-black rounded-md"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        className="py-2 px-4 bg-slate-300 hover:bg-slate-500 rounded-md"
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
