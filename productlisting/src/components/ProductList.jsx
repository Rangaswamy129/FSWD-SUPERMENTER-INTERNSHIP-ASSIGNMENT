import React from "react";
import ProductCard from "./ProductCard";


const ProductList = ({ products, addToCart, search }) => {
  return (
    <div className="grid">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          addToCart={addToCart}
          search={search}
        />
      ))}
    </div>
  );
};

export default ProductList;