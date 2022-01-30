import React from "react";
import Card from "../card/Card";
import "./cardliststyle.css";

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((el) => (
        <Card key={el.id} monster={el} />
      ))}
      {props.children}
    </div>
  );
}

export default CardList;
