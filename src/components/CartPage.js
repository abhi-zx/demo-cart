// src/components/CartPage.js
import React from 'react';
import Cart from './Cart';

const CartPage = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  return (
    <div>
      <h1>Cart</h1>
      <Cart
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default CartPage;
