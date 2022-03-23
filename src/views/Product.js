import React, { useContext, useState } from "react";
import { Store } from "type-r";
import { Context } from "../store/appContext";

const Product = () => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        title: "",
        autor: "",
        editorial: "",
        review: ""
    })
    const onChange = (e) => {
        setState({...state,[e.target.name] : e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        actions.saveProduct(state, e)
        console.log(state)
    }

    return ( <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Publica tu Libro</h1>
                    </div>
                </div>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3 row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Titulo</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                onChange={(e) => onChange(e)}
                                name="title"
                                placeholder="Title" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="autor" className="col-sm-2 col-form-label">Autor</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="autor"
                                onChange={(e) => onChange(e)}
                                name="autor"
                                placeholder="Autor" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="editorial" className="col-sm-2 col-form-label">Editorial</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="editorial"
                                onChange={(e) => onChange(e)}
                                name="editorial"
                                placeholder="Editorial" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="editorial" className="col-sm-2 col-form-label">Reseña</label>
                        <div className="col-sm-10">
                            <input
                                aria-label="With textarea"
                                className="form-control"
                                id="review"
                                onChange={(e) => onChange(e)}
                                name="review"
                                placeholder="Reseña" />
                            
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <label htmlFor="editorial" className="col-sm-2 col-form-label">Agrega tus fotos</label>
                        <input type="file" className="form-control" id="inputGroupFile01" />
                    </div>


                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Publicar
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default Product; 

//ENVIAR EL ID DEL USUARIO, EL ID DE USUARIO EL PRIMARY KEY DE LA TABLA, Y RELACIONAR LA TABLA USUARIO CON EL "PRODUCTO"
//EL USUARIO QUE ESTA GUARDADO EN EL Store, AGREGAR A ESE OBJETO LOS DATOS DEL USUARIO. QUE ESTAN GUARDADOS EN EL STORE

// objeto tengo que enviar los dos ID, ID del libro, id del dueño, y el estado. 

// solicitudes que me han hecho y las solicitudes que he hecho. 

//mostrar los botones segun el estado. cuando consulto el la dB de los pendientes. 