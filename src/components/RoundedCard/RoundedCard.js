import React from "react";
import "./style.css";

const RoundedCard = (props) => {
  return (
    <div className=" match-status__card card d-flex justify-content-center align-items-center">
      <img
        className="rounded-card--profile_picture rounded-circle"
        src="https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=20"
        alt="user profile picture"
      />
      <div className="card-body">
        <p className="card-text">{props.nombre}</p>
      </div>
    </div>
  );
};

export default RoundedCard;
