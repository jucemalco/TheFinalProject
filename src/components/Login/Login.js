import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import BookMatch_Logo from "../../images/BookMatch_Logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Login.css";
import { GoogleLogin } from "react-google-login";

/*LOGIN INICIO DE SESIÓN*/
const Login = () => {
  //DETRUCTURING
  const { store, actions } = useContext(Context);
  //Estado del state
  const [state, setState] = useState({});
  const onChange = (evento) => {
    setState({ ...state, [evento.target.name]: evento.target.value });
  };
  //PARA INGRESAR AL PERFIL USUARIO

  const navegate = useNavigate();
  //const history = useHistory();

  const onSubmit = (evento) => {
    evento.preventDefault();
    actions.login(state, evento, navegate);
  };

  const responseGoogle = (response) => {
    actions.googleAuth(response);
    navegate("/userprofile");
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="container login col-xs col-sm col-md col-lg">
        <div className="image">
          <img src={BookMatch_Logo} style={{ width: "50%", heigth: "30%", marginTop: "5px", marginBottom: "-17px" }} />
        </div>
        <h3 style={{ fontFamily: "sans-serif", color:"#ddd5dd" }} className="text-center mb-3">Somos el Team BookMatch</h3>
        <h6 style={{ fontFamily: "sans-serif",color:"#ddd5dd", marginTop: "-11px", marginBottom: "12px" }} className="text-center mt-1 mb-3">Por favor inicia tu sesión</h6>
        <div className="row justify-content-center">
          <form
            onSubmit={(evento) => {
              onSubmit(evento);
            }}
          >
            <div className="row justify-content-center">
              <label className="col-auto text-white" htmlFor="email">
                <i
                  className="fa fa-user fa-2x"
                  style={{ color: "#d0bdd8", marginLeft: "-40px" }}
                ></i>
              </label>
              <div className="col-4">
                <input
                  type="email"
                  placeholder="Escribe tu email"
                  className="form-control mb-3"
                  style={{ width: "130%", marginLeft: "-20px" }}
                  id="email"
                  value={state.email}
                  name="email"
                  required
                  onChange={(evento) => onChange(evento)}
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <label className="col-md-auto text-white" htmlFor="password">
                <i
                  className="fa fa-unlock-alt fa-2x"
                  style={{ color: "#d0bdd8", marginLeft: "-40px" }}
                ></i>
              </label>
              <div className="col-4">
                <input
                  type="password"
                  placeholder="Escribe tu contraseña"
                  className="form-control mb-3"
                  style={{ width: "130%", marginLeft: "-20px" }}
                  id="password"
                  value={state.password}
                  name="password"
                  required
                  onChange={(evento) => onChange(evento)}
                />
              </div>
            </div>
            <div className="button text-center">
              <button
                className="btn btn-outline-light gradient-custom mt-3"
                type="submit" // onClick={() => { navegate("/src/UserProfile/UserProfile") }}//
                style={{ borderRadius: "25px", width: "25%", marginBottom: "10px",fontFamily: "sans-serif" }}
              >
                Iniciar Sesion
              </button>
              
              <div className="button my-3">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="iniciar sesion con google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
            <h6 style={{ fontFamily: "sans-serif", color:"#ddd5dd" }} className="text-center mt-3">¿Recuperar contraseña?</h6>
            <h6 style={{ fontFamily: "sans-serif", color:"#ddd5dd" }} className="text-center mt-3">
              ¿Aún no tienes una cuenta?{" "}
              </h6>
              <div>
                <Link
                  to="/login/newaccount"
                  className="btn btn-outline-light gradient-custom mt-2 mb-4"
                  style={{ borderRadius: "25px", width: "25%", fontFamily: "sans-serif", color:"#ddd5dd" }}
                  >
                  Regístrate
                </Link>
              </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
