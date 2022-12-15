import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-dark bg-gradient  text-muted align-items-end footer">
        <div className="container p-4">
          <div className="row d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-pink">Բաժիններ</h5>
              <ul className="list-unstyled mb-0 mt-4">
                <li>
                  <NavLink
                    className="text-white nav-link "
                    aria-current="page"
                    to="/"
                  >
                    Գլխավոր
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white nav-link "
                    aria-current="page"
                    to="/about"
                  >
                    Example.am - ի մասին
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-pink ">Հղումներ</h5>
              <ul className="list-unstyled mb-0 mt-4">
                <li>
                  <NavLink
                    className="text-white nav-link "
                    aria-current="page"
                    to="/connectUs"
                  >
                    Կապ մեզ հետ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white nav-link"
                    aria-current="page"
                    to="/deliveryTerms"
                  >
                    Առաքման պայմանաններ
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-pink ">Հետադարձ կապ</h5>
              <ul className="list-unstyled mb-0 mt-4">
                <li>
                  <p className="text-white mb-0">
                    <i className="fa fa-phone fa-lg"></i> +374 00000000
                  </p>
                  <p className="text-white mb-0">
                    <i className="fa fa-phone fa-lg"></i> +374 00000000
                  </p>
                </li>
                <li>
                  <p className="text-white">
                    <i className="fa fa-envelope-o fa-lg"></i> example@gmail.com
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-pink ">
                Հետևեք մեզ սոց․ ցանցերում
              </h5>
              <ul className="list-unstyled mb-0 d-flex mt-4">
                <li>
					 <NavLink className="" aria-current="page" to="#!">
                    <button type="button" className="btn btn-outline-light ">
						  <i className="fa fa-facebook-square fa-lg"></i>
                    </button >
                  </NavLink>
                  {/*<a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fa fa-facebook-square fa-lg"></i>
                  </a>*/}
                </li>
                <li>
                  <NavLink className="" aria-current="page" to="#!">
                    <button type="button" className="btn btn-outline-light">
                      <i className="fa fa-instagram fa-lg"></i>
                    </button>
                  </NavLink>
                  {/*<a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fa fa-instagram fa-lg"></i>
                  </a>*/}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-4">
          <p className="text-white">
            {" "}
            © 2021 All rights reserved.: By example.am
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
