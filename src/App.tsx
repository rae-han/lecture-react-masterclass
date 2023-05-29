import React from 'react';
import './App.css';
import StyledComponentTS from "./components/StyledComponentTS";
import Forms from "./components/Forms";
import Theme from "./components/Theme";

function App() {
  return (
    <div className="App">
      {/*<StyledComponent />*/}
      <StyledComponentTS />
      <Forms />
      <Theme />
    </div>
  );
}

export default App;
