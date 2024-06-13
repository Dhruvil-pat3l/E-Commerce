import React from "react";
import "./checkout.css";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const Checkout = () => {
  const location = useLocation();
  const { from } = location.state;
  const { totalAmount } = from;

  const guestFunc = () => {
    return (
      <React.Fragment>
        <h2>Checkout</h2>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <h3>Shipping Address</h3>
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="name"
                      placeholder="John M. Doe"
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="email"
                      placeholder="john@example.com"
                    />
                    <label>Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="address"
                      placeholder="542 W. 15th Street"
                    />
                    <label htmlFor="city">
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="city"
                      name="city"
                      placeholder="New York"
                    />

                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          className="state"
                          placeholder="NY"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Zip</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          className="zip"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>

                    <label htmlFor="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      className="cardname"
                      placeholder="John More Doe"
                    />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      className="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label htmlFor="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      className="expmonth"
                      placeholder="September"
                    />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          className="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          className="cvv"
                          name="cvv"
                          placeholder="352"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-25">
                  <div className="container">
                    <p>
                      <b>Amount Before Tax: ${totalAmount}</b>
                    </p>
                    <p>
                      <b>Tax: ${totalAmount * 0.13}</b>
                    </p>
                    <p>
                      <b>Sub Total: ${totalAmount * 1.13}</b>
                    </p>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Continue to checkout"
                  className="btn"
                />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const regularUser = () => {
    return (
      <React.Fragment>
        <h2>Checkout</h2>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <div>
                      <p>Name: {Cookies.get("customerName")}</p>
                    </div>
                    <div>
                      <p>Email: {Cookies.get("customerEmail")}</p>
                    </div>
                    <div>
                      <p>
                        Shipping Address:{" "}
                        {Cookies.get("customerShippingAddress")}
                      </p>
                    </div>
                  </div>
                  <div className="col-50">
                    <h3>Payment</h3>

                    <label htmlFor="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      className="cardname"
                      placeholder="John More Doe"
                    />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      className="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label htmlFor="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      className="expmonth"
                      placeholder="September"
                    />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          className="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          className="cvv"
                          name="cvv"
                          placeholder="352"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-25">
                  <div className="container">
                    <p>
                      <b>Amount Before Tax: ${totalAmount}</b>
                    </p>
                    <p>
                      <b>Tax: ${totalAmount * 0.13}</b>
                    </p>
                    <p>
                      <b>Sub Total: ${totalAmount * 1.13}</b>
                    </p>
                  </div>
                </div>
                <input
                  type="submit"
                  onClick={()=>{}}
                  value="Continue to checkout"
                  className="btn"
                />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {Cookies.get("isLoggedIn") === "true" ? regularUser() : guestFunc()}
    </React.Fragment>
  );
};

export default Checkout;
