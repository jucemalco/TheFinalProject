import React, { useContext } from "react";
import BookMatch_Logo from "../../images/BookMatch_Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { Dropdown, DropdownButton } from "react-bootstrap";



export const Navbar = () => {
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
          <Link className="navbar-brand" to="/">
            <div className="navbar-image ms-5 me-5">
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
            <span className="navbar-toggler-icon" ></span> 
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" buttons navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                  <i className="fa fa-home p-2"><span style={{fontFamily:"sans-serif"}} className="p-2">Inicio</span></i> 
                </Link>
              </li>
              <li className="nav-item dropdown" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="navbarDropdown" 
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 
                  <i className="fa fa-book p-2"></i>
                  <span style={{fontFamily:"sans-serif"}}> Libros</span>
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
              {/* <li className="nav-item dropdown" >
                <Link className="nav-link dropdown-toggle text-white" to="/login/" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                   <i className="fa fa-heart-o p-2" style={{ color: "#fa5d5d" }}></i> 
                  <span>Mis Favoritos</span> 
                </Link>
              </li> */}
              <li id="nav-item">
                <Link className="nav-link text-white"  to="/about/" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                  <span style={{fontFamily:"sans-serif"}}>Nosotros</span>
                </Link>
              </li>
            </ul>

            <form className="d-flex me-5">
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
              <Link className="nav-link text-white" to="/login/" onMouseOver={MouseOver} onMouseOut={MouseOut} >
                <i className="" >Iniciar Sesión</i>
              </Link>
              <Link className="nav-link text-white" to="/login/newaccount/" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <i className="">Registrarse</i>
              </Link>
            <div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
