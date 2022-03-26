import React, { useEffect, useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";


const Card = (props) => {
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
        <Link to="/login/">
          <i className="btn btn-primary">Quiero ver más</i>
        </Link >
        &nbsp;
        <Link to="/login/" className={`btn btn-outline-danger`} onClick="">
          <AiOutlineHeart />
        </Link>
      </div>
    </div>
  )
}

export default Card;
