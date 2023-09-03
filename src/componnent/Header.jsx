import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const cartItem = useSelector((store)=>store.cart.products)

  const totalCartItem = cartItem.reduce((acc,curr)=>{
          const {itemQuantity} = curr
          acc += itemQuantity
          return acc
  },0)

  return (
    <header>
        <div className="container">
            <div className="leftBlock">
                <Link to='/'><h1>Logo</h1></Link>
            </div>
            <div className="rightBlock">
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart-{totalCartItem}</Link>
            </div>
        </div>
    </header>
  )
}

export default Header