import { useEffect } from "react";
import { useState } from "react";
import style from "./search.module.css"
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6767e4169d4e4033a2a0cad619a58396";
export default function Search({datas,setDatas}) {
  const [query, setQuery] = useState("Pizza");
  useEffect(
    function () {
      async function fetcher() {
       const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
       const result =await res.json();
       setDatas(result.results);
      }
      fetcher();
    },
    [query]
  );
  return (
    <div className={style.container}>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        value={query}
      />
    </div>
  );
}
