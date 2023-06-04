import React, {useEffect, useState} from 'react';
import {CoinItem, CoinList, Container, Header, Title} from "./styles";
import {Link} from "react-router-dom";
// import { Coin } from "../../typings/db";
import {useCoins} from "../../hooks/useQuery/coin";
import {useSetRecoilState} from "recoil";
import {isDarkAtom} from "../../store";

const Coins = () => {
  const { data: coins, isLoading } = useCoins()
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev);

  return (
    <Container>
      <Header>
        <Title>Coin</Title>
        <button onClick={toggleDarkAtom}>toggle theme</button>
      </Header>
      {isLoading
        ? ( <div>Loading...</div> )
        : (
          <CoinList>
            {coins?.map((coin) => (
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