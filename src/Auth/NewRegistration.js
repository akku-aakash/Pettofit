import React, { useState, useRef } from "react";
import { Button, Col, Row, ProgressBar } from "react-bootstrap";
import cjregister from "../Assests/cj_registration.svg";
import { HiOutlineMail } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import "../Styles/NewAdminLogin.css";
import "./NewAuth.css";
import ImageUpload from "./ImageUpload";

function NewRegistration() {
  let loginColorDiv = useRef(null);
  let loginFormDiv = useRef(null);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    uid: "",
    phoneNo: "",
    image: null,
  });
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);


  const progressInstance = <ProgressBar animated now={progress} label={`${progress}%`} />;

  const onChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const registerUserHandler = (event) => {
    event.preventDefault();
    setUploading(true);

  };

  return (
    <div>
      <Row className="newadmin-login-row">
        {" "}
        <Col
          ref={loginFormDiv}
          className="newadmin-login-form-col register-col"
        >
          <h3>Enter a few details</h3>
          <p>This is the last thing we'll ask you to do, we promise!</p>
          <hr className="newadmin-logindivider register-divider" />
          <ImageUpload center="true" setData={setUserData} />
          {progress && uploading && (
            <div style={{ width: "150px", marginLeft: "auto", marginRight: "auto", marginBottom: "50px" }}>
              {progressInstance}
            </div>
          )}
          <label className="newadmin-loginlabel" for="name">
            Name
          </label>
          <div className="newadmin-logindiv">
            <BiUser className="newadmin-loginicon" />
            <input
              className="newadmin-logininput"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={userData.name}
              onChange={onChangeHandler}
            />
          </div>
          <label className="newadmin-loginlabel" for="email">
            Email Address
          </label>
          <div className="newadmin-logindiv">
            <HiOutlineMail className="newadmin-loginicon" />
            <input
              className="newadmin-logininput"
              type="email"
              name="email"
              readOnly
              id="email"
              placeholder="Email address"
              value={userData.email}
            />
          </div>
          <label className="newadmin-loginlabel" for="phoneNo">
            Phone Number
          </label>
          <div className="newadmin-logindiv">
            <BsPhone className="newadmin-loginicon" />
            <input
              className="newadmin-logininput"
              type="text"
              name="phoneNo"
              id="phoneNo"
              placeholder="Phone Number"
              value={userData.phoneNo}
              onChange={onChangeHandler}
            />
          </div>
          <Button onClick={registerUserHandler} className="newadmin-loginbtn">
            Save
          </Button>
        </Col>
        <Col ref={loginColorDiv} className="newadmin-login-svg-col">
          <img
            src={cjregister}
            alt="newadminloginsvg"
            className="newadmin-loginsvg"
          />
          <h2 style={{ textAlign: "center" }}>One last thing!</h2>
          <h5 style={{ textAlign: "center" }}>
            Provide a few details about yourself, so we can know you better!
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default NewRegistration;
