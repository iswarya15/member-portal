import React from "react";

import { Card } from "../card/card.component";
import "./card-list.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.users.map((mem) => (
        <Card key={mem.id} mem={mem} />
      ))}
    </div>
  );
};
