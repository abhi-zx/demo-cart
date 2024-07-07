// src/components/Cart.js
import React from 'react';
import "./Cart.css";
const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      
        {cartItems.map((item) => (
          <div className ="cartContainer"key={item.id}>
            <div className='cartImage'>
              <img src={item.images}></img>
            </div>
            <span>{item.title} </span>
             ${item.price} 
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            {item.quantity}
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
   
      <h3>
        Total: $
        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
};

export default Cart;
