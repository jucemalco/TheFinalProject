import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import React, { useContext, useEffect } from "react";
import "./index.css";
import { Context } from "../../store/appContext";
import Footer2 from "../../components/FotterLogueado/Footer2"

const Details = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {" "}
      <ProfileNavbar />
      <div className="container">
        <div className="container">
          <div className="row align-items-start">
            <div className="col">
              <h1 className="titledetails">{props.title}</h1>
              <h4 className="titledetails2">{props.autor}</h4>
              <h5 className="">Reseña</h5>
              <p>
                Ea nisi ea aliquip occaecat excepteur veniam nisi. Aute officia
                cupidatat occaecat cupidatat duis nostrud dolore eiusmod
                voluptate est. Qui mollit aliquip enim duis quis. Labore
                adipisicing magna magna ipsum mollit elit non veniam excepteur
                ipsum.
              </p>
                    <div className=" col-12 p-4 mb-2 text-center mt-3">
                        <button type="submit" className="btn btn-outline-light gradient-custom-1 px-4">Aceptar Match</button>                        
                        <button className="btn btn-outline-light gradient-custom-1 px-4 mt-3">Eliminar Match</button>
                    </div>
              
            </div>
          </div>
          <img
            src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
            className="img-thumbnail"
            style={{ width: "350px", height: "300px" }}
            alt="..."
          />
          <img
            src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
            className="img-thumbnail"
            style={{ width: "350px", height: "300px" }}
            alt="..."
          />
          <img
            src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
            className="img-thumbnail"
            style={{ width: "350px", height: "300px" }}
            alt="..."
          />
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Details;
