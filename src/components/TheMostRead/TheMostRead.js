import React from "react";
import "./TheMostRead.css";
import Footer2 from "../FotterLogueado/Footer2";


const TheMostRead = () => {

    return <>

    <div className="container theMostRead">
        <div className="title-most-read mt-3 p-4">
            <h1>Los Más Leídos</h1>
            <hr></hr>
        </div>

        <div className="text">
            <h5 className="card-title">¿Cuáles son los libros más leídos actualmente?</h5>
            <p id="card-text" >Si te gusta estar al tanto de los últimos best sellers y la actualidad literaria o si quieres regalar un libro e ir a lo seguro, lo que necesitas es conocer cuáles son los libros más leídos. En <strong>BookMatch</strong>  encuentra los libros más populares, esos de los que todo el mundo está hablando, los libros más recomendados entre lectores, los más valorados por la crítica, premiados con diferentes galardones y los best sellers internacionales y déjate inspirar por el panorama de la actualidad literaria para encontrar tus próximas lecturas o los mejores libros. Solo tienes que hacer <strong>Match.</strong></p>
        </div>

        <div className="container">
            <div className="row mt-5">
                <div className="col-4" >
                    <img
                        src="https://www.antartica.cl/media/catalog/product/9/7/9789500766647_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=2%202x"

                        alt="..."
                        style={{ width: "18rem"}}/>
                    <h3 className="title mt-3 fw-bold fs-5">Violeta</h3>
                    <h6 className="subtitle fs-5">Isabel Allende</h6>
                </div>
                <div className="col-4">

                    <img
                        src="https://www.antartica.cl/media/catalog/product/9/7/9789566026969_1_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=2%202x"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-5">Fleur Mi Desesperada Decisión</h3>
                    <h6 className="subtitle fs-5">Ariana Godoy</h6>
                </div>
                <div className="col-4">
                    <img
                        src="https://www.antartica.cl/media/catalog/product/B/o/Boulevard_9789566026914_1.JPG?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=2%202x"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-5">Boulevard</h3>
                    <h6 className="subtitle fs-5">Flor M. Salvador</h6>
                </div>

                <div className="col-4 p-5 mt-4">
                    <img
                        src="https://www.antartica.cl/media/catalog/product/9/7/9789569963599_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg&dpr=2%202x"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-5">Todo Lo Que Nunca Fuimos</h3>
                    <h6 className="subtitle fs-5">Alice Kellen</h6>
                </div>

                <div className="col-4 p-5 mt-4">
                    <img
                        src="https://www.antartica.cl/media/catalog/product/9/7/9789569963605_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg&dpr=2%202x"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-5">Todo Lo Que Somos Juntos</h3>
                    <h6 className="subtitle fs-5">Alice Kellen</h6>
                </div>

                <div className="col-4 p-5 mt-4"> 
                    <img
                        src="https://www.antartica.cl/media/catalog/product/9/7/9789566145059_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=2%202x"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-5">Joana Marcús</h3>
                    <h6 className="subtitle fs-5">Trilogía Fuego #1 Cidudades de Humo</h6>
                </div>
            </div>
        </div>
        </div>
        <Footer2 />
    </>
}
export default TheMostRead;
