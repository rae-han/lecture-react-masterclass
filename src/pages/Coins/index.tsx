import React, {useEffect, useState} from 'react';
import {CoinItem, CoinList, Container, Header, Title} from "./styles";
import {Link} from "react-router-dom";
import { Coin } from "../../typings/db";

const Coins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false)
    })();

  }, [])

  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      {loading
        ? ( <div>Loading...</div> )
        : (
          <CoinList>
            {coins.map((coin) => (
              <CoinItem key={coin.id}>

                <Link to={`/coin/${coin.id}`} state={{
                  name: coin.name,
                }}>
                  <img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.name} />
                  {coin.name}
                </Link>
              </CoinItem>
            ))}
          </CoinList>
        )
      }
    </Container>
  );
};

export default Coins;