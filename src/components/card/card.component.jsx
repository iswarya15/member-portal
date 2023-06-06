import React from "react";
import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.mem.name}</h3>
      <p>{props.mem.email}</p>
    </div>
  );
};
