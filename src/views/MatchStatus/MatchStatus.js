import React from "react";
import { StatusError } from "../../components/StatusError";
import { RoundedCard } from "../../components/RoundedCard";
import { SquareCard } from "../../components/SquareCard";
import "./MatchStatus.css";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";

const MatchStatus = () => {
  return (
    <> <ProfileNavbar />
      <div className="d-flex align-items-center justify-content-around py-3 px-3">
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
    </>);
};

export default MatchStatus;
