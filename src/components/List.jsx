import Items from "./Items";

export default function List({ datas , setFoodId }) {
  return (
    <>
      {datas.map((data) => (
        <Items key={data.id} setFoodId={setFoodId}  data={data}/>
      ))}
    </>
  );
}
