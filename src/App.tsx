import React from 'react';
import './App.css';
import StyledComponentTS from "./components/StyledComponentTS";
import Forms from "./components/Forms";
import Theme from "./components/Theme";
import ReactRouterV6 from "./components/ReactRouterV6";

function App() {
  return (
    <div className="App">
      {/*<StyledComponent />*/}
      <StyledComponentTS />
      <Forms />
      <Theme />
      <ReactRouterV6 />
    </div>
  );
}

export default App;
