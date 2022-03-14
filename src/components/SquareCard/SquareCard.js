import React from "react";
import "./style.css";

const SquareCard = (props) => {
  return (
    <div className="card d-flex justify-content-center align-items-center p-3">
      <img
        className="square--card-book_picture"
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Rayuela_JC.png"
        alt="book picture"
      />
      <div className="card-body">
        <p className="card-text">{props.nombre}</p>
      </div>
    </div>
  );
};

export default SquareCard;
