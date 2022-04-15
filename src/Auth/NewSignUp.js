import React, { useState, useRef } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cjsignup from "../Assests/cj_signup.svg";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { TweenMax, Expo } from "gsap";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "../Styles/NewAdminLogin.css";
import "./NewAuth.css";

function NewSignUp() {
  let loginColorDiv = useRef(null);
  let loginFormDiv = useRef(null);
  const history = useNavigate()

  const onLoginHandler = (event) => {
    event.preventDefault();
    TweenMax.to(loginFormDiv.current, 1, {
      delay: 0,
      opacity: 0,
    });
    TweenMax.to(loginColorDiv.current, 1, {
      delay: 0,
      opacity: 0,
      x: "-100%",
      ease: Expo.easeInOut,
    });
    setTimeout(() => {
      history("/login");
    }, 750);
  };

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const signUpHandler = (event) => {
    event.preventDefault();

  };

  const [type, setType] = useState("password");
  return (
    <div>
       
      <Row className="newadmin-login-row">
        {" "}
        <Col ref={loginFormDiv} className="newadmin-login-form-col newauth-col">
          <h3>Let's get started!</h3>
          <p>
            In case you're already registered,{" "}
            <button
              onClick={onLoginHandler}
              className="newlogin-btn newadmin-loginlink"
            >
              Click Here
            </button>{" "}
          </p>
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
          <Button onClick={signUpHandler} className="newadmin-loginbtn">
            Sign Up
          </Button>
        </Col>
        <Col ref={loginColorDiv} className="newadmin-login-svg-col">
          <img
            src={cjsignup}
            alt="newadminloginsvg"
            className="newadmin-loginsvg"
          />
          <h2 style={{ textAlign: "center" }}>Hello, Stranger!</h2>
          <h5 style={{ textAlign: "center" }}>
            Please signup so we can get to know each other!
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default NewSignUp;
