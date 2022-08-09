import React from "react";
import Loading from "../components/Loader";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <div className="flex flex-col gap-y-16 md:flex-row items-center justify-center mt-[50px]">
        {/* <div className="flex items-center">
          <h2 className="">{name}</h2>
        </div> */}
        <div className="md:w-1/2 lg:m-[5rem] md:m-[3rem] flex items-center justify-center ">
          <img
            src={image}
            className="w-[300px] rounded-t-[150px] md:w-[400px] md:h-[400px] md:rounded-t-[200px]"
            alt={name}
          />
        </div>
        <div className="md:w-1/2 flex items-center ">
          <div className="flex flex-col space-y-[2rem]">
            <p className="text-2xl font-semibold">{name}</p>
            <p>
              <span className="bg-yellow-100 text-yellow-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                Category :
              </span>
              {category}
            </p>
            <p>
              <span className="bg-yellow-100 text-yellow-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                Info :
              </span>{" "}
              {info}
            </p>
            <p>
              <span className="bg-yellow-100 text-yellow-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                Glass :
              </span>{" "}
              {glass}
            </p>
            <p>
              <span className="bg-yellow-100 text-yellow-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                Instructions :
              </span>{" "}
              {instructions}
            </p>
            <p>
              <span className="bg-yellow-100 text-yellow-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                Ingredients :
              </span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null;
              })}
            </p>
            <Link to="/cocktails" className="btn btn-primary">
              <button className="bg-orange-100 text-yellow-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
