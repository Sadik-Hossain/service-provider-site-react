import React from "react";
// import google from "../../../images/social/google.png";
// import facebook from "../../../images/social/facebook.png";
// import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
("../../../firebase.init");
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
const google = `https://i.ibb.co/J7RvT3j/google.png`;

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p style={{ color: "red" }}>Error: {error?.message}</p>;
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ height: "1px", background: "grey", width: "50%" }}></div>
        <p style={{ padding: "0 1rem" }}>or</p>
        <div style={{ height: "1px", background: "grey", width: "50%" }}></div>
      </div>
      {errorElement}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ width: "50%", padding: "1rem", marginBottom: "2rem" }}
          onClick={() => signInWithGoogle()}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "30px" }} src={google} alt="" />
            <span style={{ marginLeft: "1rem" }}>Google Sign In</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
