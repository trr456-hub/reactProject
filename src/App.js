import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [need, setNeed] = useState(1);

  const numOne = document.getElementsByTagName("option")[0];
  console.log("option의 첫번째 index값 : ",numOne);

  const onChange = (event) => {
    const nnn = event.target.value;
    setCost(nnn);
    console.log("온체인지 : ",nnn);
  };
  const handleInput = (event) => {
    setNeed(event.target.value);
    console.log("핸들인풋 : ",event.target.value);
  };
  //console.log(need);
  //console.log(cost);
  //console.log(handleInput);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //빈 배열을 두면 한번만 실행
  return (
    <div>
      <h1>코인시세({coins.length})</h1>
      {loading ? (
        <strong>...로딩중</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option
              key={coin.id}
              value={coin.quotes.USD.price}
            >
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <input
          onChange={handleInput}
          value={need}
          type="number"
          placeholder="보유한 현금"
        />
        <h2>변환된 가격 : {need / cost}</h2>
      </div>
    </div>
  );
}

export default App;
