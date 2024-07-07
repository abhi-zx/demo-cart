// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({cartItemCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
