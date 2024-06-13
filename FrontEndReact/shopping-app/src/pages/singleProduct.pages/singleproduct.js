import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { useLocation } from "react-router-dom";
import "./singleProduct.css";
import Comments from "../../components/comments.components/comments";

const Singleproduct = () => {
  const location = useLocation();
  const { from } = location.state;
  const { productName, productImage, price, id, description } = from;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="singleproduct">
      <img alt={productName} src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <p>{description}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>

      <Comments/>
    </div>
  );
};

export default Singleproduct;
