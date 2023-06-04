import React, {useState} from 'react';
import {Outlet} from "react-router-dom";

import './styles/reset.css'
import {createGlobalStyle} from "styled-components";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {darkTheme, lightTheme, theme} from "./styles/theme";
import {ThemeProvider} from "styled-components";
import {useRecoilValue} from "recoil";
import {isDarkAtom} from "./store";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap');

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GlobalStyle />
        <Outlet />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
