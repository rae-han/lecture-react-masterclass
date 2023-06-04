import {QueryFunctionContext, useQuery} from "@tanstack/react-query";
import {Coin} from "../../typings/db";
import {fetcher} from "../../utils/fetcher";
import {CoinInfo} from "../../typings/coin";

export const fetchCoinsAPI = async () => {
  console.log(3333)
  return await fetcher(`https://api.coinpaprika.com/v1/coins`).then(data => data.slice(0, 64));
}
export const useCoins = () => {
  return useQuery<Coin[]>(['coins'], fetchCoinsAPI, {
    staleTime: 1000 * 60 * 60
  })
}

export const fetchCoinAPI = ({queryKey}: QueryFunctionContext) => {
  const [_, coinId] = queryKey;
  return fetcher(`https://api.coinpaprika.com/v1/coins/${coinId}`)
}
export const useCoin = (coinId: string) => {
  return useQuery<CoinInfo>(['coinInfo', coinId], fetchCoinAPI, {
    staleTime: 1000 * 60 * 60
  })
}