import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Card2.css"
import logouser from "../../images/logouser.png"

const Card2 = (props) => {

  return (
    <div className="card">
      <div className="card-body ">
        <img
          src={logouser}
          className="card-img-top photouser"
          alt="..."
        />
        <p className="card-text mt-3">
          <dl>
            <dt>Libro Publicado por:</dt>
            <dt>XXXX</dt>
          </dl>
        </p>
      </div>
    </div>
  )
}

export default Card2;
