import React from "react";
import { PRODUCTSLIST } from "../../productList/productsList";
import Product from "./products.home.pages/product";
import "./home.css";

const Home = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Mark's Shop</h1>
      </div>

      <div className="products">
        {PRODUCTSLIST.map((product) => (
          <div key={product.id}>
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
