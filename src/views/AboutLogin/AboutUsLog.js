import React from "react";
import Nico from "../../images/Nico.png"
import Vane from "../../images/Vane.png"
import "./AboutUsLog.css"
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { BsLinkedin } from 'react-icons/bs';
import Footer2 from "../../components/FotterLogueado/Footer2"

const AboutUsLog = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div>
                    <img className="circular--square" src={Nico} />
                    <h1 className="us">Nicolás Aravena</h1>
                    <Link className="iconlinkedin" to="">
                        <BsLinkedin />
                    </Link>
                </div>
                <div>
                    <img className="circular--square" src={Vane} />
                    <h1 className="us">Vanessa Pinchetti</h1>
                    <Link className="iconlinkedin" to="">
                        <BsLinkedin />
                    </Link>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default AboutUsLog;

