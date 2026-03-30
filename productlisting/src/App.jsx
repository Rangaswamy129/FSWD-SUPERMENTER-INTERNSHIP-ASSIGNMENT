import React, { useState } from "react";
import productsData from "./data/products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home"); // 🔥 NEW

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  const filteredProducts = productsData.filter((product) => {
    return (
      (category === "" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const removeFromCart = (indexToRemove) => {
  const updatedCart = cart.filter((_, index) => index !== indexToRemove);
  setCart(updatedCart);
};

  return (
    <div className="app">

      {/* HEADER */}
      <div className="header">
        <h1 onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          🛍️ ShopEase
        </h1>

        <div className="cart-icon" onClick={() => setPage("cart")}>
          🛒 <span>{cart.length}</span>
        </div>
      </div>

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <Filter setCategory={setCategory} setSearch={setSearch} />

          <ProductList 
            products={filteredProducts} 
            addToCart={addToCart}
          />
        </>
      )}

      {/* CART PAGE */}
      {page === "cart" && (
        <div className="cart-page">
          <button onClick={() => setPage("home")}>⬅ Back</button>

          <h2>🛒 Your Cart</h2>

          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
  <div key={index} className="cart-item">
    <img src={item.image} alt={item.name} />

    <div className="cart-details">
      <p>{item.name}</p>
      <p>₹{item.price}</p>
    </div>

    <button
      className="remove-btn"
      onClick={() => removeFromCart(index)}
    >
      Remove 
    </button>
  </div>
))}
              <h3>
                Total: ₹
                {cart.reduce((sum, item) => sum + item.price, 0)}
              </h3>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;