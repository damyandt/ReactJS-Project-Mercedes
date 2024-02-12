import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const Login = (
  {
    //auth
  }
) => {
  //const { onLoginSubmit } = auth;
  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );

  return (
    <div>
      <div className="cardContainer">
        <form id="login" method="POST" onSubmit={onSubmit}>


          <h5 className="loginH" >
            Sign into your account
          </h5>

          <div className="userInputs">

            <input
              type="email"
              id="email"
              placeholder="Sokka@gmail.com"
              name={LoginFormKeys.Email}
              value={values[LoginFormKeys.Email]}
              onChange={changeHandler}
            />
          </div>

          <div className="userInputs">
            <input
              type="password"
              id="login-password"
              placeholder="Password"
              name={LoginFormKeys.Password}
              value={values[LoginFormKeys.Password]}
              onChange={changeHandler}
            />
          </div>

          <div className="loginbtn">
            <input
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              value="Login"
            />
          </div>
          <p
            className="haveAcc"

          >
            Don't have an account?
            <Link to="/register">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div >
  );
};