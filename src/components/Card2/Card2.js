import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import "./Card2.css"
import logouser4 from "../../images/logouser4.png"

const Card2 = (props) => {
  const { store, actions } = useContext(Context);
  let userinfo = localStorage.getItem("userinfo");
  userinfo = JSON.parse(userinfo);
  useEffect(() => {
    actions.userProducts(userinfo);
  }, []);
  console.log(store)

  return (
    <div>
      <div className="card-body ">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
          className="card-img-top photouser"
          alt="..."
        />
        <p className="card-text mt-3">
          <dl>
            <dt>Libro Publicado por:</dt>
            <dt>{userinfo.user.name}</dt>
          </dl>
        </p>
      </div>
    </div>
  )
}

export default Card2;
