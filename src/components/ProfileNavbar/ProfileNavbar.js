import React from "react";
import { Link } from "react-router-dom";
import './ProfileNavbar.css'



const ProfileNavbar = () => {


    return (
        <div className="navbar navbar-expand-lg navbarProfile mt-5"> 
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        {/* <div className="navbar-image">
                  <img src={logoImage} style={{ width: "160px" }} />
                </div> */}
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

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ">

                                <li className="nav-item">
                                    <Link className="nav-link text-white p-5" to="#">Mis Match  <i class="fa fa-heart" aria-hidden="true" style={{ color: "#8b6685" }}></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white p-5" to="#">Mis Libros Publicados <i class="fa fa-book" aria-hidden="true"></i></Link>
                                </li>
                                {/* <li className="nav-item">
                                    
                                    <Link className="nav-link text-white p-5" to="/miperfil/misfavoritos">Mis Favoritos <i class="fa fa-heart-o" aria-hidden="true" style={{ color: "#fa5d5d" }} ></i></Link>
                                </li> */}





                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

        </div>







    );
};

export default ProfileNavbar;


