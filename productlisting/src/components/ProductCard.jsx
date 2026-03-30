import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
   <img
  src={product.image}
  alt={product.name}
  className="product-img"
/>

      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <div className="bottom">
        <span>{product.category}</span>
        <button onClick={() => addToCart(product)}>🛒 Add</button>
      </div>
    </div>
  );
};

export default ProductCard;