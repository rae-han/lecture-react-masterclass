import { createBrowserRouter } from 'react-router-dom'

import App from "../App";
import TodoPage from "../components/Todo";
import ToDoHookFormPage from "../pages/ToDoHookForm";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <ToDoHookFormPage />
      },
    ],
    // errorElement: <NotFound />,
  }
])

export default router;