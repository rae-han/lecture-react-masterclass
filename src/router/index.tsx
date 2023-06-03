import { createBrowserRouter } from 'react-router-dom'

import App from "../App";

import Coin from "../pages/Coin";
import Coins from "../pages/Coins";
import Chart from "../components/Chart";
import Price from "../components/Price";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: "coins",
        element: <Coins />,
      },
      {
        path: "coin/:coinId",
        element: <Coin />,
        children: [
          {
            path: "",
            element: <Chart />
          },
          {
            path: "chart",
            element: <Chart />
          },
          {
            path: "price",
            element: <Price />
          }
        ]
      },
    ],
    // errorElement: <NotFound />,
  }
])

export default router;