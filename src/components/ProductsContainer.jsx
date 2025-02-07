import ProductCard from "./ProductCard";
import products from "../data.json";
import { useContext } from "react";
import { CartCtx } from "../context/cart-context";
const ProductsContainer = () => {
  const cartState = useContext(CartCtx);
  console.log(cartState);
  return (
    <div className="col-span-2 grid gap-4 grid-cols-3">
      {products.map((val, index) => (
        <ProductCard key={index} {...val} id={index} />
      ))}
    </div>
  );
};

export default ProductsContainer;
