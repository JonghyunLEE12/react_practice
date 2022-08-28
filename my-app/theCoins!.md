```react-native
import React, { useState , useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setConins] = useState([])


  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setConins(json)
      setLoading(false)
    })
  })

  return <div>
    <h1>The Coins! { loading ? "" : `(${coins.length})`}</h1>
    { loading ? <strong>loading...</strong> : (
    <select>
      {coins.map((coin) => 
      <option>{coin.name} ({coin.symbol}) : {coin.quotes['USD'].price} USD</option>
      )}
    </select>
    ) }
  </div>
}
export default App;


```