import React, { useContext, useEffect } from "react";
import Card from "../components/Cards/Card";
import { Context } from "../store/appContext";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getProducts();
  }, []);
  return (
    <>
      <Carousel />
      <div className="container">
        <div>
          <h1>Novedades</h1>
        </div>
        <div className="row">
          {store.products &&
            store.products.map((p, i) => (
              <div
                key={i}
                className="col-md-4 d-flex justify-content-center align-items-center"
              >
                <Card title={p.title} autor={p.autor} editorial={p.editorial} />
              </div>
            ))}
        </div>
        <div>
          <h1>Autores</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
