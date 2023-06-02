import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";

const ReactRouterV6 = () => {
  return (
    <BrowserRouter>
      <h1>React Router V6</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouterV6;