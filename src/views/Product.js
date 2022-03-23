import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import ProfileNavbar from "../components/ProfileNavbar/ProfileNavbar";
import Footer2 from "../components/FotterLogueado/Footer2.js"

const Product = () => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        title: "",
        autor: "",
        editorial: "",
        review: "",
        user_id: ""
    })
    const onChange = (e) => {
        setState({...state,[e.target.name] : e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        actions.saveProduct(state, e)
        console.log(state)
    }

    return ( 
        <>
        <ProfileNavbar />
    <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <h1 className="titleproduct">Publica tu Libro</h1>
                    </div>
                </div>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3 row formproduct">
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
                    <div className="mb-3 row formproduct">
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
                    <div className="mb-3 row formproduct">
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
                    <div className="mb-3 row formproductreview">
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
                    <div className="mb-3 formproduct">
                        <label htmlFor="" className="col col-form-label"></label>
                        <input type="file" className="form-control" id="inputGroupFile01" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Publicar
                        </button>
                    </div>
                    <div>
                        <form>
                            <input type="hidden"></input>
                        </form>
                    </div>
                </form>
            </div>
            <Footer2 />
    </>
    )
}

export default Product; 