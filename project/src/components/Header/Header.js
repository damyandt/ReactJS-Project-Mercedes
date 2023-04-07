import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <header>
      <div>
        <Link to="/">
          <img src="./images/Mercedes-Logo.svg.png" width="80"
            height="80" />
        </Link>
      </div>
      <nav id="text">
        <Link to="/catalog" style={{ fontSize: "25px" }}>All posts</Link>
        {isAuthenticated && (
          <div id="user">
            <Link to="/create-car">Post car</Link>
            <Link to="/logout">Logout</Link>
            <span style={{ fontSize: "25px"}}>{userEmail.split("@")[0]}</span>
          </div>
        )}

        {!isAuthenticated && (
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};