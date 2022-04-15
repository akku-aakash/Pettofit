import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Core
import Home from "./core/Home";
import Errorpage from "./core/Error";
import NewLogin from "./Auth/NewLogin";
import NewSignUp from "./Auth/NewSignUp";
import NewForgotPassword from "./Auth/NewForgotPassword";
import NewRegistration from "./Auth/NewRegistration";
import Loader1 from "./components/LoadingScreen/Loader1";

import './index.css';



const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <BrowserRouter>
        {
          loading ?
            <Loader1 />
            :
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<NewLogin />} />
              <Route path="/signup" exact element={<NewSignUp />} />
              <Route path="/registration" exact element={<NewRegistration />} />
              <Route path="/forgotpassword" exact element={<NewForgotPassword />} />
              <Route path="" element={<Errorpage />} />
            </Routes>
        }
      </BrowserRouter>
    </div>
  );
};

export default App;