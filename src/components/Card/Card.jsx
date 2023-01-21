import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="title">
        {props.title.map((item, idx) => {
          return <h2 key={idx}>{item}</h2>;
        })}
      </div>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Card;
