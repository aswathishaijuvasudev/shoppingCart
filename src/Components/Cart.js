import React from 'react'
import './Cart.css';
export const Cart = ({cart,setCart}) => {

    function removeItem(id)
    {
       setCart(cart.filter((item) => item.id != id))
    }
  return (
    <div className="cartPage">
    {cart &&
      cart.map((item) => (
        <div key={item.id} className="cartItem row mb-3 align-items-center col-12">
          <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-xl-2 col-lg-2">
            <img src={item.image} className="cartImage img-fluid" alt={item.title} />
          </div>
          <div className="col-5 col-xs-5 col-sm-5 col-md-5 col-xl-5 col-lg-5 ">
            <p className="mb-0">{item.title}</p>
          </div>
          <div className="col-1 col-xs-1 col-sm-1 col-md-1 col-xl-1 col-lg-1">
            <p className="mb-0">${item.price}</p>
          </div>
          <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-xl-4 col-lg-4">
            <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
  </div>
);
  
}
