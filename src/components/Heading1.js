import React from "react";
import "../components/heading1.css"

const Heading1 = (props) => {
  return (
    
      <div class="content">
        <div class="content__item">
          <p  class="leo messi">
            {props.title}
          </p>
        </div>
      </div>
    
  );
};

export default Heading1;
