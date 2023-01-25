import React from "react";

const Hero = (props) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="heading">
        {props.title.map((item, idx) => {
          return <h1 key={idx}>{item}</h1>;
        })}
        <a href="tel:+971 12 345 6789">+971 12 345 6789</a>
      </div>
    </div>
  );
};

export default Hero;
