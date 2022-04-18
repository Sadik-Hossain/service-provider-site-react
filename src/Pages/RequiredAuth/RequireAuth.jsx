import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div style={{ textAlign: "center", margin: "2rem  0" }}>
        <h1
          style={{
            textAlign: "center",
            color: "red",
            textTransform: "capitalize",
          }}
        >
          Your Email is not verified!!
        </h1>
        <h2
          style={{
            textAlign: "center",
            color: "red",
            textTransform: "capitalize",
          }}
        >
          Please Verify your email address
        </h2>
        <button
          style={{
            padding: "1rem",
            marginLeft: "1rem",
            color: "green",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            background: "transparent",
          }}
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Send Verification Email
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  } else {
    return children;
  }
};

export default RequireAuth;
