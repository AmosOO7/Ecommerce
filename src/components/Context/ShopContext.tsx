import React, { createContext, useState } from "react";
import { PRODUCTS } from "../ProductData";

const getDefaultCart = () => {
  let cart: any = {};
  for (let i = 1; 1 < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContext = createContext<any>({});

export const ShopContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: any) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: any) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
