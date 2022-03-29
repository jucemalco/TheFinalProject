import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import Footer2 from "../FotterLogueado/Footer2"
import "./EditData.css";

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

                <h2 className="form-title text-white text-center mt-4">Editar Mis Datos</h2>

                <form onSubmit={(evento) => onSubmit(evento)} >
                    
                    <div className=" col-6 text-white pe-5 ps-5 mx-auto mt-4">
                        <label htmlFor="formGroupExampleInput" className="form-label d-flex">Nombres</label>
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



                    <div className="col-6 text-white pe-5 ps-5 mx-auto mt-4">
                        <label htmlFor="formGroupExampleInput2" className="form-label d-flex">Apellidos</label>
                        <input
                            name="surname"
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                            required
                            onChange={(evento) => onChange(evento)} />
                    </div>


                    <div className="col-6 text-white pe-5 ps-5 mx-auto mt-4">
                        <label htmlFor="inputEmail4" className="form-label d-flex">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="inputEmail4"
                            required
                            onChange={(evento) => onChange(evento)} />
                    </div>


                    <div className=" col-12 p-4 mb-2 text-center mt-3">
                        <button type="submit" className="btn btn-outline-light gradient-custom-1 px-4">Guardar</button>
                        
                        <button className="btn btn-outline-light gradient-custom-1 px-4 mt-3" onClick={() =>deleteUser()}>Eliminar Perfil</button>
                    </div>
                </form>
            </div>
            <Footer2 />
        </>
    )
}


export default EditData;
