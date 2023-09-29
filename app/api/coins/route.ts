import { NextResponse } from "next/server";


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


export async function GET(req:Request) {
    const coins = await fetchCoins()

    return NextResponse.json(coins)
    
}
