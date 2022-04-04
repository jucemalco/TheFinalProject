import React from "react"
import "./index.css";
<<<<<<< HEAD
import Foto1 from "../../images/Foto1.jpeg"
import Foto2 from "../../images/Foto2.jpeg"
import Foto3 from "../../images/Foto3.jpeg"
=======
import Foto1 from "../../images/Foto1.png"
import Foto2 from "../../images/Foto2.png"
import Foto3 from "../../images/Foto3.png"
>>>>>>> 7314956bf43a0e69dac40fa5b6281ea9c3185e9a

const Carousel = () => {
    return <div className="container-fluid mt-3">
        <div id="carouselExampleIndicators" className="carousel slide carousel-css" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Foto1} className="d-block carousel-image w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Foto2} className="d-block carousel-image w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Foto3} className="d-block carousel-image w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

}

export default Carousel;