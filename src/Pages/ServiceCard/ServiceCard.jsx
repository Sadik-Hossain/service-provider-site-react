import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  return (
    <div style={{ border: "3px solid salmon", borderRadius: "1rem" }} className="card">
      <img
        style={{
          width: "100%",
          height: "auto",
          outline: "1px solid",
          borderRadius: "1rem 1rem 0 0",
        }}
        src={service.photoURL}
        alt=""
      />
      <h2>{service.title}</h2>
      <p>{service.body}</p>
      <h3>price: {service.price}</h3>
      <button
        className="button"
        onClick={() => {
          navigate("/checkout");
        }}
      >
        <h3>CheckOut</h3>
      </button>
    </div>
  );
};

export default ServiceCard;
