import React from "react"

const Carousel = ( ) => {
    return <div className="container">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block carousel-image w-100" src="https://thumbs.dreamstime.com/b/concepto-de-libro-audio-con-libros-abiertos-taza-caf%C3%A9-y-aud%C3%ADfonos-vintage-espacio-panor%C3%A1mico-buena-copia-auriculares-o-banner-201176625.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block carousel-image w-100" src="https://st2.depositphotos.com/39463116/46456/i/450/depositphotos_464567262-stock-photo-concept-of-progress-in-education.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block carousel-image w-100" src="https://picsum.photos/id/237/200/300" alt="Third slide" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    </div>
}

export default Carousel;