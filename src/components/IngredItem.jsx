import style from './ingredItem.module.css'
export default function IngredItem({ item }) {
  return (
    <div>
      <div className={style.outer}>
        <div className={style.imageContainer}>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
          alt="xyz"
        />
        </div>
       
       <div className={style.text}>
        <div className={style.name}>{item.name}</div>
        <div className={style.amount}>{item.amount}
            {item.unit}</div>
          
        </div> 
        
        
      </div>
    </div>
  );
}
