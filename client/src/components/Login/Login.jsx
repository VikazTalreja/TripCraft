import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./login.Login.css";

import globe from "../../assets/logo.png";

const Login = () => {
  const signUpHook = useForm();
  const signInHook = useForm();

  const [error, setError] = useState("");

  const onSignUpSubmit = (d) => {
    // console.log(JSON.stringify(d));
    console.log(d);
    axios
      .post("http://localhost:8080/auth/signup", d, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  const onSignInSubmit = async (d) => {
    console.log(JSON.stringify(d));
    axios
      .post("http://localhost:8080/auth/signin", d, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(JSON.stringify(res));
        if (res.data.message === "success") {
          console.log(res.data.message);
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          window.location.href = "http://localhost:5173/dashboard";
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            setError("user/password invalid");
          }
        }
      });
  };

  useEffect(() => {
    const signInButton = document.getElementById("signIn");
    const signUpButton = document.getElementById("signUp");
    const main = document.getElementById("main");

    signUpButton.addEventListener("click", () => {
      main.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      main.classList.remove("right-panel-active");
    });
  }, []);

  return (
    <div className="log-container">
      <div className="login-div">
        <div className="tagline">
          <img src={globe} width={60} height={60}></img>
          <header>TripCraft!</header>
        </div>
        <div className="container" id="main">
          <div className="sign-up-div">
            <form onSubmit={signUpHook.handleSubmit(onSignUpSubmit)}>
              <h1>Sign Up</h1>
              <input
                {...signUpHook.register("name")}
                type="text"
                placeholder="Enter your name"
                name="username"
              />
              <input
                {...signUpHook.register("email")}
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <input
                {...signUpHook.register("password")}
                type="password"
                placeholder="Enter password"
                name="password"
              />
              <button className="sign-button">Sign Up!</button>
            </form>
          </div>
          <div className="sign-in-div">
            <form onSubmit={signInHook.handleSubmit(onSignInSubmit)}>
              <h1>Sign In</h1>
              <input
                {...signInHook.register("email")}
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <input
                {...signInHook.register("password")}
                type="password"
                placeholder="Enter password"
                name="password"
              />
              <div className="error-div">{error}</div>
              <button className="sign-button">Sign In!</button>
              {/* <Link to="/dashboard">
                <button className="sign-button">Sign In!</button>
              </Link> */}
              <span>
                Forgot your password?<a href="#">Click here</a>
              </span>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1>Old wanderer huh!</h1>
                <span>Continue your travel story - sign in now</span>
                <button className="sign-button" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-right">
                <h1>New explorer in town..</h1>
                <span>Sign Up and Discover</span>
                <button className="sign-button" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
