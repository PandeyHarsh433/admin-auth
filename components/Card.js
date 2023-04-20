import React from "react";

const Card = (props) => {
  return (
    <div className="data-card" style={{ backgroundColor: props.background }}>
      <div className="data">
        <p>{props.head}</p>
        <h2>{props.data}</h2>
      </div>
      <div className="data-icon">
        <props.icon className="icon" />
      </div>
    </div>
  );
};

export default Card;
