import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import iphone from "../../Assests/Apple-iPhone-11-PNG-File.png";
import "./ProductCard2.css";
import {Link } from "react-router-dom";

function ProductCard2(props) {
  return (
    <div className="productcardlandscape-maindiv">
      <Card className="productcard-landscape">
        <Row>
          <Col className="productcard-landscapeimage" lg={3} md={4}>
            <img src={props.product.productPNG} alt="iphone" />
          </Col>
          <Col className="productcard-landscapecontent" lg={9} md={8}>
            <div>
              <h3>{props.product.brand} - {props.product.name}</h3>
              <p>Starting at Rs. {props.product.lowerPrice}</p>
            </div>
            <hr />
            <div className="product-specsdiv">
              <h5>Overview</h5>
              <p>{props.product.description}</p>
            </div>
            <hr />
            <Link to={`/product/${props.product.productId}`}>
            <button className="productcard-landscapebtn">View More</button>
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ProductCard2;
