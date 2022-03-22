import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";


const EditData = () => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({});
    console.log(state)
    const onChange = (evento) => {
        setState({ ...state, [evento.target.name]: evento.target.value })
    }
    const onSubmit = (evento) => {
        evento.preventDefault()
        actions.editData(state, evento)
        console.log(state)
    }


    return (
        <>
        <ProfileNavbar />
        <div class="container loginback ">

            <h2 className="form-title text-white text-center mt-4">Editar Datos</h2>

            <form onSubmit={(evento) => onSubmit(evento)} >

                <div className="col-md-6 text-white p-4">
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



                <div className="col-md-6 text-white p-4">
                    <label htmlFor="formGroupExampleInput2" className="form-label d-flex">Apellidos</label>
                    <input 
                    name="surname"
                    type="text" 
                    className="form-control" 
                    id="formGroupExampleInput2" 
                    placeholder=""
                    required
                    onChange={(evento) => onChange(evento)}  />
                </div>


                <div class="col-md-6 text-white p-4">
                    <label htmlFor="inputEmail4" class="form-label d-flex">Email asociado cambiar</label>
                    <input 
                    name="email"
                    type="email" 
                    class="form-control" 
                    id="inputEmail4" 
                    required
                    onChange={(evento) => onChange(evento)} />
                </div>


                <div class=" col-12 p-4 mb-2 text-center">
                    <button type="submit" class="btn btn-outline-light gradient-custom-2 px-4">Guardar</button>
                </div>
            </form>
        </div>
    </>
    )
}


export default EditData;
