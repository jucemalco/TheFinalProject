import React from "react";
import logoImage from "../../img/BookMatch_Logo.png";
import "../../styles/home.css";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={logoImage} 
      style={{width: "50%", heigth: "30%"}}        />
      </div>
      <h3 className="text-center">Somos el Team BookMatch</h3>
      <h6 className="text-center">Por favor iniciar sesion</h6>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form>
          <div className="user d-lg-inline-flex">
            <i class="fa fa-user"></i>
            </div>
            <input
              type="user"
              className="form-control mb-2"
              placeholder="Usuario"
            />

            <i class="fa fa-unlock-alt" aria-hidden="true"></i>

            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
            />

            <div class="d-grid gap-2">
              <button
                class="btn btn-outline-light gradient-custom-2 mt-3"
                type="button"
              >
                Iniciar Sesion
              </button>
            </div>
            <h6 className="text-center mt-2">¿Recuperar contraseña?</h6>
            
            <h6 className="text-center mt-4">
              ¿Aún no tienes una cuenta?{" "}

              {/* <button className="btn btn-outline-light gradient-custom-2 mt-3" type="button">
                Resgistrarse
              </button> */}
              <div>
               <Link
               to="newaccount"
                className="btn btn-outline-light gradient-custom-2 mt-3"
              >
                Resgistrarse
              </Link> 
              </div>
              
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;