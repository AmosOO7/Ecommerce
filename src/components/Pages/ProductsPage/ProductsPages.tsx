import React, { useContext, useState } from "react";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const ProductsPages = (props: any) => {
  const { key, ProductName, Price, ProductImage } = props.data;
  const { addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="row2">
      <Link to="/ProductDetails">
        <div className="row">
          <div className="image">Image</div>
          <div className="details">
            <p>Item: {ProductName}</p>
            <p>
              Price:${Price}
              <p></p>
            </p>
          </div>
        </div>
      </Link>
      <div>
        <button className="page-button" onClick={() => addToCart}>
          Add
        </button>
        <button className="page-button" onClick={() => removeFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductsPages;
