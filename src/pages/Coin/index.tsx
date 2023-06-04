import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useMatch, useMatches, useParams} from "react-router-dom";
import {CoinInfo} from "../../typings/coin";
import {Price} from "../../typings/price";
import {useCoin} from "../../hooks/useQuery/coin";
import {useTickers} from "../../hooks/useQuery/tickers";

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
  const { state } = useLocation() as unknown as Location;
  // const matches = useMatches();
  const match = useMatch('/coin/:coinId/chart')

  const { data: coinInfo, isLoading: coinInfoLoading } = useCoin(coinId);
  const { data: priceInfo, isLoading: priceInfoLoading } = useTickers(coinId);

  // console.log(matches)
  console.log({match})

  const isLoading = coinInfoLoading || priceInfoLoading;

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
            <Outlet context={{ coinId }} />
          </div>
        )
      }

    </div>
  );
};

export default Coin;