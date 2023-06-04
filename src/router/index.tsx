import { createBrowserRouter } from 'react-router-dom'

import App from "../App";
import TodoPage from "../pages/Todo";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <TodoPage />
      },
    ],
    // errorElement: <NotFound />,
  }
])

export default router;