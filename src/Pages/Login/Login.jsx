import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
// import PageTitle from "../../Shared/PageTitle/PageTitle";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="register-form">
      <h2>Please Login</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          ref={emailRef}
          type="email"
          placeholder="Enter email"
          required
        />
        <input
          className="form-input"
          type="password"
          name=""
          id=""
          ref={passwordRef}
          placeholder="Password"
          required
        />

        <input className="form-input" type="submit" value="login" />
      </form>
      {errorElement}
      <p>
        New to Genius Car?
        <Link
          style={{
            textDecoration: "none",
            color: "salmon",
            marginLeft: ".5rem",
          }}
          to="/register"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget Password?
        <button onClick={resetPassword}>Reset Password</button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;

// import React from "react";

// const Login = () => {
//   return (
//     <div className="form-container">
//       <h1 style={{ textAlign: "center" }}>please login</h1>
//     </div>
//   );
// };

// export default Login;
