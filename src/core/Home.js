import React from "react";
import "../Styles/Home.css";
// import $ from "jquery";
import LandingScreen from "../components/Landing/LandingScreen";
import Header2 from "../components/Header/Header2";
import Footer from "../components/Footer_new/Footer";
import { Row, Col } from "react-bootstrap";
import CategoryCard from "../components/ProductCards/ProductCard";


const Home = () => {

  return (
    <div className="home-parent-div">
      <div className="imptoall">
        <Header2 />
        <LandingScreen />
        
        <div className="padd">
          <Row classname="ctr">
            <Col className="heading-ctr" xl={12}>
              <h1>SMARTPHONES</h1>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col className="heading-ctr" xl={3}>
              <CategoryCard />
            </Col>
            <Col className="heading-ctr" xl={3}>
              <CategoryCard />
            </Col>
            <Col className="heading-ctr" xl={3}>
              <CategoryCard />
            </Col>
            <Col className="heading-ctr" xl={3}>
              <CategoryCard />
            </Col>
          </Row>
        </div>
      
        <Footer />
      </div>
    </div>
  );
};

export default Home;