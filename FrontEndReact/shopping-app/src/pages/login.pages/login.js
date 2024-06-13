import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGINLIST } from "../../loginDatabase/loginList";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

import "./login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [shippingAddress, setCustomerShippingAddress] = useState("");
  //const [isloggedIn, setIsloggedInt] = useState(-1);
  //const [cookies, setCookie] = useCookies(["user"]);

  //const [localJson, setLocalJson] = useState([]);

  const navigate = useNavigate();
  //let localJson = [];

  const { email, password } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleCookie = () => {
    Cookies.set("customerEmail", customerEmail, { path: "/" });
    Cookies.set("customerName", customerName, { path: "/" });
    Cookies.set("customerShippingAddress", shippingAddress, { path: "/" });
    Cookies.set("isLoggedIn", "true", { path: "/" });
    /*setCookie("customerEmail", customerEmail, { path: "/" });
    setCookie("customerName", customerName, { path: "/" });
    setCookie("isLoggedIn", "true", { path: "/" });*/
  };

  const handleSubmit = (e) => {
    //setLocalStorage();
    e.preventDefault();
    setFormErrors(validate(values));
    authentication(values);
    setIsSubmit(true);
  };

  /*useEffect(() => {
    // action on update of movies
    setLocalStorage();
    setLocalJson(localStorage.getItem("state")) ;
}, []);*/

  /*const setLocalStorage = () => {
    localStorage.setItem("state", JSON.stringify(LOGINLIST));
    //let data = localStorage.getItem("state");
    setLocalJson(localStorage.getItem("state")) ;
    console.log(localJson);
  
  };*/

  /*const getStateFromLocalStorage = () => {
    let data = setLocalJson(localStorage.getItem("state"))
    if (data === undefined) {
      saveStateToLocalStorage();
    }
  };*/

  const authentication = (values) => {
    {
      for (var i = 0; i < LOGINLIST.length; i++) {
        if (
          LOGINLIST[i].email === values.email &&
          LOGINLIST[i].password === values.password
        ) {
          <React.Fragment>
            <div className="ui message success">Signup successfully</div>
            <div style={{ display: "none" }}>
              {" "}
              {setCustomerName(LOGINLIST[i].name)}
              {setCustomerEmail(LOGINLIST[i].email)}
              {setCustomerShippingAddress(LOGINLIST[i].shippingAddress)}
              {setTimeout(() => navigate("/"), 1000)}
            </div>
          </React.Fragment>;
        }
      }

      /*LOGINLIST.map((user) =>
        user.email === values.email && user.password === values.password ? (
          <React.Fragment>
            <div className="ui message success">Signup successfully</div>
            <div style={{ display: "none" }}>
              {" "}
              {setCustomerName(user.name)}
              {setCustomerEmail(user.email)}
              {setTimeout(() => navigate("/"), 1500)}
            </div>
          </React.Fragment>
        ) : null
      );*/
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? handleCookie() : ""}
      {/*isloggedIn > 0 ? (
        <div className="ui message success">Signup unsuccess</div>
      ) : null*/}

      <form onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <div className="loginContainer">
          <div>
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
          <button className="submitButton">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
