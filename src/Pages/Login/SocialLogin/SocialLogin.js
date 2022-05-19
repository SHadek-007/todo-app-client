import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import google from "../../../logo/google.png";
import github from "../../../logo/github.png";
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user || gitUser) {
      const email = user ? user.user.email : gitUser.user.email;
      fetch("https://car-manager007.herokuapp.com/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
        });
      navigate("/");
    }
  }, [user, gitUser]);
  let errorElement;
  if (error || gitError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {gitError?.message}
        </p>
      </div>
    );
  }

  if (loading || gitLoading) {
    return <Loading></Loading>;
  }
    return (
        <div>
      <div className="d-flex align-items-center">
        <div className="w-50 bg-danger" style={{ height: "1px" }}></div>
        <p className="mt-3 mx-2">or</p>
        <div className="w-50 bg-danger" style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div className="btn-container">
        <button
          onClick={() => signInWithGoogle()}
          className="google d-block mx-auto mb-3"
        >
          {" "}
          <img
            className="me-5"
            style={{ height: "32px" }}
            src={google}
            alt=""
          />{" "}
          Sign in with Google
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="git d-block mx-auto mb-3"
        >
          {" "}
          <img
            className="me-5 bg-white rounded-circle"
            src={github}
            alt=""
          />{" "}
          Sign in with Github
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;