import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${id}`);
      const { drinks } = await response.json();

      if (drinks) {
        const {
          strDrink,
          strDrinkThumb,
          strGlass,
          strAlcoholic,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const newCocktail = {
          name: strDrink,
          image: strDrinkThumb,
          glass: strGlass,
          alcoholic: strAlcoholic,
          instructions: strInstructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  if (loading || !cocktail) {
    return <Loading />;
  }

  return (
    <section className="px-4 sm:px-8">
      <div className="text-center mb-14">
        <Link
          to="/"
          className="bg-green-500 py-1 px-8 uppercase text-lg sm:text-xl mb-4 inline-block hover:bg-green-800 transition-colors rounded"
        >
          Back home
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold">{cocktail.name}</h1>
      </div>
      <div className="flex container sm:max-w-4xl mx-auto justify-evenly">
        <div className="w-[40%]">
          <img src={cocktail.image} alt={cocktail.name} className="rounded" />
        </div>
        <div className="w-[50%]">
          <div className="flex mb-5 text-lg sm:text-xl">
            <p className="mr-2 bg-green-500 h-fit p-1 rounded">Name:</p>
            <span>{cocktail.name}</span>
          </div>
          <div className="flex mb-5 text-lg sm:text-xl">
            <p className="mr-2 bg-green-500 h-fit p-1 rounded">Info:</p>
            <span>{cocktail.alcoholic}</span>
          </div>
          <div className="flex mb-5 text-lg sm:text-xl">
            <p className="mr-2 bg-green-500 h-fit p-1 rounded">Glass:</p>
            <span>{cocktail.glass}</span>
          </div>
          <div className="flex mb-5 text-lg sm:text-xl">
            <p className="mr-2 bg-green-500 h-fit p-1 rounded">Instructions:</p>
            <span>{cocktail.instructions}</span>
          </div>
          <div className="flex mb-5 text-lg sm:text-xl flex-wrap">
            <p className="mr-2 bg-green-500 h-fit p-1 rounded">Ingredients:</p>
            {cocktail.ingredients.map((item, index) => {
              return item ? (
                <span key={index} className="mr-2">
                  {item}
                </span>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail;
