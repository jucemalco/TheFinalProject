import React, { useContext, useEffect } from "react";
import Card from "../../components/Cards/Card";
import { Context } from "../../store/appContext";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import "./Home.css"

const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getProducts();
  }, []);
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container">
        <div className="mt-3 mb-5">
          <h1 className="title1">Novedades</h1>
        </div>
        <div className="row">
          {store.products && store.products.map((p, i) => (
              <div
                key={i}
                className="col-md-4 mb-3 d-flex justify-content-center align-items-center"
              >
                <Card title={p.title} autor={p.autor} editorial={p.editorial} />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
