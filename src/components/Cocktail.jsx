import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ item }) {
  return (
    <div className="max-w-sm m-3">
      <div>
        <img src={item.image} alt={item.name} className="rounded-t" />
      </div>
      <div className="bg-white text-black rounded-b p-5">
        <h2 className="text-xl sm:text-2xl font-bold">{item.name}</h2>
        <h3 className="text-lg sm:text-xl font-semibold my-1">{item.glass}</h3>
        <p className="text-lg sm:text-xl text-gray-500 mb-2">
          {item.alcoholic}
        </p>
        <Link
          to={`/cocktails/${item.id}`}
          className="bg-green-500 px-4 py-1 rounded text-white inline-block hover:bg-green-800 transition-colors"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Cocktail;
