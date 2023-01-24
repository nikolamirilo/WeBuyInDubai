import React from "react";

const Hero = (props) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="heading">
        {props.type === "luxury-watches" ? props.title.map((item, idx)=>{
          return(
            <h1 key={idx}>{item}</h1>
          )
        }) :  <h1>{props.title}</h1>}
        {props.subtitle ? <h2>{props.subtitle}</h2> : null}
      </div>
    </div>
  );
};

export default Hero;
