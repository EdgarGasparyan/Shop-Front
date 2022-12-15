import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/ttlogo.png";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

const Navigationbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const state = useSelector((state) => state.handleCart);

  const Login = () => {
    return (
      <NavLink to="/login" className="btn btn-outline-dark ms-2">
        <i className="fa fa-sign-in me-1"></i> Login
      </NavLink>
    );
  };
  const Register = () => {
    return (
      <NavLink to="/register" className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"></i> Register
      </NavLink>
    );
  };
  const MyAccaount = () => {
    return (
      <NavLink to="/useraccout" className="btn btn-outline-dark ms-2">
        <i className="fa fa-sign-in me-1"></i> My Account
      </NavLink>
    );
  };

  return (
    <>
      <>
        <Navbar
          bg="light"
          variant="light"
          sticky="top"
          expand="md"
          collapseOnSelect
        >
          <Navbar.Brand>
            <NavLink className="navbar-brand fw-bold fs-4" to="/">
              LOGO
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
              {isLogin ? (
                <MyAccaount />
              ) : (
                <>
                  <Login />
                  <Register />
                </>
              )}
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart(
                {state.length})
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    </>
  );
};

export default Navigationbar;
