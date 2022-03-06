import React, { useContext } from "react";
import Card from "../components/card";
import { Context } from "../store/appContext";

const Home = () => {
    const { store } = useContext(Context);
    return (
        <>
            <div className="container">
            <h1 className="color">Novedades</h1>
                <div className="row">
                    {store.products.map((p, i) => <div className="col-4">
                        <Card
                            title={p.title}
                            editorial={p.editorial}
                            autor={p.autor}
                        />
                    </div>)} 
                </div>
            </div>
        </>
    )
}

export default Home;

