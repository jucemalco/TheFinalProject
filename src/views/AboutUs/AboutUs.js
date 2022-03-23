import React from "react";
import Nico from "../../images/Nico.png"
import Vane from "../../images/Vane.png"
import "./AboutUs.css"
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { BsLinkedin } from 'react-icons/bs';

const AboutUs = () => {
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
        </>
    )
}

export default AboutUs;

