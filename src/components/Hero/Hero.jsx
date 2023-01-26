import React from "react";

const Hero = (props) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="heading">
        <h1>
          {props.title.map((item, idx) => {
            return <div key={idx}>{item}</div>;
          })}
        </h1>
        <a href="tel:+971 12 345 6789">+971 12 345 6789</a>
      </div>
    </div>
  );
};

export default Hero;
