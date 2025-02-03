import ProductCard from "./ProductCard";
import products from "../data.json";
const ProductsContainer = () => {
  console.log(products);
  return (
    <div className="col-span-2 grid gap-4 grid-cols-3">
      {products.map((val, index) => (
        <ProductCard key={index} {...val} />
      ))}
    </div>
  );
};

export default ProductsContainer;
