import {BrowserRouter, createBrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "./Root";
import NotFound from "../pages/NotFound";
import ErrorComponent from "../pages/ErrorComponent";
import User from "../pages/User";
import Followers from "../pages/users/Followers";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "users/:userId",
        // users 일때의 element가 없다면 이렇게 해도 되고
        // users와 users/:id의 element가 다르다면 다시 children으로 나눠주면 된다.
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />
          }
        ]
      },
    ],
    errorElement: <NotFound />,
    // errorElement: <ErrorComponent />

  }
])

export default router;