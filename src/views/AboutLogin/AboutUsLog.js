import React from "react";
import Nico from "../../images/Nico.png"
import Vane from "../../images/Vane.png"
import "./AboutUsLog.css"
import Navbar from "../../components/Navbar/Navbar";
import { BsLinkedin } from 'react-icons/bs';
import Footer2 from "../../components/FotterLogueado/Footer2"

const AboutUsLog = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Nuestro Equipo</h1>
                <p>Eiusmod aliquip laboris amet in. Ut fugiat duis ex occaecat ex enim eu mollit. Elit sit non reprehenderit ut consequat sunt laborum nisi magna amet nisi minim anim elit.</p>
                <div>
                    <img className="circular--square" src={Nico} />
                    <h1 className="us">Nicolás Aravena</h1>
                    <a className="iconlinkedin" href="https://www.linkedin.com/in/thenoa96/">
                        <BsLinkedin />
                    </a>
                    
                </div>
                <div>
                    <img className="circular--square" src={Vane} />
                    <h1 className="us">Vanessa Pinchetti</h1>
                    <a className="iconlinkedin" href="https://www.linkedin.com/in/vanessa-pinchetti-inostroza-a73712160/">
                        <BsLinkedin />
                    </a>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default AboutUsLog;

