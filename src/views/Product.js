import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";

const Product = () => {
    const { actions } = useContext(Context);
    const [datos, setDatos] = useState({
        title: '',
        autor: "",
        editorial: "",
        review: ""
    })
    const handleInputChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const enviarDatos = (e) => {
        actions.saveProduct(e)
    }
    return (
        <Fragment>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Publica tu Libro</h1>
                    </div>
                </div>
                <form onSubmit={actions.enviarDatos}>
                    <div className="mb-3 row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Titulo</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                value={datos.title}
                                className="form-control"
                                id="title"
                                onChange={handleInputChange}
                                name="title"
                                placeholder="Title" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="autor" className="col-sm-2 col-form-label">Autor</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                value={datos.autor}
                                className="form-control"
                                id="autor"
                                onChange={handleInputChange}
                                name="autor"
                                placeholder="Autor" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="editorial" className="col-sm-2 col-form-label">Editorial</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                value={datos.editorial}
                                className="form-control"
                                id="editorial"
                                onChange={handleInputChange}
                                name="editorial"
                                placeholder="Editorial" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="editorial" className="col-sm-2 col-form-label">Reseña</label>
                        <div className="col-sm-10">
                            <input
                                aria-label="With textarea"
                               
                                value={datos.review}
                                className="form-control"
                                id="review"
                                onChange={handleInputChange}
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
        </Fragment>
    )
}

export default Product; 