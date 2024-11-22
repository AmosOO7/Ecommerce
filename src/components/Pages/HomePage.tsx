import React from "react";
import TopAds from "../AdsAndFooter/TopAds";
import ProductRow from "../Products/ProductRow";
import Footer from "../AdsAndFooter/Footer";

const HomePage = () => {
  return (
    <div>
      <TopAds />
      <ProductRow numbers={5} />
      <ProductRow numbers={5} />
      <ProductRow numbers={5} />
      <ProductRow numbers={5} />
      <Footer />
    </div>
  );
};

export default HomePage;
