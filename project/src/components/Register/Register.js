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
      <div className="container py-5 h-100" style={{ textAlign: "center" }}>
        <div
          className="row d-flex justify-content-center align-items-center h-100"
          style={{ width: "800px" }}
        >
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0" style={{ width: "1000px" }}>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form id="register" method="POST" onSubmit={onSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1"></div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px", fontSize: "40px" }}
                      >
                        Sign into your account
                      </h5>
                      <div>
                        {/* <label htmlFor="email">Email:</label> */}
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="maria@email.com"
                          value={values.email}
                          onChange={changeHandler}
                        />
                      </div>

                      <div>
                        {/* <label htmlFor="pass">Password:</label> */}
                        <input
                          type="password"
                          name="password"
                          id="register-password"
                          placeholder="Password"
                          value={values.password}
                          onChange={changeHandler}
                        />
                      </div>
                      <div style={{ paddingBottom: "20px" }}>
                        {/* <label htmlFor="con-pass">Confirm Password:</label> */}
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirm-password"
                          placeholder="Confirm password"
                          value={values.confirmPassword}
                          onChange={changeHandler}
                        />
                      </div>

                      <div className="pt-1 mb-4" style={{ padding: "40px" }}>
                        <input
                          type="submit"
                          className="btn btn-dark btn-lg btn-block"
                          value="Register"
                        />
                      </div>
                      <p
                        className="mb-5 pb-lg-2"
                        style={{ color: "#393f81", fontSize: "25px" }}
                      >
                        You already have an account?
                        <Link to="/login" style={{ color: "#393f81" }}>
                          Login hier
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