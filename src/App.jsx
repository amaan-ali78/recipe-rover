import { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";
import Nav from "./components/Nav";
import './app.css'

function App() {
  const [datas, setDatas] = useState([]);

  return (
    <div className="App">
      <Nav/>
      <Search datas={datas} setDatas={setDatas} />
      <List datas={datas}/>
    </div>
  );
}

export default App;
