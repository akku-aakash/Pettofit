import React from "react";
import { Card } from "react-bootstrap";
import {Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="productcard-maindiv">
      <Card className="productcard">
        <div className="product-card-content">
          <img src={props.product.productPNG} alt="iphone"></img>
          <h4>{props.product.brand} - {props.product.name}</h4>
          <p>Starting at Rs. {props.product.lowerPrice}</p>
          <Link to={`/product/${props.product.productId}`}>
          <button className="productcard-btn" to="/">
            View More
          </button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
