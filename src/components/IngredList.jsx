import IngredItem from "./IngredItem";

export default function IngredList({recipe}) {
  return (
    <div>
      {recipe.extendedIngredients.map((item) => (
        <IngredItem item={item}/>
      ))}
    </div>
  );
}
