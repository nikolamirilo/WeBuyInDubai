import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Card;
