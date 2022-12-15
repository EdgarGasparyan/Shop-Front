import React from "react";
import styles from "./Modules/Register.module.css";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
   // console.log(data);
    reset();
  };

  return (
    <>
      <div className={styles.register_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Գրանցվել</h1>
          </div>
          <div className="input-group mb-3" style={{ marginTop: "10px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              {...register("firstName", {
                required: "Դաշտը պարտադիր է լրացանել",
                minLength: {
                  value: 3,
                  message: "Մինիմում 3 տառ",
                },
                maxLength: {
                  value: 80,
                },
              })}
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa fa-user fa-lg" aria-hidden="true"></i>
            </span>
          </div>
          <div>
            {errors?.firstName && (
              <p style={{ color: "red" }}> {errors.firstName?.message} </p>
            )}
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              {...register("Email", {
                required: "Դաշտը պարտադիր է լրացանել",
                min: 4,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Պետք է պարունակի @ սինվոլը",
                },
              })}
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
            </span>
          </div>
          <div>
            {errors?.Email && (
              <p style={{ color: "red" }}> {errors.Email?.message} </p>
            )}
          </div>

          <div className="input-group mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile number"
              {...register("MobileNumber", {
                required: "Դաշտը պարտադիր է լրացանել",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Լրացնել միայն թվանշաներ",
                },
                minLength: {
                  value: 8,
                  message: "Մինիմում 8 թվանշան",
                },
                maxLength: {
                  value: 11,
                  message: "Հեռախոսահամրը շատ երկար է ",
                },
              })}
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
            </span>
          </div>
          <div>
            {errors?.MobileNumber && (
              <p style={{ color: "red" }}> {errors.MobileNumber?.message} </p>
            )}
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Address"
              {...register("EnterYourAddress", {
                required: "Դաշտը պարտադիր է լրացանել",
                minLength: {
                  value: 4,
                  message: "Դաշտը պարտադիր է լրացանել",
                },
              })}
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa fa-home fa-lg" aria-hidden="true"></i>
            </span>
          </div>
          <div>
            {errors?.EnterYourAddress && (
              <p style={{ color: "red" }}>{errors.EnterYourAddress?.message}</p>
            )}
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("Password", {
                required: "Դաշտը պարտադիր է լրացանել",
                minLength: {
                  value: 4,
                  message: "Մինիմում 4 սիմվոլ",
                },
              })}
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
            </span>
          </div>
          <div>
            {errors?.Password && (
              <p style={{ color: "red" }}> {errors.Password?.message} </p>
            )}
          </div>
          {/*<div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Repeat password"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
            </span>
          </div>*/}

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
				  type="submit"
            >
				<strong>Գրանցվել	</strong>	
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
