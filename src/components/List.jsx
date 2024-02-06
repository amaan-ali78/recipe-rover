import Items from "./Items";

export default function List({ datas }) {
  return (
    <>
      {datas.map((data) => (
        <Items key={data.id} data={data}/>
      ))}
    </>
  );
}
