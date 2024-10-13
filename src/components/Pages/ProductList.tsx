import React from "react";
import Product from "../Products/Product";
import ProductsPages from "./ProductsPage/ProductsPages";
import TopAds from "../AdsAndFooter/TopAds";
import Footer from "../AdsAndFooter/Footer";
import "./ProductList.css";
import { PRODUCTS } from "../../components/ProductData";

const ProductList = () => {
  return (
    <div className="top-Wrapper-product">
      <div className="Wrapper-product">
        <TopAds />
        <div>
          {PRODUCTS.map((product) => (
            <ProductsPages data={product} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
