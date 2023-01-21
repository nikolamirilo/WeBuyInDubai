import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="title">
        {props.type !== "luxury-watches" ? (
          props.title.map((item, idx) => {
            return <h2 key={idx}>{item}</h2>;
          })
        ) : (
          <h2>{props.title}</h2>
        )}
      </div>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Card;
