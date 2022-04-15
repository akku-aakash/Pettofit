import React from "react";
import { Card } from "react-bootstrap";

import "./CategoryCard.css";

function CategoryCard(props) {
  return (
    <div className="categorycard-css">
      <Card className="categorycard">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>
        <div className="circle circle-three"></div>
        <div className="circle circle-four"></div>
        <div className="categorycard-overlay"></div>
        <div className="categorycard-content">
          <h2>{props.category}</h2>
          <h2>Under</h2>
          <h2>{props.value}</h2>
        </div>
      </Card>
    </div>
  );
}

export default CategoryCard;
