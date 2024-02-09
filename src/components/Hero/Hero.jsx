import React from "react";
import { phone_number } from "../../constants";

const Hero = (props) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="heading">
        <h1>
          {props.title.map((item, idx) => {
            return <div key={idx}>{item}</div>;
          })}
        </h1>
        <a href={`tel:${phone_number}`}>{phone_number}</a>
      </div>
    </div>
  );
};

export default Hero;
