import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../../../store/appContext";
import { Link } from "react-router-dom";
import "./PendingReceive.css";
import Card from "../../../../components/Cards/Card";
import ProfileNavbar from "../../../../components/ProfileNavbar/ProfileNavbar";
import Footer2 from "../../../../components/FotterLogueado/Footer2";
import Card3 from "../../../../components/Card3/Card3";

// solicitando la consulta hacia la base de datos de los pendientes #pendingmatch
const PendingReceive = (props) => {
  //SOLICITUD DE MOSTRAR MATCH PENDIENTES

  const { store, actions } = useContext(Context);
  // let userinfo = localStorage.getItem("userinfo");
  // userinfo = JSON.parse(userinfo);
  // console.log(userinfo.user.id);

  // useEffect(() => {
  //   actions.pendingReceive(userinfo);
  // }, []);

  console.log(store.pendingreceive);
  function MouseOver(event) {
    event.target.style.color = "#d0bdd8";
  }

  function MouseOut(event) {
    event.target.style.color = "";
  }

  return (
    <>
      {" "}
      <ProfileNavbar />
      <section className="gradient-custom-2" style={{ height: "100%" }}>
        <div className="container py-5" style={{ height: "100%" }}>
          <div className="row d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}>
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ background: "#000", height: "200px", width: "100%" }}>
                  <div className="ms-4 mt-6 d-flex flex-column"
                    style={{ width: "150px" }}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "150px" }}
                    />
                  </div>

                  <div className="m-auto mx-5 text">
                    <h4 style={{ fontFamily: "fantasy" }}>Bienvenido a BookMatch</h4>
                    {/* <h3>{userinfo.user.name}</h3> */}
                  </div>
                </div>
                <div className="mt-3 mb-2 text-center ">
                  <Link
                    to="/miperfil/editdata/"
                    type="button"
                    className="button-profile btn btn-outline-dark btn-md me-3"
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    Editar Perfil
                  </Link>
                  <Link
                    to="/userprofile/"
                    type="button"
                    className="button-profile btn btn-outline-dark btn-md me-3"
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    Mis Libros
                  </Link>
                  <Link
                    to="/userprofile/pendingreceive/"
                    type="button"
                    className="button-profile btn btn-outline-dark btn-md me-3"
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    Recibidos Pendientes
                  </Link>

                  <Link
                    to="/userprofile/pendingsend/"
                    type="button"
                    className="button-profile btn btn-outline-dark btn-md me-3"
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    Enviados Pendientes
                  </Link>
                </div>

                <div>
                  <p className="mt-3 fs-4" style={{ fontFamily: "fantasy" }}>Pendientes</p>
                  <div className="card-body p-4 text-black">
                    <div className="row g-2">
                      {store.pendingreceive &&
                        store.pendingreceive.map((p, i) => (
                          <div
                            key={i}
                            className="col-md-4 d-flex justify-content-center align-items-center"
                          >
                            <Card3
                              title={p.book}
                              autor={p.autor}
                              editorial={p.editorial}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <Footer2 />
    </>
  );
};

export default PendingReceive;
