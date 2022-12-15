import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action/index.js";
import { useDispatch } from "react-redux";
import styles from "./Modules/Cart.module.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const dispatch = useDispatch();

  const price = state.map((x) => x.qty * x.price).reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (price < 4000) {
      setDeliveryPrice(500);
    } else {
      setDeliveryPrice(300);
    }
  }, [price]);

  const total = price + deliveryPrice;

  const handleButton = (string, product) => {
    switch (string) {
      case "delCart":
        {
          return dispatch(delCart(product));
        }
        break;
      case "addCart":
        {
          return dispatch(addCart(product));
        }
        break;
      default:
        break;
    }
  };

  const productOrder = (total) => {
    console.log(state, total);
  };

  const EmpatyCart = () => {
    return (
      <>
        <div className="container-fluid  bg-danger p-2 bg-opacity-25 text-center mt-5">
          <h1 className="text-white "> Your Cart is Empty</h1>
        </div>
      </>
    );
  };

  return (
    <>
      {state.length ? (
        <div className="container-fluid d-flex justify-content-center flex-column ">
          {state.map((product) => {
            return (
              <div
                className="d-flex flex-row mt-3 bg-danger p-2 bg-opacity-25 justify-content-center "
                key={product.id}
              >
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{product.title}</h3>
                  <p className="lead fw-bold">
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price}
                  </p>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleButton("delCart", product)}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleButton("addCart", product)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            );
          })}
          <div className="d-flex flex-row mt-3 bg-danger p-2 bg-opacity-50 justify-content-center ">
            <div className="col-md-4">
              <div>
                <h3>Գումարային արժեք : {price}֏</h3>
              </div>
              <div>
                <h3>Առաքման վճարը : {deliveryPrice}֏</h3>
              </div>
              <div>
                <h2>Ընդհանուր արժեքը : {total}֏</h2>
              </div>
            </div>

            <button
              type="button"
              className=" btn btn-outline-dark btn-lg  "
              onClick={() => productOrder(total)}
            >
              <i className="fa fa-money fa-lg">
                <span className="fs-4 fw-bolder text-uppercase">Order</span>
              </i>
            </button>
          </div>
        </div>
      ) : (
        <EmpatyCart />
      )}
    </>
  );
};

export default Cart;
