import React from 'react'
import "./Cart.css"
import { addcart, deletefrombasket } from "./actions";
import uuid from "uuid"
import { useDispatch } from 'react-redux';

function Cart({id,imagesrc,Price,Product}) {
    const dispatch=useDispatch()
    const deletefromcart=(value)=> {
        dispatch(deletefrombasket(value))
    }
    const addtobasket =()=> {
        dispatch(addcart({id:uuid(),imagesrc,Product,Price}))
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