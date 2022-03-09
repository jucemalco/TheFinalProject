import React from "react";
import { Link } from "react-router-dom";
import BookMatch_Logo from "../img/BookMatch_Logo.png"
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light btn-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/inicio">
                  <i className="fa fa-home p-2">Inicio</i>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-book p-2"></i>
                  Libros
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="losmasleidos">
                      Los Más Leídos
                    </Link>
                    <Link className="dropdown-item" to="ficción">
                      Ficción
                    </Link>
                    <Link className="dropdown-item" to="Romance">
                      Romance
                    </Link>
                    <Link className="dropdown-item" to="historia">
                      Historia
                    </Link>
                    <Link className="dropdown-item" to="misteriosysuspenso">
                      Misterios y Suspenso
                    </Link>
                    <Link className="dropdown-item" to="clasicos">
                      Clásicos
                    </Link>
                    <Link className="dropdown-item" to="infantilyjuvenil">
                      Infantil y Juvenil
                    </Link>
                    <Link className="dropdown-item" to="clasicos">
                      Clásicos
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user p-2"></i>
                  Mi cuenta
                </Link>
                {/* <span className="text-nowrap bd-highlight">Ingesa o Regístrate</span> */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="login">
                      Iniciar Sesión
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="login">
                      Regístrate
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="fotoperfil">
                      Foto Perfil
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="cerrarsesion">
                      Cerrar Sesión
                    </Link>
                  </li>
                </ul>
              </li>
                          <li id="nav-item">
                <Link className="nav-link text-white" to="nosotros">
                Nosotros
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Título, Autor"
                aria-label="Search"
              />
              <button className="btn btn-light" type="submit">
                Búsqueda
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;