import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import Card2 from "../../components/Card2/Card2";
import { Context } from "../../store/appContext";
import Footer2 from "../../components/FotterLogueado/Footer2";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const Details = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //HACER DESDE AQUI SOLICITUD PARA ENVIAR ESTADO DE PENDIENTE EN STATUS #requestmatch
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    actions.getProduct(params.id);
  }, []);
  //si no está iniciado sesión, el objeto en localstorage no esta lleno. por lo tanto no puedes hacer match
  let userinfo = localStorage.getItem("userinfo");
  userinfo = JSON.parse(userinfo);
  console.log(userinfo.user.id);
  const booktitle = store.product?.title;
  //requestMatching
  // const [state, setState] = useState({
  //   book: store.product?.title,
  //   interested: userinfo.user.name,
  //   user_id: userinfo.user.id,
  //   status: "pending",
  // });
  console.log("primera cosa", store.product);
  // console.log("presente", store.product.title);
  const matching = () => {
    actions.requestMatching({
      book: store.product?.title,
      interested: userinfo.user.name,
      user_id: store.product.user_id,
      status: "pending",
    });
    setShow(false);
  };

  return (
    <>
      {" "}
      <ProfileNavbar />
      <div className="container mt-4">
        <div className="container background1">
          <div className="row align-items-start">
            <div className="col titledetails0">
              <h2 className="titledetails" style={{fontSize:"30px"}}>Titulo: {store.product?.title}</h2>
              <h4 className="titledetails2"style={{fontSize:"20px"}}>Autor: {store.product?.autor}</h4>
              <h4 className="titledetails2 mt-2"style={{fontSize:"20px"}}>Editorial: {store.product?.editorial}</h4>
              <h4 className="titledetails2 mt-2"style={{fontSize:"20px"}}>Reseña:</h4>
              <p className="mt-2" style={{textAlign:"justify"}}>{store.product?.review}</p>
              <Button className="btn-md btn-outline-light" style={{ background: "#4c3b80", color: "white", borderRadius: "25px", width: "25%" }} variant="primary mt-2" onClick={handleShow}>
                Hacer Match
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>MatchBook</Modal.Title>
                </Modal.Header>
                <Modal.Body>Seguro de hacer Match?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => matching()}>
                    Sí
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="col mt-5">
              <Card2 />
            </div>
          </div>
          <div className="imageposition">
            <img
              src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
              className="img-thumbnail"
              style={{ width: "350px", height: "300px" }}
              alt="..."
            />
            <img
              src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
              className="img-thumbnail"
              style={{ width: "350px", height: "300px" }}
              alt="..."
            />
            <img
              src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
              className="img-thumbnail"
              style={{ width: "350px", height: "300px" }}
              alt="..."
            />
            <img
              src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
              className="img-thumbnail"
              style={{ width: "350px", height: "300px" }}
              alt="..."
            />
            <img
              src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
              className="img-thumbnail"
              style={{ width: "350px", height: "300px" }}
              alt="..."
            />
            <img
              src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
              className="img-thumbnail"
              style={{ width: "350px", height: "300px" }}
              alt="..."
            />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Details;
