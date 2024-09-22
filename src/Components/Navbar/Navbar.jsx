import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import './Custom.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

function Navbar() {

    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>JustShop</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='./'className='shop-link'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link to='./mens'className='shop-link'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link to='./womens'className='shop-link'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='./kids'className='shop-link'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='./login'><button className="button-117" role="button">Login</button></Link>
        <Link to='./cart'><img src={cart_icon} alt="carticon" /></Link>
        
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
