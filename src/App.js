import Button from "./Button";
import styled from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styled.title}>내가 돌아왔다!!!</h1>
      <Button text={"계속"}/>
    </div>
  );
}

export default App;
