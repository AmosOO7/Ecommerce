import React from "react";
import Product from "./Product";
import "./Product.css";

const ProductRow = ({ numbers = 0 }) => {
  return (
    <div className="product-row">
      <h1>Category</h1>
      {Array.from({ length: numbers }).map((_, index) => (
        <Product productName="Product" />
      ))}
    </div>
  );
};

export default ProductRow;
