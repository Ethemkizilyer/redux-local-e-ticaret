import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import uuid from "uuid";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
