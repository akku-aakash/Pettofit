import React from "react";
import { Link } from "react-router-dom";

import error from "../Assests/error404.svg";
import "../Styles/Error.css";


const Error = () => {

  const changee = () => {
    var arr = []

  }

  return <div className="error-maindiv">
    <img src={error} alt="Error, content not found!" />
    <h4 onClick={changee}>Oops! We couldn't find what you were looking for!</h4>
    <Link to="/"><p>Back to Pettofit</p></Link>
  </div>;
};

export default Error;
