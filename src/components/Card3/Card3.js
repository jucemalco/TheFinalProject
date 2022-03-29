import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Card3 = (props) => {
  //const { store, actions } = useContext(Context);
  //const params = useParams();
  //useEffect(() => {
    //actions.getProduct(params.id)
  //}, [])

  // const handleClick = () => {
  //   if (!isLogged) return navigate("/login");
  //   addFav({id});
  // };

  return (

      <div className="card">
      <div className="card-body">
        <img
          src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
          className="card-img-top"
          alt="..."
        />
        <p className="card-text">
          <dl>
            <dt>{props.title}</dt>
            <dt>{props.autor}</dt>
            <dd>{props.editorial}</dd>
          </dl>
        </p> 
        <Link to="/detailsmybooks">
          <i className="btn btn-primary">Quiero ver más</i>
        </Link>
        &nbsp;
      </div>
    </div>
  )
}

export default Card3;
