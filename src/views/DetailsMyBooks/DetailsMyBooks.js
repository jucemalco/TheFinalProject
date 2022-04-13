import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import React, { useContext, useEffect } from "react";
import "./index.css";
import { Context } from "../../store/appContext";
import Footer2 from "../../components/FotterLogueado/Footer2";

const Details = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {" "}
      <ProfileNavbar />
      <div className="container details p-4 mt-4" >
        <div className="row align-items-start">
          <div className="col">
            <h4 style={{fontFamily: "sans-serif", color:"#ddd5dd"}} className="titledetails mt-3">{props.title}</h4>
            <h4 style={{fontFamily: "sans-serif", color:"#ddd5dd"}} className="titledetails2 mb-4">{props.autor}</h4>
            <h4 style={{fontFamily: "sans-serif", color:"#ddd5dd"}} className="mb-3">Reseña</h4>
            <p style={{fontFamily: "sans-serif", color:"#ddd5dd"}} className="text-details ms-5 me-4">
            {props.review}</p>
          </div>
        </div>
          <div className="row mt-2">
            <div className="col-xs col-sm col-md col-lg">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="rounded-3"
                style={{ width: "350px", height: "200px"}}
                alt="..."
              />
            </div>
            <div className="col-xs col-sm col-md col-lg">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="rounded-3"
                style={{ width: "350px", height: "200px" }}
                alt="..."
              />
            </div>
            <div className="col-xs col-sm col-md col-lg">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="rounded-3"
                style={{ width: "350px", height: "200px" }}
                alt="..."
              />
              </div>
            <div className="col-xs col-sm col-md col-lg">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="rounded-3"
                style={{ width: "350px", height: "200px" }}
                alt="..."
              />
              </div>
            <div className=" col-12 p-4 mb-2 text-center mt-3">
              <button
                type="submit"
                className="btn btn-outline-light gradient-custom px-4 me-3"
                style={{background:"#4c3b80", color:"white", borderRadius: "25px"}}
              >
                Aceptar Match
              </button>
              <button className="btn btn-outline-light gradient-custom px-4"
              style={{background:"#4c3b80", color:"white", borderRadius: "25px"}}
              >
                
                Eliminar Match
              </button>
            </div>

            
          </div>
        </div>
        <Footer2 />
    </>

  );
};

export default Details;
