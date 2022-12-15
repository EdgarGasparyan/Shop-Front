import "./App.css";
import Navigationbar from "./component/Navigationbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import { Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import Login from "./component/Login";
import UserAccout from "./component/UserAccout";
import Register from "./component/Register";
import DeliveryTerms from "./component/DeliveryTerms";
import Footer from "./component/Footer";
import ConnectUs from "./component/ConnectUs";

const App = () => {
  return (
    <>
	 
      <div className="wrapper">
        <Navigationbar />
        <Routes>
          <Route exatc path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/useraccout" element={<UserAccout />} />
          <Route path="/deliveryTerms" element={<DeliveryTerms />} />
          <Route path="/connectUs" element={<ConnectUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
