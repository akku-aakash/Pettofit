import React from "react";
import "../components/InfoCards.css";

function InfoCards(props) {
  return (
    <div className="ic">
    <div className="info-card">
      <div className="info-title">
        <h4>{props.title}</h4>
        <button></button>
        
      </div>
      <div className="info-desc">
        <p>
          {props.content}
        </p>
      </div>
    </div>
    </div>
  );
}
export default InfoCards;
