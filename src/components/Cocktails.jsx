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
      <section className="px-5 sm:px-8">
        <h1 className="text-2xl sm:text-4xl text-center font-bold">
          Cocktails not found
        </h1>
      </section>
    );
  }

  return (
    <div>
      <h1 className="text-center text-2xl sm:text-4xl font-bold mb-10">
        Cocktails
      </h1>
      <div className="flex flex-wrap justify-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cocktails;
