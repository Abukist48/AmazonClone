import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        if (useCredential) navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        if (useCredential) navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png"
          />
        </Link>
        <div className="login_container">
          <h1>Sign-in</h1>
          <form>
            <h4>E-mail</h4>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={signIn}
              className="login_signInButton"
            >
              Sign In
            </button>
          </form>
          <p>
            By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice, and our
            Interest-Based Ads Notice.
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
