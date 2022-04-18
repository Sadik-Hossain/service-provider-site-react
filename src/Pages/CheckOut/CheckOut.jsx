import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./CheckOut.css";
const CheckOut = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast("thank you for checking out");
  };
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="Your Name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input type="text" name="adress" placeholder="your adress" />
        <input type="text" name="payment" placeholder="payment card" />

        <input type="submit" value="checkout" />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CheckOut;
