import React from "react";
import Nico from "../../images/Nico.png"
import Vane from "../../images/Vane.png"
import Monica from "../../images/Monica.png"
import Julio from "../../images/Julio.png"
import "./AboutUsLog.css"
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar"
import { BsLinkedin } from 'react-icons/bs';
import Footer2 from "../../components/FotterLogueado/Footer2"


const AboutUsLog = () => {
    return (
        <>
           <ProfileNavbar />
           <div className="container">
                <h1 style={{fontFamily:"sans-serif"}} className="title mt-5">Nuestro Equipo</h1>
                <hr></hr>
                <div className="row">
                    <div className="col-ms col-md col-lg mt-4">
                        <img className="rounded-circle mb-3" src={Nico} />
                        <h3 style={{fontFamily:"sans-serif"}} className="us">Nicolás Aravena</h3>

                        <a className="iconlinkedin fs-3" href="https://www.linkedin.com/in/thenoa96//" target="_blank"
                            rel="noopener noreferrer">
                            <BsLinkedin />
                        </a>

                    </div>
                    <div className="col-ms col-md col-lg mt-4">
                        <img className="rounded-circle mb-3" src={Vane} />
                        <h3 style={{fontFamily:"sans-serif"}} className="us">Vanessa Pinchetti</h3>
                        <a className="iconlinkedin fs-3" href="https://www.linkedin.com/in/vanessa-pinchetti-inostroza-a73712160/" target="_blank"
                            rel="noopener noreferrer">
                            <BsLinkedin />
                        </a>
                    </div>
                    <div className="col-ms col-md col-lg mt-4">
                        <img className="rounded-circle mb-3" src={Monica} />
                        <h3 style={{fontFamily:"sans-serif"}} className="us">Mónica Calle</h3>
                        <a className="iconlinkedin fs-3" href="https://www.linkedin.com/in/m%C3%B3nica-calle-47b199227/" target="_blank"
                            rel="noopener noreferrer">
                            <BsLinkedin />
                        </a>
                    </div>

                      <div className="col-ms col-md col-lg mt-4">
                        <img className="rounded-circle mb-2" src={Julio} />
                        <h3 style={{fontFamily:"sans-serif"}} className="us">Julio Maldonado</h3>
                        <a className="iconlinkedin fs-3" href="" target="_blank"
                            rel="noopener noreferrer">
                            <BsLinkedin />
                        </a>
                    </div> 
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default AboutUsLog;

