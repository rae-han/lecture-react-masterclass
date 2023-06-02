import { createBrowserRouter } from 'react-router-dom'

import App from "../App";

import Coin from "../pages/Coin";
import Coins from "../pages/Coins";

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
        path: "coin/:id",
        element: <Coin />
      },
    ],
    // errorElement: <NotFound />,
  }
])

export default router;