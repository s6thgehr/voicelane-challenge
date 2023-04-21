import React, { useState } from "react";
import { search } from "@orama/orama";
import orama from "../db/orama";
import InputWithSearchHistory from "./InputWithSearchHistory";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [match, setMatch] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchResult = await search(orama, {
      term: query,
      properties: "*",
    });
    setHistory((prevHistory) => {
      if (prevHistory.includes(query) || query.length === 0) {
        return prevHistory;
      }
      return [query, ...prevHistory];
    });
    onSearch(searchResult.hits);
    setQuery("");
    setMatch([]);
  };
  return (
    <>
      <form className="mt-8 flex items-start">
        <InputWithSearchHistory
          history={history}
          setHistory={setHistory}
          query={query}
          setQuery={setQuery}
          match={match}
          setMatch={setMatch}
        />
        <button
          className="ml-4 py-2 px-4 bg-slate-300 hover:bg-slate-500 rounded-md"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
