"use client"
import { useEffect, useState } from "react";
import CoinsList from "./components/CoinsList";
import SearchCoins from "./components/SearchCoins";
export default function Home() {
const [coins, setCoins] = useState([])

useEffect(() => {
  const getCoins = async () => {
    const res = await fetch("/api/coins")
     const coins =await res.json()
     setCoins(coins.data.coins)
  }

  getCoins()
}, [])
console.log(coins)
  return <div className="container flex flex-col justify-center items-center">
    <h1 className="font-bold text-4xl bg-gradient-to-r from-purple-500 to-indigo-400 m-4 bg-clip-text text-transparent">Trending Crypto Coins</h1>
      <SearchCoins getSearchResults={(results: any) => setCoins(results)}/>
    <CoinsList coins={coins}/>
  </div>;
}
