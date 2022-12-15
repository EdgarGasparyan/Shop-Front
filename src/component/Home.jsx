import React from "react";
import Products from "./Products";
import BGIMG from "../assets/bg.jpg";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src={BGIMG}
            className="card-img"
            alt="Background"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title dosplay-3 fw-bold mb-0">
                NEW COLLECTION...
              </h5>
              <p className="card-text lead fs-2">new collection...</p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
