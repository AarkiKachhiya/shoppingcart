// App.js
import React, { useState } from "react";
import Product from './Product'
import Cart from './Cart'

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

function App(props) {
  const [cartItems, setCartItems] = useState([]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(currentCart => [...currentCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(currentCart => currentCart.filter(product => product !== productToRemove));
  };


  const addProductToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  return (
    <div className="App">

      <h1>Products</h1>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
      <h1>Cart</h1>
      {cart.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}

      <Product name="iPhone 13" onClick={() => addProductToCart("iPhone 13")} />
      <Cart items={cartItems} />

      <Product name="Product 1" onClick={() => addProductToCart("Product 1")} />
      <Cart items={cartItems} />

    </div>
  );
}


export default App;