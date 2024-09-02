import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
export const Header = ({cart,setCart}) => {
  return (
    <>
    <div className="Header">
      <div className='logoHead'>
      <img src={logo} className="logo" alt="logo"/>
      <span>Shopping Cart</span>
      </div>
      <div className='contents'>
        <NavLink to="/"   >Home</NavLink>
        <NavLink to="cart">Cart:{cart.length}</NavLink>
      </div>
   
    </div>
    </>
  )
}
