import React from "react";
import { Link } from "react-router-dom";
import "./ProfileNavbar.css";
import BookMatch_Logo from "../../images/BookMatch_Logo.png";


const ProfileNavbar = () => {
  function MouseOver(event) {
    event.target.style.color = '#8b6685';
  }

  function MouseOut(event){
    event.target.style.color='';
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light btn-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/logueado/">
          <div className="navbar-image">
            <img src={BookMatch_Logo} style={{ width: "160px" }} alt="logo"/>
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
            <li className="nav-item" onMouseOver={MouseOver} onMouseOut={MouseOut}>
              <Link className="nav-link text-white" to="/logueado/">
                <i className="fa fa-home p-2">Inicio</i>
              </Link>
            </li>

            <li className="nav-item dropdown ms-2" onMouseOver={MouseOver} onMouseOut={MouseOut}>
              <Link
                className="nav-link dropdown-toggle text-white" 
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-book p-2" ></i>
                Libros
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                <li>
                  <Link className="dropdown-item" to="losmasleidos">
                    Los Más Leídos
                  </Link>
                  <Link className="dropdown-item" to="ficcion">
                    Ficción
                  </Link>
                  <Link className="dropdown-item" to="romance">
                    Romance
                  </Link>
                  <Link className="dropdown-item" to="historia">
                    Historico
                  </Link>
                  <Link className="dropdown-item" to="misteriosysuspenso">
                    Misterio y Suspenso
                  </Link>
                  <Link className="dropdown-item" to="clasicos">
                    Clásicos
                  </Link>
                  <Link className="dropdown-item" to="infantilyjuvenil">
                    Infantil y Juvenil
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ms-1" >
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

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <li>
                  <Link className="dropdown-item" to="/userprofile/" >
                    Mi perfil
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/miperfil/editdata/">
                    Editar Mis Datos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/product/">
                    Publica tu Libro
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/userprofile/aceptedmatch/">
                     Mis Match
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/userprofile/pendingmatch/">
                     Mis Match Pendientes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                     Mis Favoritos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/userprofile/">
                     Mis Libros Publicados
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ms-1" >
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
                  style={{ color: "#fa5d5d"}}
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
            </li>
            <li className="nav-item ms-1 mt-1">
              <Link className="nav-link text-white" to="/aboutuslog/">
                Nosotros
              </Link>
            </li>
          </ul>
            
              <Link className="nav-link text-white" to="/admin/product">
                Publica tu libro
              </Link>
           
          <form className="d-flex">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Título, Autor"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit" onMouseOver={MouseOver} onMouseOut={MouseOut}>
              Búsqueda
            </button>
          </form>

            <Link className="nav-link text-white" to="/login/" onMouseOver={MouseOver} onMouseOut={MouseOut}>
              <i className>Cerrar Sesión</i>
            </Link>
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
