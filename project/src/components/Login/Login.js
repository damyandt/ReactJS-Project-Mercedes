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
      <div className="container py-5 h-100" style={{ textAlign: "center", padding: "auto" }}>
        <div
          className="row d-flex justify-content-center align-items-center h-100"
          style={{ width: "800px" }}
        >
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0" style={{ width: "1000px" }}>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form id="login" method="POST" onSubmit={onSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1"></div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px", fontSize: "40px" }}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        {/* <label htmlFor="email">Email:</label> */}
                        <input
                          type="email"
                          id="email"
                          placeholder="Sokka@gmail.com"
                          name={LoginFormKeys.Email}
                          value={values[LoginFormKeys.Email]}
                          onChange={changeHandler}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        {/* <label htmlFor="login-pass">Password:</label> */}
                        <input
                          type="password"
                          id="login-password"
                          placeholder="Password"
                          name={LoginFormKeys.Password}
                          value={values[LoginFormKeys.Password]}
                          onChange={changeHandler}
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <input
                          type="submit"
                          className="btn btn-dark btn-lg btn-block"
                          value="Login"
                        />
                      </div>
                      <p
                        className="mb-5 pb-lg-2"
                        style={{ color: "#393f81", fontSize: "25px" }}
                      >
                        Don't have an account?
                        <Link to="/register" style={{ color: "#393f81" }}>
                          Register here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};