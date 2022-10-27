import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(prev => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("나는 한번만 실행돼요");
  }, []);
  useEffect(() => {
    console.log("나는 키워드가 변화할 때 실행되요.")
  }, [keyword]);
  useEffect(() => {
    console.log("나는 카운터가 변화할 때 실행되요.")
  }, [counter]);
  useEffect(() => {
    console.log("키워드가 변화합니다. & 카운터가 변화합니다.")
  }, [keyword,counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="검색" />
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default App;
