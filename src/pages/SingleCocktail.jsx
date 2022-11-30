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
    <section>
      <div>
        <Link to="/">Back home</Link>
        <h1>{cocktail.name}</h1>
      </div>
      <div>
        <div>
          <img src={cocktail.image} alt={cocktail.name} />
        </div>
        <div>
          <div>
            <p>Name:</p>
            <span>{cocktail.name}</span>
          </div>
          <div>
            <p>Info:</p>
            <span>{cocktail.alcoholic}</span>
          </div>
          <div>
            <p>Glass:</p>
            <span>{cocktail.glass}</span>
          </div>
          <div>
            <p>Instructions:</p>
            <span>{cocktail.instructions}</span>
          </div>
          <div>
            <p>Ingredients:</p>
            {cocktail.ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail;
