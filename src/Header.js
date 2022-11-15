import React, { useEffect } from 'react'
import {ShoppingBagIcon} from "@heroicons/react/solid"
import "./Header.css"
import {useSelector} from "react-redux"
import {cartclick,addcart} from "./actions"
import {useDispatch} from "react-redux"

const Header = () => {
    const cart= useSelector(state=>state.addcart)
    const dispatch=useDispatch()
    useEffect(()=> {
        if (localStorage.getItem("cartitems")!==null){
            const getitems= JSON.parse(localStorage.getItem("cartitems"))
            getitems.forEach(item => {
                dispatch(addcart(item))
            });
        }
    },[])
    
  return (
    <div className='header'>
        <div className="search">
            <input type="text" placeholder='Search...'/>
            <button>Search</button>
        </div>
        <div className="cart" onClick={()=>dispatch(cartclick())}><ShoppingBagIcon className="bagicon"/> <div className="quantity">{cart.length}</div></div>
    </div>
  )
}

export default Header