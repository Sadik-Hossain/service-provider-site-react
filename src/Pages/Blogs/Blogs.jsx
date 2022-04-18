import React from "react";
import './Blogs.css'
const Blogs = () => {
  return (
    <div >
      <h1 className="blog-title">What's the difference between authorization and authentication?</h1>
      <p className="blog-ans">
        Authentication is the process of verifying a user. On the other hand,
        authorization is a process of giving someone the ability to access a
        resource.
      </p>
      <hr />
      <h1 className="blog-title">Why are we using firebase? What other options do you have to implement authentication?</h1>
      <p className="blog-ans">
          We are using firebase for authentication and hosting purpose. Other alternative to firebase auth are: okta, auth0, stytch, oneLogin, Amazon Cognito.
      </p>
      <h1 className="blog-title">What other services does firebase provide other than authentication?</h1>
      <hr />
      <p className="blog-ans">Beside authentication, firebase provide cloud hosting, cloud functions, cloud storage, cloud messaging, google analytics.</p>
    </div>
  );
};

export default Blogs;
