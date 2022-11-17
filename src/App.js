import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Product from "./Products";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";


function App() {
  const [items,setitems]= useState([])
  const [cartitems, setcartitems] = useState([]);
  let selectcart= useSelector(state=>state.cartclick)
  let cart = useSelector(state=>state.addtocart)

  useEffect(()=>{
    // localStorage.clear()
const getdata= async()=> {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json()
  setitems(result);
}
getdata()
setcartitems(cart)
  },[cart,cartitems])
  
  return (
    <div>

      <Header />
      {selectcart ? (cartitems.length>0 ? cartitems.map(item=>(<Cart id={item.id} key={item.id} imagesrc={item.imagesrc} Product={item.Product} Price={item.Price}/>)) : <h1 className="emptycart">NO ANT ITEM IN CART</h1>): (<div className="products">{items.map(item=>(<Product id={uuidv4()} key={item.id} imagesrc={item.image} Product={item.title} Price={item.price}/>))}</div>) }
    </div>
  );
}

export default App;
