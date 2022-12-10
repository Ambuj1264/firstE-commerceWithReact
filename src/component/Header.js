import React from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
    const result=useSelector((state)=>state.cartData)
    console.log("redux data in header", result)
  return (

    <div className='header'>

        <div className="cart-div">
            <span>{result.length}</span>
            cart
        </div>
    </div>
  )
}

export default Header