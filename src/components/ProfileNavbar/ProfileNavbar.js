import React from "react";
import { Link } from "react-router-dom";
import "./ProfileNavbar.css";
import BookMatch_Logo from "../../images/BookMatch_Logo.png";

const ProfileNavbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbarProfile ">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="navbar-image">
              <img src={BookMatch_Logo} style={{ width: "160px" }} />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-5">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="myaccount"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user p-2"></i>
                  Mi Perfil
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/miperfil/editdata">
                      Editar Mis Datos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/product">
                      Publica tu Libro
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      Cerrar Sesión
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link text-white p-5" to="#">
                    <i
                      className="fa fa-heart p-2"
                      aria-hidden="true"
                      style={{ color: "#8b6685" }}
                    ></i>
                    Mis Match{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white p-5" to="#">
                    <i
                      class="fa fa-book p-2"
                      aria-hidden="true"
                      style={{ color: "#d0bdd8" }}
                    ></i>
                    Mis Libros Publicados{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white p-5"
                    to="/userprofile"
                  >
                    Perfil de Usuario{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="myaccount"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  className="fa fa-heart-o p-2"
                  style={{ color: "#fa5d5d" }}
                ></i>
                Mis Favoritos
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item text-center" to="">
                    Eliminar
                    <i
                      className="fa fa-trash-o p-2"
                      style={{ color: "#8b6685" }}
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ProfileNavbar;

{
  /* <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {store.lista_favorito.map((favorito) => {
                  return (
                    <li>
                      <a className="dropdown-item" href="#">
                        {favorito}
                        <button
                          onClick={() => {
                            const isLargeNumber = (element) =>
                              element === favorito;

                            actions.deleteFav(
                              store.lista_favorito.findIndex(isLargeNumber)
                            );
                          }}
                        >
                          x
                        </button>
                      </a>
                    </li>
                  );
                })}
              </ul> */
}
