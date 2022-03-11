import React, { useContext, useEffect } from "react";
import Card from "../components/card";
import { Context } from "../store/appContext";
import Carousel from "../components/Carousel";
// import { Link } from "react-router-dom";

const Home = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getProducts()
    }, [])
    return (
        <>
             <Carousel />
            <div className="container">
                <h1 className="color">Novedades</h1>
                <div className="row">
                    {store.products && store.products.map((p, i) => <div className="col-4">
                        <Card
                            title={p.title}
                            autor={p.autor}
                            editorial={p.editorial}
                        />
                    </div>)}
                </div>
            </div>
        </>
    )

export default Home;

