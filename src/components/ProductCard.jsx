import { useContext } from "react";
import { CartCtx } from "../context/cart-context";

/* eslint-disable react/prop-types */
const ProductCard = (props) => {
  const { getProduct, addToCart } = useContext(CartCtx);
  const cartProduct = getProduct(props.id);
  console.log(cartProduct);
  return (
    <article>
      <figure
        className={
          cartProduct ? "border-2 border-red rounded-xl overflow-hidden" : ""
        }
      >
        <img
          className=" w-full  aspect-square"
          src={props.image.desktop}
          alt=""
        />
      </figure>
      {cartProduct ? (
        <div></div>
      ) : (
        <button
          onClick={() => addToCart(props)}
          className="max-w-44 justify-center gap-2 text-rose-500 font-semibold py-2 w-full font-red-hat bg-white rounded-full flex items-center border border-rose-400 mx-auto -mt-5 relative z-50"
        >
          <img src="/images/icon-add-to-cart.svg" alt="" />
          <span>Add to Cart</span>
        </button>
      )}
      <p className="font-normal text-rose-300 text-xs mb-3">{props.category}</p>
      <p className="font-semibold text-rose-900 text-xl">{props.name}</p>
      <p className="text-red font-semibold text-xl">
        ${props.price.toFixed(2)}
      </p>
    </article>
  );
};

export default ProductCard;
