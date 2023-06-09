import React from "react";

const InputWithSearchHistory = ({
  history,
  setHistory,
  query,
  setQuery,
  match,
  setMatch,
}) => {
  return (
    <div className="flex flex-col relative">
      <input
        className="pr-4 p-2 border border-slate-600 rounded-t-md min-w-[16rem]"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setMatch(
            history.filter((hist) => {
              return (
                hist.toLowerCase().includes(e.target.value.toLowerCase()) &&
                e.target.value.length > 0
              );
            })
          );
        }}
      />
      {match.length > 0 && (
        <div className="absolute top-10 min-w-[16rem] bg-slate-200 border border-slate-600 rounded-b-md">
          {match.map((q) => (
            <div key={q} className="p-2 flex justify-between items-center">
              <div
                className="hover:cursor-pointer"
                onClick={() => {
                  setQuery(q);
                }}
              >
                {q}
              </div>
              <div
                onClick={() => {
                  setHistory(
                    history.filter((hist) => {
                      return hist !== q;
                    })
                  );
                  setMatch(
                    match.filter((m) => {
                      return m !== q;
                    })
                  );
                }}
                className="text-sm hover:bg-slate-400 hover:cursor-pointer px-2 py-1 rounded-md"
              >
                Delete
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputWithSearchHistory;
