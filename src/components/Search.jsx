import { useEffect } from "react";
import { useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "14665f0fa2e440c39e64255aba02f4c0";
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
    <div>
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
