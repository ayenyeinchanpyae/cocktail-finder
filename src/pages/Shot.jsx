import React from "react";
import { useEffect, useState } from "react";
import PopularCard from "../components/PopularCard";
const Shot = () => {
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=shot`;
    const response = await fetch(`${url}`);
    const data = await response.json();
    const result = data.drinks.slice(1, 25);
    if (result) {
      const newCocktails = result.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;

        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setDrink(newCocktails);
    } else {
      setDrink([]);
    }
  };

  return (
    <div className="mb-8 xl:mb-16 mt-[50px]">
      <p className="text-4xl font-bold text-center mb-[50px]"></p>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-8">
        {drink.map((item) => {
          return <PopularCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Shot;
