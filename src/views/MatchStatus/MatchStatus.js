import React from "react";
import { StatusError } from "../../components/StatusError";
import { RoundedCard } from "../../components/RoundedCard";
import { SquareCard } from "../../components/SquareCard";
import "./MatchStatus.css";

const MatchStatus = () => {
  return (
    <div className="d-flex align-items-center justify-content-around">
      <div className="d-flex align-items-center justify-content-around flex-column">
        <RoundedCard nombre="juan martinez" />
        <SquareCard nombre="Rayuela" />
      </div>

      <StatusError />

      <div className="d-flex align-items-center justify-content-around flex-column">
        <RoundedCard nombre="pepita perez" />
        <SquareCard nombre="Rayuela" />
      </div>
    </div>
  );
};

export default MatchStatus;
