import React from 'react'
import 'Products.css'
import {addcart} from "./actions"
import {useDispatch,useSelector} from "react-redux"
const Additemincart=()=> {
    dispatch(addcart({id,imagesrc,Product,Price}))
}

const Product = ({id,imagesrc,Product,Price}) => {
    const dispatch= useDispatch()
  return (
    <div className="product">
        <img src={imagesrc} alt="" />
        <h3>{Product}</h3>
        <p>{Price} TL.</p>
        <button onClick={()=>Additemincart()}>Add to Basket</button>
    </div>
  )
}

export default Product