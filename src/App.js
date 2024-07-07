// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import Header from './components/Header';
import "./App.css"
const App = () => {
  const getProductData = async () => {
    const data = await fetch(`https://dummyjson.com/products?limit=100`)
    const productData = await data.json()
    // console.log(product)
    setProducts(productData.products)
  }

  useEffect(() => {
    getProductData()
  }, [])


  const [products,setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct.quantity === 1) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Header cartItems={cart} className="header" />
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Shopping Cart</h1>
            <ProductList products={products} addToCart={addToCart} />
          </div>
        } />
        <Route path="/cart" element={
          <CartPage
            cartItems={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        } />
      </Routes>
    </Router>
  );
};

export default App;
