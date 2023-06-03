import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useMatch, useMatches, useParams} from "react-router-dom";
import {CoinInfo} from "../../typings/coin";
import {Price} from "../../typings/price";

interface Params {
  coinId: string
}

interface Location {
  state: {
    name: string
  }
}

// RouteParams RouteState

const Coin = () => {
  const { coinId } = useParams() as unknown as Params;
  console.log(coinId)
  const { state } = useLocation() as unknown as Location;
  // const matches = useMatches();
  const match = useMatch('/coin/:coinId/chart')
  const [coinInfo, setCoinInfo] = useState<CoinInfo>();
  const [priceInfo, setPriceInfo] = useState<Price>();
  const [isLoading, setIsLoading] = useState(true)

  // console.log(matches)
  console.log({match})
  console.log(match)

  useEffect(() => {
    (async () => {
      const coinData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      console.log(coinData)
      setCoinInfo(coinData)

      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
      console.log(priceData)
      setPriceInfo(priceData)

      setIsLoading(false);
    })();
  }, [coinId])

  // const onLinkClick = () => {
  //   router.replace()
  // }

  return (
    <div>
      { isLoading
        ? (<div>loading...</div>)
        : (
          <div>
            <h1>{state?.name ? state.name : coinInfo?.name}</h1>
            <ul>
              <li><Link to={'chart'} replace={true}>Chart</Link></li>
              <li><Link to={'price'} replace={true}>Price</Link></li>
            </ul>
            <Outlet />
          </div>
        )
      }

    </div>
  );
};

export default Coin;