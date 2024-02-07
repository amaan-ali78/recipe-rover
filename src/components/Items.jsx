import style from "./items.module.css";
export default function Items({ data, setFoodId }) {
  return (
    <div className={style.con}>
      <div className={style.outer}>
        <div className={style.image}>
          <img src={data.image} alt={data.title} />
        </div>
        <div className={style.title}>
          <h1>{data.title}</h1>
          <button
            onClick={() => {
              setFoodId(data.id);
              console.log(data.id);
            }}
          >
            Get Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
