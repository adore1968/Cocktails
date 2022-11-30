import React, { createContext, useContext, useState, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [formText, setFormText] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${formText}`);
      const { drinks } = await response.json();

      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } =
            item;
          const newItem = {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            alcoholic: strAlcoholic,
          };
          return newItem;
        });
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [formText]);

  return (
    <AppContext.Provider value={{ loading, setFormText, cocktails }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
