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
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  deleteFromCart: () => {},
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
  const increaseQuantity = (id) => {
    const updatedProduct = [...items];
    const product = updatedProduct.find((product) => product.id === id);
    if (!product) return;
    product.quantity += 1;
    // product.quantity = product.quantity+1
    setItem(updatedProduct);
  };
  const deleteFromCart = (id) => {
    setItem((prev) => prev.filter((product) => product.id !== id));
  };
  const decreaseQuantity = (id) => {
    const updatedProduct = [...items];
    const product = updatedProduct.find((product) => product.id === id);
    if (!product) return;
    if (product.quantity === 1) {
      deleteFromCart(id);
      return;
    }
    product.quantity -= 1;
    // product.quantity = product.quantity+1
    setItem(updatedProduct);
  };
  return (
    <CartCtx.Provider
      value={{
        items,
        addToCart,
        getProduct,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};
