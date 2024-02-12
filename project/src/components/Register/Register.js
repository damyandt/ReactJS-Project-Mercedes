import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );

  return (
    <div>


      <div className="cardContainer">
        <form id="register" method="POST" onSubmit={onSubmit}>

          <h5 className="loginH">
            Sign into your account
          </h5>
          <div className="userInputs">

            <input
              type="email"
              id="email"
              name="email"
              placeholder="maria@email.com"
              value={values.email}
              onChange={changeHandler}
            />
          </div>

          <div className="userInputs">

            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
              value={values.password}
              onChange={changeHandler}
            />
          </div>
          <div className="userInputs">

            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={changeHandler}
            />
          </div>

          <div className="loginbtn" >
            <input
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              value="Register"
            />
          </div>
          <p className="haveAcc" >
            You already have an account?
            <Link to="/login">
              Login hier
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};