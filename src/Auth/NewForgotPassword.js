import React, { useState, useRef } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cjforgot from "../Assests/cj_forgotpw.svg";
import { HiOutlineMail } from "react-icons/hi";
import { TweenMax, Expo } from "gsap";
import "../Styles/NewAdminLogin.css";
import "./NewAuth.css";

function NewForgotPassword() {
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

  const [email, setEmail] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  };

  const sendResetLinkHandler = (event) => {
    event.preventDefault();

  };
  
  return (
    <div>
      <Row className="newadmin-login-row">
        {" "}
        <Col
          ref={loginFormDiv}
          className="newadmin-login-form-col forgotpw-col"
        >
          <h3>Reset your password!</h3>
          <p>
            To login,{" "}
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
              value={email}
              onChange={onChangeHandler}
            />
          </div>
          <Button onClick={sendResetLinkHandler} className="newadmin-loginbtn">
            Confirm
          </Button>
        </Col>
        <Col ref={loginColorDiv} className="newadmin-login-svg-col">
          <img
            src={cjforgot}
            alt="newadminloginsvg"
            className="newadmin-loginsvg"
          />
          <h2 style={{ textAlign: "center" }}>Don't remember your password?</h2>
          <h5 style={{ textAlign: "center" }}>
            Don't panic, we've got you covered!
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default NewForgotPassword;
