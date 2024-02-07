import { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Details from "./components/Details";

function App() {
  const [datas, setDatas] = useState([]);
  const [foodId,setFoodId]=useState("656329");
  const [recipe,setRecipe]=useState();

  return (
    <div className="App">
      <Nav />
      <Search datas={datas} setDatas={setDatas} />
      <Container>
        <InnerContainer>
        <List setFoodId={setFoodId} datas={datas} />
        </InnerContainer>
        <InnerContainer>
          <Details recipe={recipe} setRecipe={setRecipe} foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
