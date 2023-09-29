import { NextResponse } from "next/server";
type CoinProps = {
    uuid: string;
    symbol: string;
    name: string;
    color: string;
    iconUrl: string;
    marketCap: string;
    price: string;
    btcPrice: string;
    listedAt: number;
    change: string;
    rank: number;
  }

const fetchCoins = async() => {
    const apiKey = process.env.RAPID_API_KEY!
    const res = await fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": 'coinranking1.p.rapidapi.com'
        },
    });

    const coins = await res.json()

    return coins

    
}


export async function GET (req:Request) {
    const coins = await fetchCoins();

    const { searchParams } = new URL(req.url)
    console.log(req.url)
    const query = searchParams.get("query")
        if (typeof query !== "string")  throw new Error("Query is not a string")
    
            const filtredCoins = coins.data.coins.filter((coin: CoinProps ) => {
            return coin.name.toLowerCase().includes(query?.toLowerCase()) || coin.symbol.toLowerCase().includes(query?.toLowerCase())
    
        })
    
    return NextResponse.json(filtredCoins)
}
