import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="h-screen flex flex-col items-center mt-32">
      <h1 className="text-5xl font-bold center">Database Searcher</h1>
      <SearchBar onSearch={setSearchResult} />
      {searchResult.length > 0 && <SearchResults results={searchResult} />}
    </div>
  );
}

export default App;
