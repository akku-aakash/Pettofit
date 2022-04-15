import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./newsletter.css";

function News() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://buyinfonewsletter.herokuapp.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      } else {
        toast.success("Successfully signed up!");
        setEmail("");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="parent-news">
      <ToastContainer />
      <form onSubmit={handleSignUp} className="news_form">
        <div className="form-iitem">
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            aria-label="Email"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </div>
        <button className="form-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default News;
