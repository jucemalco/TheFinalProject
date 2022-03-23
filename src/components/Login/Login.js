import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import BookMatch_Logo from "../../images/BookMatch_Logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

/*LOGIN INICIO DE SESIÓN*/
const Login = () => {
  //DETRUCTURING 
  const { store, actions } = useContext(Context)
  //Estado del state
  const [state, setState] = useState({});
  console.log(state)
  const onChange = (evento) => {
    setState({ ...state, [evento.target.name]: evento.target.value })
  }
  //PARA INGRESAR AL PERFIL USUARIO

  const navegate = useNavigate();
  //const history = useHistory();

  const onSubmit = (evento) => {
    evento.preventDefault()
    actions.login(state, evento, navegate)
    console.log(state)
  }
  return (
    <> <Navbar />
      <div className="container loginback col-6">
        <div className="image">
          <img src={BookMatch_Logo} style={{ width: "50%", heigth: "30%" }} />
        </div>
        <h3 className="text-center ms-5">Somos el Team BookMatch</h3>
        <h6 className="text-center ms-5">Por favor iniciar sesion</h6>
        <div className="row justify-content-center">
          <form
            onSubmit={(evento) => { onSubmit(evento) }}>
            <div className="row justify-content-center">
              <label className="col-md-auto text-white" htmlFor="email">
                <i
                  className="fa fa-user fa-2x ms-2"
                  style={{ color: "#d0bdd8" }}
                ></i>
              </label>
              <div className="col-4">
                <input
                  type="email"
                  placeholder="Escribe tu email"
                  className="form-control mb-3"
                  id="email"
                  value={state.email}
                  name="email"
                  required
                  onChange={(evento) => onChange(evento)
                  }
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <label className="col-md-auto text-white" htmlFor="password">
                <i
                  className="fa fa-unlock-alt fa-2x ms-2"
                  style={{ color: "#d0bdd8" }}
                ></i>
              </label>
              <div className="col-4">
                <input
                  type="password"
                  placeholder="Escribe tu contraseña"
                  className="form-control mb-3"
                  id="password"
                  value={state.password}
                  name="password"
                  required
                  onChange={(evento) => onChange(evento)}
                />
              </div>
            </div>
            <div className="button text-center ms-5">
              <button
                className="btn btn-outline-light gradient-custom-2 mt-3"
                type="submit" // onClick={() => { navegate("/src/UserProfile/UserProfile") }}// 
              >
                Iniciar Sesion
              </button>
            </div>
            <h6 className="text-center mt-3  ms-5">¿Recuperar contraseña?</h6>

            <h6 className="text-center mt-4  ms-5">
              ¿Aún no tienes una cuenta?{" "}
              <div>
                <Link
                  to="/login/newaccount"
                  className="btn btn-outline-light gradient-custom-2 mt-3"
                >
                  Resgistrate
                </Link>
              </div>
            </h6>
          </form>
        </div>
      </div>
      <Footer />
    </>);
};

export default Login;
