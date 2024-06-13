import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/header.components/Navbar";
import Footer from "./components/footer.components/Footer";
import Home from "./pages/home.pages/home";
import Cart from "./pages/cart.pages/cart";
import Login from "./pages/login.pages/login";
import Signup from "./pages/signup.pages/signup";
import Singleproduct from "./pages/singleProduct.pages/singleproduct";
import { ShopContextProvider } from "./context/shopContext";
import  Checkout  from "./pages/checkout.pages/checkout";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/single-product" element={<Singleproduct />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
