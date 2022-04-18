import React from "react";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <nav style={{ background: "salmon", padding: "2rem 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        <div>
          <Link className="link" to="/home">
            Home
          </Link>
          <Link className="link" to="/checkout">
            CheckOut
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/blogs">
            Blogs
          </Link>
        </div>
        <div>
          {user ? (
            ""
          ) : (
            <Link className="link" to="/register">
              Register
            </Link>
          )}

          {user ? (
            <button className="logout" onClick={handleSignOut}>
              sign out
            </button>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          {/* <Link className="link" to="/login">
            Login
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
