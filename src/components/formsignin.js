import React from "react";

const Form = () => {
  return (
    <div className="container">
      <legend>
        {" "}
        <h1 className="form-title text-white">Crear una nueva cuenta</h1>
      </legend>
      <h2 className="form-subtitle text-white">Información Personal</h2>
      <br></br>
      <form>
        <form>
        <div class="mb-3">
            <label for="exampleInputNombre" class="form-label text-white">
              Nombre <i class="fa fa-asterisk fa-xs" style={{ color: "#fd4444" }}></i>
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputNombre"
              aria-describedby="nombreHelp"
            />
            
          </div>
          <div class="mb-3">
            <label for="exampleInputApellido" class="form-label text-white">
             Apellidos <i class="fa fa-asterisk fa-xs" style={{ color: "#fd4444" }}></i>
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputApellido"
              aria-describedby="apellidoHelp"
            />
            
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail" class="form-label text-white">
              Correo Electrónico <i class="fa fa-asterisk fa-xs" style={{ color: "#fd4444" }}></i>
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text text-white">
              Nunca debes compartir tu correo con nadie
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text-white">
              Contraseña <i className="fa fa-asterisk fa-xs" style={{ color: "#fd4444" }}></i>
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
            <div id="passwordHelpBlock" className="form-text text-white">
      Tu contraseña debe contener:
      8 o más carácteres,
      letras mayúsculas y minúsculas,
      al menos un número.
    </div>
          </div>
         <div className="asterisk"><i class="fa fa-asterisk  p-2" ></i>Campos Obligatorios</div>
         <button className="btn btn-outline-light gradient-custom-2 mt-3" type="button">
                Crear una cuenta
              </button>
        </form>
      </form>
      <ul></ul>
    </div>
  );
};

export default Form;