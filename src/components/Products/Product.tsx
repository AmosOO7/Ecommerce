import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ productName = "", imageSource = "" }) => {
  return (
    <Link to="/ProductList">
      <div className="product">
        <div className="product-image">
          {productName}
          <img></img>
        </div>
      </div>
    </Link>
  );
};

export default Product;
