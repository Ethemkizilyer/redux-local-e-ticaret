import React, { useEffect } from "react";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";

import "./Header.css";
import { useSelector } from "react-redux";
import { cartclick, addtocart } from "./actions";
import { useDispatch } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.addtocart);
  const dispatch = useDispatch();
  console.log(cart);
  useEffect(() => {
    if (localStorage.getItem("cartitems") !== null) {
      const getitems = JSON.parse(localStorage.getItem("cartitems"));
      getitems.forEach((item) => {
        dispatch(addtocart(item));
      });
    }
  }, []);

  return (
    <div className="header">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="cart" onClick={() => dispatch(cartclick())}>
        <HiShoppingBag className="bagicon" />

        <div className="quantity">{cart?.length}</div>
      </div>
    </div>
  );
};

export default Header;
