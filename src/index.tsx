import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";

const darkMode = {
  textColor: 'whitesmoke',
  backgroundColor: '#111',
}

const lightMode = {
  textColor: '#111',
  backgroundColor: 'whitesmoke',
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkMode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
