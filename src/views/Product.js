import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Product = () => {
    const { actions, store } = useContext(Context);
    return <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Publica tu Libro</h1>
            </div>
        </div>
        <form onSubmit={actions.saveProduct}>
            <div className="mb-3 row">
                <label htmlfor="title" className="col-sm-2 col-form-label">Titulo</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        value={store.product.title}
                        className="form-control"
                        id="title"
                        onChange={actions.handleProductChange}
                        name="title"
                        placeholder="Title" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlfor="autor" className="col-sm-2 col-form-label">Autor</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        value={store.product.autor}
                        className="form-control"
                        id="autor"
                        onChange={actions.handleProductChange}
                        name="autor"
                        placeholder="Autor" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlfor="editorial" className="col-sm-2 col-form-label">Editorial</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        value={store.product.editorial}
                        className="form-control"
                        id="editorial"
                        onChange={actions.handleProductChange}
                        name="editorial"
                        placeholder="Editorial" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlfor="editorial" className="col-sm-2 col-form-label">Reseña</label>
                <div className="col-sm-10">
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
            </div>

            <div className="input-group mb-3">
                <label htmlfor="editorial" className="col-sm-2 col-form-label">Agrega tus fotos</label>
                <input type="file" className="form-control" id="inputGroupFile01" />
            </div>


            <div className="text-center">
                <button className="btn btn-primary" type="submit">
                    Publicar
                </button>
            </div>
        </form>
    </div>
}

export default Product; 