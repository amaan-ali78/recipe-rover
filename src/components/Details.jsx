import { useEffect, useState } from "react";
import style from "./details.module.css";
import IngredList from "./IngredList";
const API_KEY = "6767e4169d4e4033a2a0cad619a58396";
export default function Details({ recipe, setRecipe, foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function recipeFetch() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const recipeData = await res.json();
      console.log(recipeData.title);
      setRecipe(recipeData);
      setIsLoading(false);
    }
    recipeFetch();
  }, [foodId]);
  return (
    <div>
      <div  className={style.recipeCard}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className={style.recipeImage}>
              <h1 className={style.title}>{recipe.title}</h1>
              <img src={recipe.image} alt="" />
            </div>
            <div className={style.dets}>
            <span>
              ⌚ :<strong>{recipe.readyInMinutes} Minutes </strong>
            </span>
            <span>
              <strong> Serves : {recipe.servings} </strong>
            </span>
            <span>
              <strong>
                {" "}
                {recipe.vegeterian ? "🥕Vegeterian" : "🍗Non-Vegeterian"} 
              </strong>
            </span>
            </div>
            <div className={style.ingCont}>
              {console.log(recipe)}
          <h1>Ingredients</h1>
          <IngredList recipe={recipe}/>
        </div>
           
          </div>
        )}
        

        <div className={style.instruction}>
          <h1>Instructions</h1>
          <ol className={style.list}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              recipe.analyzedInstructions[0].steps.map((step) => (
                <li className={style.step}>{step.step}</li>
              ))
            )}
          </ol>
          {}
        </div>
      </div>
    </div>
  );
}
