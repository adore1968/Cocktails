import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ item }) {
  return (
    <div>
      <div>
        <img src={item.image} alt={item.name} />
      </div>
      <div>
        <h2>{item.name}</h2>
        <h3>{item.glass}</h3>
        <p>{item.alcoholic}</p>
        <Link to={`/cocktails/${item.id}`}>Details</Link>
      </div>
    </div>
  );
}

export default Cocktail;
