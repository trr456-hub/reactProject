import { useEffect, useState } from "react";

function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  useEffect(() =>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
    setCoins(json)
    setLoading(false);
  });
  }, []) //빈 배열을 두면 한번만 실행 
    return (
    <div>
    <h1>코인시세({coins.length})</h1>
    <input type="text" placeholder="보유한 현금"/> <p/>
    { loading ?
    <strong>...로딩중</strong>
    :
    <select>
        { coins.map( (coin) =>
        <option key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>
        ) }
    </select>
    }

</div>
    )
}

export default App;
