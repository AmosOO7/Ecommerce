import HomePage from "./components/Pages/HomePage";
import Nav from "./components/NavBar/Nav";
import TopAds from "./components/AdsAndFooter/TopAds";
import ProductRow from "./components/Products/ProductRow";
import ProductList from "./components/Pages/ProductList";
import { Route, Router, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import ProductSingle from "./components/Pages/ProductsPage/ProductSingle";
import { ShopContextProvider } from "./components/Context/ShopContext";
const App = () => {
  return (
    <>
      <div className="container">
        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/ProductList" element={<ProductList />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/ProductDetails" element={<ProductSingle />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
