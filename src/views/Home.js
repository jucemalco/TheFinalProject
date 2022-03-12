import React, { useContext, useEffect } from "react";
import Card from "../components/card";
import { Context } from "../store/appContext";
import Carousel from "../components/Carousel";

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
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
        <div>
          <h1>Autores</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
