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
      <div>
        <h3>Your Email is not verified!!</h3>
        <h5> Please Verify your email address</h5>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Send Verification Email Again
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;

// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Navigate, useLocation } from "react-router-dom";
// import auth from "../../firebase.init";

// const RequireAuth = ({ children }) => {
//   const [user, loading, error] = useAuthState(auth);
//   let location = useLocation();

//   if (user) {
//     return children;
//   } else {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
// };

// export default RequireAuth;
