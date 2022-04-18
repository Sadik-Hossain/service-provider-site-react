import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const homeRedirect = () => {
    navigate("/home");
  };
  return (
    <div style={{ textAlign: "center", margin: "5rem 0" }}>
      <span
        style={{
          color: "red",
          border: "2px solid red",
          fontSize: "3rem",
          padding: "2rem",
          borderRadius: "100%",
        }}
      >
        404
      </span>
      <div style={{padding:"2rem 0"}}>
        <p className="blog-ans">Not Found</p>
        <p className="blog-ans">sorry, we cannot find what you're looking for</p>
      </div>
      <button
        style={{
          padding: "0 1.5rem",
          outline: "2px solid red",
          border: "0",
          background: "transparent",
          cursor: "pointer",
        }}
        onClick={homeRedirect}
      >
        <p style={{ fontSize: "1.3rem" }}>Go back Home</p>
      </button>
    </div>
  );
};

export default NotFound;
