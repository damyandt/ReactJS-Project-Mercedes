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
        {isAuthenticated && (
          <div id="user">
            <Link to="/catalog" >All posts</Link>
            <Link to="/create-car">Post car</Link>
            <Link to="/logout">Logout</Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
            <a>{userEmail.split("@")[0]}</a>
          </div>
        )}

        {!isAuthenticated && (
          <div id="guest">
            <Link to="/catalog" >All posts</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};