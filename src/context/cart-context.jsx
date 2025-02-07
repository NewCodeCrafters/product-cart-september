/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartCtx = createContext({
  items: [
    {
      id: 1,
      price: 0,
      name: "",
      quantity: 0,
    },
  ],
  addToCart: () => {},
  getProduct: () => {},
});

export const CartProvider = ({ children }) => {
  const [items, setItem] = useState([]);
  const addToCart = (product) => {
    setItem((prev) => [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
  const getProduct = (id) => {
    const product = items.find((product) => product.id === id);
    return product;
  };
  return (
    <CartCtx.Provider
      value={{
        items,
        addToCart,
        getProduct,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};
