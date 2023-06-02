import React from 'react';
import {useParams} from "react-router-dom";

interface Params {
  id: string
}

const Coin = () => {
  const { id: coinId } = useParams() as unknown as Params;
  console.log(coinId)

  return (
    <div>
      coin
    </div>
  );
};

export default Coin;