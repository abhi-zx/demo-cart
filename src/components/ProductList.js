// src/components/ProductList.js
import React from 'react';
import "./ProductList.css"
const ProductList = ({ products, addToCart }) => {
  // console.log("products....",products)
  return (
    <div>
      <h2>Products</h2>
      <div className='prodcontainer'>
        {/* {console.log(products)} */}
        {products.map((product) => 
          {
            return (<div key={product.id}>
              <div className='imagecontainer'>
                <img src={product.images}></img>
              </div>
            {product.title} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          
          </div>)
 }
  )}
      </div>
    </div>
  );
};

export default ProductList;
