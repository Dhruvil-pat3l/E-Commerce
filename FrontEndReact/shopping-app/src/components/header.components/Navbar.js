import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const authDestroy = () => {
    Cookies.remove("customerEmail");
    Cookies.remove("customerName");
    Cookies.remove("isLoggedIn");
    navigate("/");
    window.location.reload(true);
  };

  const userNavBar = () => {
    return (
      <div className="navbar">
        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/signup">Signup</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    );
  };

  const authNavBar = () => {
    return (
      <div className="navbar">
        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="" refresh="true">
            <button
              style={{}}
              onClick={() => {
                authDestroy();
              }}
            >
              Logout
            </button>
          </Link>

          <Link to="">Hello! {Cookies.get("customerName")}</Link>

          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    );
  };

  /*useEffect(() => {
    Cookies.get("isLoggedIn") === "true" ? authNavBar() : userNavBar();
  }, [Cookies.remove("isLoggedIn")]);*/

  return (
    <React.Fragment>
      {Cookies.get("isLoggedIn") === "true" ? authNavBar() : userNavBar()}
    </React.Fragment>
  );
};

export default Navbar;
