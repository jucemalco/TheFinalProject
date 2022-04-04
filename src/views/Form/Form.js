import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Form.css";
import { useNavigate } from "react-router-dom";

/* FORMULARIO PARA REGISTRARSE*/
const Form = () => {
  //DETRUCTURING
  const { store, actions } = useContext(Context);
  //Estado del state
  const [state, setState] = useState({});
  const navegate = useNavigate();
  console.log(state);
  const onChange = (evento) => {
    setState({ ...state, [evento.target.name]: evento.target.value });
  };
  const onSubmit = (evento) => {
    evento.preventDefault();
    actions.createUser(state, navegate);
    console.log(state);
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="container">
        <div className="form">
          <legend>
            {" "}
            <h1 style={{fontFamily:"fantasy"}} className="form-title text-white">Crear una nueva cuenta</h1>
          </legend>
          <h2 style={{fontFamily:"fantasy"}} className="form-subtitle text-white">Información Personal</h2>
          <br></br>

          <form onSubmit={(evento) => onSubmit(evento)}>
            <div className="mb-3 ms-4 me-4">
              <label
                for="exampleInputNombre"
                className="form-label d-flex text-white"
              >
                Nombre{" "}
                <i
                  className="fa fa-asterisk fa-xs "
                  style={{ fontSize: 6, color: "#fd4444" }}
                ></i>
              </label>
              <input
                name="name"
                type="text"
                class="form-control"
                id="exampleInputNombre"
                aria-describedby="nombreHelp"
                value={state.name}
                required
                onChange={(evento) => onChange(evento)}
              />
            </div>
            <div className="mb-3 ms-4 me-4">
              <label
                for="exampleInputApellido"
                className="form-label d-flex text-white"
              >
                Apellidos{" "}
                <i
                  class="fa fa-asterisk fa-xs "
                  style={{ fontSize: 6, color: "#fd4444" }}
                ></i>
              </label>
              <input
                name="surname"
                type="text"
                class="form-control"
                id="exampleInputApellido"
                aria-describedby="apellidoHelp"
                required
                onChange={(evento) => onChange(evento)}
              />
            </div>
            <div className="mb-3 ms-4 me-4">
              <label
                for="exampleInputEmail"
                className="form-label d-flex text-white"
              >
                Correo Electrónico{" "}
                <i
                  className="fa fa-asterisk fa-xs"
                  style={{ fontSize: 6, color: "#fd4444" }}
                ></i>
              </label>
              <input
                name="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={(evento) => onChange(evento)}
              />
              <div id="emailHelp" className="form-text d-flex text-white">
                Nunca debes compartir tu correo con nadie
              </div>
            </div>
            <div className="mb-3 ms-4 me-4">
              <label
                for="exampleInputPassword1"
                class="form-label d-flex text-white"
              >
                Contraseña{" "}
                <i
                  className="fa fa-asterisk fa-xs"
                  style={{ fontSize: 6, color: "#fd4444" }}
                ></i>
              </label>
              <input
                name="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                required
                onChange={(evento) => onChange(evento)}
              />
              <div
                id="passwordHelpBlock"
                className="form-text d-flex text-white"
              >
                Tu contraseña debe contener: 8 o más carácteres, letras
                mayúsculas y minúsculas, al menos un número.
              </div>
            </div>
            <div className="asterisk d-flex ms-4">
              <i 
                className="fa fa-asterisk"
                style={{ fontSize: 6, color: "#fd4444" }}
              >  Campos Obligatorios</i>
            </div>

            <button
              className="btn btn-outline-light gradient-custom mt-3" 
              style={{borderRadius: "25px", width: "20%"}}
              type="submit"
            >
              
              Crear una cuenta
            </button>
          </form>
          <ul></ul>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Form;
