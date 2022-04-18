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

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p>
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div>
      <div>
        <div style={{ height: "1px" }}></div>
        <p>or</p>
        <div style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div>
        <button onClick={() => signInWithGoogle()}>
          {/* <img style={{ width: "30px" }} src={google} alt="" /> */}
          <span>Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

{
  /* <button>
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span>Facebook Sign In</span>
        </button>
        <button onClick={() => signInWithGithub()}>
          <img style={{ width: "30px" }} src={github} alt="" />
          <span>Github Sign In</span>
        </button> */
}
