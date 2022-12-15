import React, { useState, useEffect } from "react";
import styles from "./Modules/Login.module.css";

const Login = () => {
  const [errors, setErrors] = useState({
    emailvalid: true,
    passwordvalid: true,
  });
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  //  const inputs = [
  //    {
  //      id: 1,
  //      name: "email",
  //      type: "email",
  //      placeholder: "Email",
  //      errorMessage: "It should be a valid email address!",
  //      label: "Email",
  //      required: true,
  //    },

  //    {
  //      id: 2,
  //      name: "password",
  //      type: "password",
  //      placeholder: "Password",
  //      errorMessage:
  //        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  //      label: "Password",
  //      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  //      required: true,
  //    },
  //  ];

  const handleChange = (e) => {
	e.preventDefault()
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const Emailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.email) {
      setErrors({ emailvalid: false });
      //errors.emailvalid = false;
    } else if (!Emailvalid.test(values.email)) {
      setErrors({ emailvalid: false });
    }
    if (!values.password) {
      setErrors({ passwordvalid: false });
    } else if (values.password.length < 4) {
      setErrors({ passwordvalid: false });
    } else console.log("you are loged in");
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <>
      <div className={styles.login_container}>
        <div>
          <h1>Log In</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3" style={{ marginTop: "80px" }}>
            <input
              type="text"
              name="email"
              className={
                errors.emailvalid ? "form-control" : "form-control is-invalid"
              }
              placeholder="Enter email"
              aria-describedby="basic-addon2"
              value={values.email}
              onChange={handleChange}
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
            </span>
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              className={
                errors.passwordvalid
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Enter password"
              aria-describedby="basic-addon2"
              value={values.password}
              onChange={handleChange}
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
            </span>
          </div>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              className="btn btn-outline-dark me-4"
              style={{ width: 150 }}
              //  onClick={valid}
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
