import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import BookMatch_Logo from "../../images/BookMatch_Logo.png"

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
      <div className="container col-xs col-sm col-md col-lg form">
        <div className="image2">
          <img src={BookMatch_Logo} style={{ width: "50%", heigth: "-30px", marginTop: "5px", marginBottom: "-17px" }} />
        </div>
        <legend>
          {" "}
          <h3 style={{ fontFamily: "sans-serif", color:"#ddd5dd", marginTop: "-20px", marginBottom: "-10px" }} className="form-title text-center">Crear una nueva cuenta</h3>
        </legend>
        <h6 style={{ fontFamily: "sans-serif", color:"#ddd5dd", marginTop: "0px", marginBottom: "-10px" }} className="form-title text-center">Información Personal</h6>
        <br></br>
        
        <form onSubmit={(evento) => onSubmit(evento)}>
          <div className="mb-3 ms-4 me-4">
            <label
              for="exampleInputNombre"
              className="form-label d-flex text" style={{fontFamily: "sans-serif", color:"#ddd5dd"}}
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
              className="form-label d-flex text" style={{fontFamily: "sans-serif", color:"#ddd5dd"}}
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
              className="form-label d-flex text" style={{fontFamily: "sans-serif", color:"#ddd5dd"}}
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
            <div id="emailHelp" className="form-text d-flex" style={{color: "#ababab"}} >
              Nunca debes compartir tu correo con nadie
            </div>
          </div>
          <div className="mb-3 ms-4 me-4">
            <label
              for="exampleInputPassword1"
              class="form-label d-flex text" style={{fontFamily: "sans-serif", color:"#ddd5dd"}}
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
              className="form-text d-flex text-start" style={{color: "#ababab"}}
            >
              Tu contraseña debe contener: 8 o más carácteres, letras
              mayúsculas y minúsculas, al menos un número.
            </div>
          </div>
          <div className="asterisk d-flex ms-4">
            <i
              className="fa fa-asterisk"
              style={{ fontSize: 10, color: "#fd4444" }}
            >  Campos Obligatorios</i>
          </div>

          <button
            className="btn btn-outline-light gradient-custom mt-3"
            style={{ borderRadius: "25px", width: "30%", marginBottom: "20px" }}
            type="submit"
          >
            Crear una cuenta
          </button>
        </form>
        <ul></ul>
      </div>
      <Footer />
    </>
  );
};

export default Form;
