import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        if (props.title[1] === "Luxury Watches.") {
          navigate("/luxury-watches");
        } else {
          return null;
        }
      }}
    >
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
