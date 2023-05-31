import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
    {/*  헤더를 여기 넣은 이유는 Router 밖에서 Link를 render 할수 없다.*/}
    </BrowserRouter>
  )
}

export default Router;