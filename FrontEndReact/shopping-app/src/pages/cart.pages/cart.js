import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTSLIST } from "../../productList/productsList";
import CartItem from "./cartItem";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTSLIST.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>

          <Link
            to="/checkout"
            state={{
              from: { totalAmount },
            }}
          >
            <button>Checkout</button>
          </Link>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
