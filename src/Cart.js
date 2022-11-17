import React from 'react'
import "./Cart.css"
import { addtocart, deletefrombasket } from "./actions";
import {v4 as uuidv4} from "uuid"
import { useDispatch } from 'react-redux';

function Cart({id,imagesrc,Price,Product}) {
    const dispatch=useDispatch()
    const deletefromcart=(value)=> {
        dispatch(deletefrombasket(value))
    }
    const addtobasket =()=> {
        dispatch(addtocart({ id: uuidv4(), imagesrc, Product, Price }));
    }
  return (
    <div>
        <div className="cartitem" idofitem={id} >
<img src={imagesrc} alt="" />
<div className="productdetails">
    <h3>{Product}</h3>
    <p>{Price} TL.</p></div>
    <div className="cartbuttons">
        <button onClick={()=>addtobasket()}>ADD TO BASKET</button>
        <button onClick={()=> deletefromcart(id)} >DELETE</button>
    </div>
        </div>
    </div>
  )
}

export default Cart