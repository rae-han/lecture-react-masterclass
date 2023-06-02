import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/theme";
import {RouterProvider} from "react-router-dom";
import router from "./components/CreateBrowserRouter";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
