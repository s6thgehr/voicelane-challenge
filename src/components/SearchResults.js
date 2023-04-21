import React from "react";

const SearchResults = ({ results }) => {
  return (
    <table className="border-collapse border border-slate-500 mt-8">
      <thead>
        <tr>
          <th className="border border-slate-600 py-2 px-4">Image</th>
          <th className="border border-slate-600 py-2 px-4">Title</th>
          <th className="border border-slate-600 py-2 px-4">Description</th>
          <th className="border border-slate-600 py-2 px-4">Brand</th>
          <th className="border border-slate-600 py-2 px-4">Rating</th>
          <th className="border border-slate-600 py-2 px-4">Price</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const product = result.document;
          return (
            <tr key={result.id}>
              <td className="border border-slate-600">
                <img
                  className="m-4 rounded-md w-[10rem] aspect-[4/3]"
                  src={product.thumbnail}
                />
              </td>
              <td className="border border-slate-600 text-center table-cell px-4">
                {product.title}
              </td>
              <td className="border border-slate-600 px-4 whitespace-normal max-w-[20rem] max-h-[1rem] overflow-ellipsis">
                {product.description}
              </td>
              <td className="border border-slate-600 table-cell text-center px-4">
                {product.brand}
              </td>
              <td className="border border-slate-600 table-cell text-center px-4">
                {product.rating}
              </td>
              <td className="border border-slate-600 table-cell text-center px-4">
                {product.price} $
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
