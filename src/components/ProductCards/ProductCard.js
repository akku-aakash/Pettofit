import React from "react";
import { Card } from "react-bootstrap";
import {Link } from "react-router-dom";
import Imgas from '../../Assests/Apple-iPhone-11-PNG-File.png'
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="productcard-maindiv">
      <Card className="productcard">
        <div className="product-card-content">
          <img src={Imgas} alt="iphone"></img>
          <h4>Apple - Iphone12</h4>
          <p>Starting at Rs. 61,000</p>
          <button className="productcard-btn" to="/">
            View More
          </button>
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
