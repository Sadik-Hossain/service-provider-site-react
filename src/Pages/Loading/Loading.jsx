import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class="loader"></div>
    </div>
  );
};

export default Loading;
