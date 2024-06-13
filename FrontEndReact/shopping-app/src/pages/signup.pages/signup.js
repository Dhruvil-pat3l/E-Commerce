import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { LOGINLIST } from "../../loginDatabase/loginList";
import axios from 'axios';

import "./signup.css";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    shippingAddress: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const state = {
    data: "This is data",
    num: 123,
    boolean: true,
  };

  const { name, email, password, shippingAddress } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
    saveStateToLocalStorage();
    saveStateToDatabase();
  };

  const saveStateToLocalStorage = () => {
    LOGINLIST.push(state);
    //fs.writeFile(LOGINLIST);

    //localStorage.setItem('state', JSON.stringify(LOGINLIST));
  };

  const saveStateToDatabase = () => {
    LOGINLIST.push(state);

  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 6) {
      errors.password = "Password must be more than 6 characters";
    }

    if (!values.shippingAddress) {
      errors.shippingAddress = "Shipping Address is required!";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <React.Fragment>
          <div style={{ display: "none" }}>
            {" "}
            {setTimeout(() => navigate("/login"), 2000)}
          </div>
          <div className="alert">
            <strong>Signup successfully</strong> 
          </div>
        </React.Fragment>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="signupContainer">
          <div>
            <label>Name</label>
            <input
              className="name"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange("name")}
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="field">
            <label>Email</label>
            <input
              className="email"
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange("email")}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange("password")}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <label>Shipping Address</label>
            <input
              className="shippingAddress"
              type="text"
              name="shippingAddress"
              placeholder="Shipping Address"
              value={shippingAddress}
              onChange={handleChange("shippingAddress")}
            />
          </div>
          <p>{formErrors.shippingAddress}</p>
          <button className="submitButton">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
