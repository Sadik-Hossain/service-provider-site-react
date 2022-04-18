import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav style={{ background: "black", padding: "2rem 0" }}>
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
          <Link className="link" to="/register">
            Register
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
