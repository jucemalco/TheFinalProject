import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Card2.css"
import logouser from "../../images/logouser.png"

const Card2 = (props) => {

  return (
    <div className="card">
      <div className="card-body">
        <img
          src={logouser}
          className="card-img-top photouser"
          alt="..."
        />
        <p className="card-text">
          <dl>
            <dt>Usuario</dt>
            <dt>Libros registrados</dt>
          </dl>
        </p>
      </div>
    </div>
  )
}

export default Card2;
