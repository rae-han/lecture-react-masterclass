import React from 'react';
import {useOutletContext} from "react-router-dom";
import {useTickersOHLCV} from "../../hooks/useQuery/tickers";
import ApexChart from 'react-apexcharts';

interface OutletContext {
  coinId: string
}

const Chart = () => {
  const { coinId } = useOutletContext<OutletContext>();

  const { data, isLoading } = useTickersOHLCV(coinId)

  console.log(data)

  return (
    <>
      { isLoading
        ? <div>loading charts...</div>
        : (
          <ApexChart
            type="line"
            options={{
              theme: {
                mode: 'dark'
              },
              chart: {
                toolbar: {
                  show: false,
                },
                width: 500,
                height: 500,
                background: 'inherit'
              },
              grid: {
                show: false,
              },
              stroke: {
                curve: 'smooth',
                width: 4
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                labels: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                axisBorder: {
                  show: false,
                },
                type: 'datetime',
                categories: data?.map(value => value.time_close) ?? []
              },
              fill: {
                type: 'gradient',
                gradient: {
                  gradientToColors: ['blue'],
                  stops: [0, 100]
                },
              },
              colors: ['red'],
              tooltip: {
                y: {
                  formatter: (val: number, opts?: any) => (`$ ${val.toFixed(2)}`)
                }
              }
            }}
            series={[
              // {
              //   name: 'hello',
              //   data: [1, 2, 3, 4, 5, 6]
              // },
              {
                name: 'close price',
                data: data?.map(value => parseFloat(value.close)) ?? []
              }
            ]}
          ></ApexChart>
        )
      }
    </>
  );
};

export default Chart;