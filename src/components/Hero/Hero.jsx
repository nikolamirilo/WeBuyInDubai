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
        <a href="tel:+971 58 592 1070">+971 58 592 1070</a>
      </div>
    </div>
  );
};

export default Hero;
