import React from 'react'
import {addToCart}  from '../redux/action'
import {RemoveToCart}  from '../redux/action'
import {RemoveAllToCart}  from '../redux/action'

import { useDispatch } from 'react-redux';
const Main = () => {
  const dispatch=useDispatch();
  const product ={
    name:"I phone ",
    type:"mobile",
    price:10000,
    color:"red"
    
  }

  return (
    <div>
    
   <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
   <button onClick={()=>dispatch(RemoveToCart(product))}>Remove to Cart</button>
   <button onClick={()=>dispatch(RemoveAllToCart())}>RemoveAll to Cart</button>

    </div>
  )
}

export default Main