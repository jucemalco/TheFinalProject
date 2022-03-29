import React from "react";
import Nico from "../../images/Nico.png"
import Vane from "../../images/Vane.png"
import Monica from "../../images/Monica.png"
import Julio from "../../images/Julio.png"
import "./AboutUs.css"
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { BsLinkedin } from 'react-icons/bs';
import Footer from "../../components/Footer/Footer"

const AboutUs = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <h1 className="title mt-3">Nuestro Equipo</h1>
                <hr></hr>
                <div className="row">
                    <div className="col-3 mt-5">
                        <img className="rounded-circle mb-3" src={Nico} />
                        <h3 className="us">Nicolás Aravena</h3>
                        <a className="iconlinkedin fs-3" href="https://www.linkedin.com/in/thenoa96/">
                        <BsLinkedin />
                    </a>
                    </div>
                    <div className="col-3 mt-5">
                        <img className="rounded-circle mb-3" src={Vane} />
                        <h3 className="us">Vanessa Pinchetti</h3>
                        <a className="iconlinkedin fs-3" href="https://www.linkedin.com/in/vanessa-pinchetti-inostroza-a73712160/">
                        <BsLinkedin />
                    </a>
                    </div>
                    <div className="col-3 mt-5">
                        <img className="rounded-circle mb-3" src={Monica} />
                        <h3 className="us">Mónica Calle</h3>
                        <a className="iconlinkedin fs-3" href="https://www.linkedin.com/in/m%C3%B3nica-calle-47b199227/">
                        <BsLinkedin />
                    </a>
                    </div>

                      <div className="col-3 mt-5">
                        <img className="rounded-circle mb-3" src={Julio} />
                        <h3 className="us">Julio Maldonado</h3>
                        <a className="iconlinkedin fs-3" href="">
                        <BsLinkedin />
                    </a>
                    </div> 
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;

