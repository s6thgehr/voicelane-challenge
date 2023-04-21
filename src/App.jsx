import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="h-screen flex flex-col items-center mt-32">
      <h1 className="text-5xl font-bold center">Database Searcher</h1>
      <SearchBar />
    </div>
  );
}

export default App;
