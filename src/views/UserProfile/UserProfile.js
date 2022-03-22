import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import Card from "../../components/Cards/Card";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";

const UserProfile = (props) => {
  return (
    <>
      {" "}
      <ProfileNavbar />
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ background: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "150px" }}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: "1" }}
                    >
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3">
                    <h5>{props.name}</h5>
                    <p>{props.city}</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="mb-1 h5">253</p>
                      <p className="small text-muted mb-0">Photos</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">1026</p>
                      <p className="small text-muted mb-0">Followers</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Following</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="ms-3">
                    <h5>{props.name}</h5>
                    <p>{props.city}</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1 ">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        otras opciones
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Historial de matches
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Mis matches pendientes
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Nueva solicitud de match
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Mis libros</p>
                    <p className="mb-0">
                      <Link to="#!" className="text-muted">
                        Mostrar todos
                      </Link>
                    </p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <Card />
                    </div>
                    <div className="col mb-2">
                      <Card />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <Card />
                    </div>
                    <div className="col">
                      <Card />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="lead fw-normal mb-0">Libros Recientes</p>
                        <p className="mb-0">
                          <Link to="#!" className="text-muted">
                            Mostrar Todo
                          </Link>
                        </p>
                      </div>
                      <div className="row g-2">
                        <div className="col mb-2 mt-5">
                          <h1>Mis Libros Publicados</h1>
                        </div>
                        <div className="col mb-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                            alt="image 2"
                            className="w-100 rounded-3"
                          />
                        </div>
                      </div>
                      <div className="row g-2">
                        <div className="col">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                            alt="image 3"
                            className="w-100 rounded-3"
                          />
                        </div>
                        <div className="col">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                            alt="image 4"
                            className="w-100 rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
