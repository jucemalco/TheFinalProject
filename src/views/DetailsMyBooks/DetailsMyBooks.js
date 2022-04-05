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
            <h3 className="titledetails">{props.title}Título</h3>
            <h4 style={{fontFamily: "fantasy"}} className="titledetails2">{props.autor}Autor</h4>
            <h4 style={{fontFamily: "fantasy"}} className="">Reseña</h4>
            <p className="text-details ms-5 me-4">
            {props.review}
            Ea nisi ea aliquip occaecat excepteur veniam nisi. Aute officia
            cupidatat occaecat cupidatat duis nostrud dolore eiusmod voluptate
            est. Qui mollit aliquip enim duis quis. Labore adipisicing magna
            magna ipsum mollit elit non veniam excepteur ipsum.
            </p>
    
          
          
          </div>
        </div>
          <div className="row mt-2">
            <div className="col">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="rounded-3 ms-3 ms-5 mb-3"
                style={{ width: "200px", height: "200px" }}
                alt="..."
              />
            </div>
            <div className="col">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="rounded-3 ms-3 me-3 ms-5"
                style={{ width: "200px", height: "200px" }}
                alt="..."
              />
            </div>
            <div className="col">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="rounded-3 ms-3 me-3 ms-5"
                style={{ width: "200px", height: "200px" }}
                alt="..."
              />
              
            </div>

            <div className="col">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="rounded-3 ms-3 me-3 ms-5"
                style={{ width: "200px", height: "200px" }}
                alt="..."
              />
              
            </div>
            <div className=" col-12 p-4 mb-2 text-center mt-3">
              <button
                type="submit"
                className="btn btn-outline-light gradient-custom px-4 me-3"
                style={{borderRadius: "25px"}}
              >
                Aceptar Match
              </button>
              <button className="btn btn-outline-light gradient-custom px-4"
              style={{borderRadius: "25px"}}
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
