import React from "react";
import Coin from "./Coin";

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
};

type Props = {
  coins: CoinProps[];
};

const CoinsList = ({ coins }: Props) => {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {coins.map((coin: CoinProps) => (
        <Coin key={coin.uuid} coin={coin} />
      ))}
    </div>
  );
};

export default CoinsList;
