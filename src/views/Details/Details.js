import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import React, { useContext, useEffect } from "react";
import "./index.css";
import Card2 from "../../components/Card2/Card2";
import { Context } from "../../store/appContext";
import Footer2 from "../../components/FotterLogueado/Footer2"

const Details = () => {
  const { store, actions } = useContext(Context);
  console.log(store.products)

  console.log(store.user)

  return (
    <>
      {" "}
      <ProfileNavbar />
      <div className="container">
        <div className="container">
          <div className="row align-items-start">
            <div className="col photobook">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="img-thumbnail"
                style={{
                  width: "350px",
                  height: "300px",
                  display: "inline-block",
                }}
                alt="..."
              ></img>
            </div>
            <div className="col">
              <h1 className="titledetails">Titulo</h1>
              <h4 className="titledetails2">Autor</h4>
              <h5 className="">Reseña</h5>
              <p>
                Ea nisi ea aliquip occaecat excepteur veniam nisi. Aute officia
                cupidatat occaecat cupidatat duis nostrud dolore eiusmod
                voluptate est. Qui mollit aliquip enim duis quis. Labore
                adipisicing magna magna ipsum mollit elit non veniam excepteur
                ipsum.
              </p>
              <button to="#" className="btn btn-primary">
                Añadir Favoritos
              </button>{" "}
              {""}
              {/* <button
                className="btn btn-primary "
                onCLick={() => actions.match()}
              >
                Hacer Match
              </button>{" "} */}
              {""}

              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                onCLick={() => actions.match()}>
                Hacer Match
              </button>


              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Match</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p className="card-text fw-light" >El libro que deseas intercambiar debe estar en muy buen estado, es decir, no debe: tener hojas sueltas, tapas y lomo despegado, haber estado mojado, estar manchado o contar con rayones en su portada o en el interior que dificulten su lectura.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>
                      <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h1 className="titledetails">Usuario</h1>
              <Card2 />
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
