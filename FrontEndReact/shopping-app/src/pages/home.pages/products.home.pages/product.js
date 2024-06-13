import React, { useContext } from "react";
import { ShopContext } from "../../../context/shopContext";
import { Link } from 'react-router-dom';

import "../home.css";


const Product = (props) => {
  const { id, productName, price, productImage,description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img alt={productName} src={productImage} />
      <div className="description">
      
        <p >
          <b ><Link to='/single-product' className="textDeco" state={{ from: {productName,productImage,price,id,description} }}>{productName}</Link></b>
        </p>
        <p> ${price}</p>
        <p>
{description.substring(0, 50) }
        </p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};


export default Product
