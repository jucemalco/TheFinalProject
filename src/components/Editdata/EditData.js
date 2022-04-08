import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import Footer2 from "../FotterLogueado/Footer2";
import "./EditData.css";
import BookMatch_Logo from "../../images/BookMatch_Logo.png";

const EditData = () => {

    // LOCAL STORAGE DONDE ESTÁN GUARDADO ID DEL INICIO DE SESIÓN
    let userinfo = localStorage.getItem('userinfo');
    userinfo = JSON.parse(userinfo)
    console.log(userinfo.user.id)

    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        name: "",
        surname: "",
        password: ""
    });

    const onChange = (evento) => {
        setState({ ...state, [evento.target.name]: evento.target.value })
    }
    const onSubmit = (evento) => {
        evento.preventDefault()
        actions.editUser(state, evento, userinfo.user.id)
        console.log(state)
    }
    const deleteUser = () => {
        actions.deleteUser(userinfo.user.id, state)
        console.log(userinfo.user.id)
    }
    return (
        <>
            <ProfileNavbar />
            <div className="container edit">
                <div className="image2">
                    <img src={BookMatch_Logo} style={{ width: "50%", marginTop: "0px" }} />
                </div>
                <h3 className="form-title text text-center edittitle" style={{ fontFamily: "sans-serif" }}>Editar Mis Datos</h3>
                <form onSubmit={(evento) => onSubmit(evento)} >
                    <div className=" col-6 titleform1">
                        <label htmlFor="formGroupExampleInput" className="form-label d-flex" style={{ fontFamily: "sans-serif" }}>Nombres</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder=""
                            value={state.name}
                            required
                            onChange={(evento) => onChange(evento)} />
                    </div>

                    <div className=" col-6 titleform1">
                        <label htmlFor="formGroupExampleInput2" className="form-label d-flex" style={{fontFamily: "sans-serif" }}>Apellidos</label>
                        <input
                            name="surname"
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                            required
                            onChange={(evento) => onChange(evento)} />
                    </div>


                    <div className=" col-6 titleform1">
                        <label htmlFor="inputEmail4" className="form-label d-flex" style={{ fontFamily: "sans-serif" }}>Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="inputEmail4"
                            required
                            onChange={(evento) => onChange(evento)} />
                    </div>


                    <div className="col-12 mb-4 text-center mt-3">
                        <button type="submit" className="btn btn-outline-light gradient-custom-1 px-4" style={{ borderRadius: "25px", width: "25%", fontFamily: "sans-serif" }}>Guardar</button>
                    </div>
                    <div className="col-12 mb-4 text-center mt-3">
                        <button className="btn btn-outline-light gradient-custom-1 px-4" onClick={() => deleteUser()} style={{ borderRadius: "25px", width: "30%", fontFamily: "sans-serif" }}>Eliminar Perfil</button>
                    </div>
                </form>
            </div>
            <Footer2 />
        </>
    )
}


export default EditData;
