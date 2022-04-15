import React from "react";
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
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/l1"  element={<Loader1 />} />
          <Route path="/"  element={<Home />} />
          <Route path="/login"  element={<NewLogin />} />
          <Route path="/signup"  element={<NewSignUp />} />
          <Route path="/registration"  element={<NewRegistration />} />
          <Route path="/forgotpassword"  element={<NewForgotPassword />} />
          {/* <Route path="" element={<Errorpage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;