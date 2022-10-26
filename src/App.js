import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(prev => prev + 1);
  console.log("호출");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default App;
