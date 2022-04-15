import React, { useEffect, useRef, useState, useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import cjlogin from "../Assests/cj_login.svg";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "../Styles/NewAdminLogin.css";
import { TweenMax, Expo } from "gsap";


function NewLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let loginColorDiv = useRef(null);
  let loginFormDiv = useRef(null);

  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };


  const signInHandler = (event) => {
    event.preventDefault();

  };

  const googleSignInHandler = (event) => {
    event.preventDefault();

  };

  // useEffect(() => {
  //   TweenMax.from(loginColorDiv.current, 1, {
  //     delay: 0.2,
  //     opacity: 0,
  //     x: "100%",
  //     ease: Expo.easeInOut,
  //   });
  //   TweenMax.from(loginFormDiv.current, 1, {
  //     delay: 1.2,
  //     opacity: 0,
  //   });
  // }, []);

  const onSignUpHandler = (event) => {
    event.preventDefault();
    TweenMax.to(loginFormDiv.current, 1, {
      delay: 0,
      opacity: 0,
    });
    TweenMax.to(loginColorDiv.current, 1, {
      delay: 0,
      opacity: 0,
      x: "50%",
      ease: Expo.easeInOut,
    });
    setTimeout(() => {
      // history.push("/signup");
    }, 750);
  };

  const onForgotPasswordHandler = (event) => {
    event.preventDefault();
    TweenMax.to(loginFormDiv.current, 1, {
      delay: 0,
      opacity: 0,
    });
    TweenMax.to(loginColorDiv.current, 1, {
      delay: 0,
      opacity: 0,
      x: "100%",
      ease: Expo.easeInOut,
    });
    setTimeout(() => {
      // history.push("/forgotpassword");
    }, 750);
  };

  const [type, setType] = useState("password");
  return (
    <div>
      <ToastContainer />
      <Row className="newadmin-login-row">
        <Col ref={loginColorDiv} className="newadmin-login-svg-col">
          <img
            src={cjlogin}
            alt="newadminloginsvg"
            className="newadmin-loginsvg"
          />
          <h2 style={{ textAlign: "center" }}>Welcome back!</h2>
          <h5 style={{ textAlign: "center" }}>
            Please login and unlock some honest reviews about all kind of
            gadgets!
          </h5>
        </Col>
        <Col
          ref={loginFormDiv}
          className="newadmin-login-form-col newlogin-col"
        >
          <h3>Let's get started!</h3>
          <p>
            In case you're new here,{" "}
            <button
              onClick={onSignUpHandler}
              className="newlogin-btn newadmin-loginlink"
            >
              Click Here
            </button>{" "}
          </p>
          <div>
            <Button
              onClick={googleSignInHandler}
              className="newadmin-googlelogin"
            >
              <FcGoogle className="newadmin-googleicon" />
              Sign in with Google
            </Button>
          </div>
          <hr className="newadmin-logindivider" />
          <label className="newadmin-loginlabel" for="email">
            Email Address
          </label>
          <div className="newadmin-logindiv">
            <HiOutlineMail className="newadmin-loginicon" />
            <input
              className="newadmin-logininput"
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={credentials.email}
              onChange={changeHandler}
            />
          </div>
          <label className="newadmin-loginlabel" for="password">
            Password
          </label>
          <div className="newadmin-logindiv">
            <RiLockPasswordLine className="newadmin-loginicon" />
            <input
              className="newadmin-logininput"
              type={type}
              name="password"
              id="password"
              placeholder="Password"
              value={credentials.password}
              onChange={changeHandler}
            />
            {type === "password" ? (
              <span style={{ display: "inline", overflowX: "hidden" }}>
                <button
                  onClick={() => {
                    setType("text");
                  }}
                  className="newadmin-pwvisibility"
                >
                  <MdVisibility className="newadmin-loginiconn" />
                </button>
              </span>
            ) : (
              <span style={{ display: "inline", overflowX: "hidden" }}>
                <button
                  onClick={() => {
                    setType("password");
                  }}
                  className="newadmin-pwvisibility"
                >
                  <MdVisibilityOff className="newadmin-loginiconn" />
                </button>
              </span>
            )}
          </div>
          <p>
            In case you don't remember your password,{" "}
            <button
              onClick={onForgotPasswordHandler}
              className="newlogin-btn newadmin-loginlink"
            >
              Click Here
            </button>{" "}
          </p>
          <Button onClick={signInHandler} className="newadmin-loginbtn">
            Sign In
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default NewLogin;
