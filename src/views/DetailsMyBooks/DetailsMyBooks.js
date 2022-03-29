import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import React, { useContext, useEffect } from "react";
import "./index.css";
import { Context } from "../../store/appContext";
import Footer2 from "../../components/FotterLogueado/Footer2"

const Details = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {" "}
      <ProfileNavbar />
      <div className="container details p-4 mt-4">
        <h1 className="titledetails text-center mt-3">Titulo</h1>
        <h5 className="titledetails2 text-center">Autor</h5>
        <h5 className="text-center">Reseña</h5>
        <p className="text ms-5 me-4">
          Ea nisi ea aliquip occaecat excepteur veniam nisi. Aute officia
          cupidatat occaecat cupidatat duis nostrud dolore eiusmod
          voluptate est. Qui mollit aliquip enim duis quis. Labore
          adipisicing magna magna ipsum mollit elit non veniam excepteur
          ipsum.
        </p>
        <div className="row mt-5">
          <div className="col">
            <img
              src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
              className="rounded-3 ms-3 ms-5 mb-3"
              style={{ width: "300px", height: "300px" }}
              alt="..."
            />
          </div>
          <div className="col">
            <img
              src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
              className="rounded-3 ms-3 me-3 ms-5"
              style={{ width: "300px", height: "300px" }}
              alt="..."
            />
          </div>
          <div className="col">
            <img
              src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
              className="rounded-3 ms-3 me-3 ms-5"
              style={{ width: "300px", height: "300px" }}
              alt="..."
            />
          </div>
        </div>


      </div>
      <Footer2 />
    </>
  );
};

export default Details;
