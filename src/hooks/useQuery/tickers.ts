import {fetcher} from "../../utils/fetcher";
import {useQuery} from "@tanstack/react-query";
import {Historical, Price} from "../../typings/price";

export const fetchTickersAPI = async (coinId: string) => {
  return await fetcher(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
}
export const useTickers = (coinId: string) => {
  return useQuery<Price>(['priceInfo', coinId], () => fetchTickersAPI(coinId), {
    // staleTime: 1000 * 60 * 60,
    refetchInterval: 5000,
  })
}

export const fetchTickersOHLCVAPI = async (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - (60*60*24*7);

  // return await fetcher(`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`)
  return await fetcher(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
}
export const useTickersOHLCV = (coinId: string) => {
  return useQuery<Historical[]>(['priceInfo', coinId, 'ohlcv'], () => fetchTickersOHLCVAPI(coinId), {
    staleTime: 1000 * 60 * 60
  })
}