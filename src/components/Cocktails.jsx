import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

function Cocktails() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <section>
        <h1>Cocktails not found...</h1>
      </section>
    );
  }

  return (
    <div>
      <h1>Cocktails</h1>
      <div>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cocktails;
