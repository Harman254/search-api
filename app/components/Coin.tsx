import React from 'react'
import Image  from 'next/image'
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
type Props = {
    coin: CoinProps
}

const Coin = ({ coin }: Props) => {
    return (
      <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-md">
        <Image src={coin.iconUrl} alt="coin" width={50} height={50} priority/>
        <ul>
          <li className="text-lg font-semibold">{coin.name}</li>
          <li className="text-gray-600">{coin.symbol}</li>
          <li className="text-gray-600">UUID: {coin.uuid}</li>
          <li className="text-purple-500">Color: {coin.color}</li>
          <li className="text-gray-600">Market Cap: {coin.marketCap}</li>
          <li className="text-green-500">Price: {coin.price}</li>
          <li className="text-blue-500">BTC Price: {coin.btcPrice}</li>
        </ul>
      </div>
    );
  };
  
  export default Coin;
  