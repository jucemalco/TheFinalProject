import React from "react";
import "./TheMostRead.css";


const TheMostRead = () => {

    return <>
        <div className="title">
            <h1>Los Más Leídos</h1>
            <hr></hr>
        </div>

        <div className="text">
            <h5 className="card-title">¿Cuáles son los libros más leídos actualmente?</h5>
            <p id="card-text" >Si te gusta estar al tanto de los últimos best sellers y la actualidad literaria o si quieres regalar un libro e ir a lo seguro, lo que necesitas es conocer cuáles son los libros más leídos. En BookMatch encuentra los libros más populares, esos de los que todo el mundo está hablando, los libros más recomendados entre lectores, los más valorados por la crítica, premiados con diferentes galardones y los best sellers internacionales y déjate inspirar por el panorama de la actualidad literaria para encontrar tus próximas lecturas o los mejores libros. Solo tienes que hacer Match.</p>
        </div>

        <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src="https://d22fxaf9t8d39k.cloudfront.net/2175915b8540c5141766e48176d6dc657a9d12f29023a60645e466f060a0081472229.png"

                        alt="..."
                        style={{ width: "18rem" }} />
                    <h3 className="title mt-3">Isabel Allende</h3>
                    <h4 className="subtitle">Violeta</h4>
                </div>
                <div className="col-4">

                    <img
                        src="https://d22fxaf9t8d39k.cloudfront.net/2175915b8540c5141766e48176d6dc657a9d12f29023a60645e466f060a0081472229.png"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3">Isabel Allende</h3>
                    <h4 className="subtitle ">Violeta</h4>
                </div>
                <div className="col-4">
                    <img
                        src="https://d22fxaf9t8d39k.cloudfront.net/2175915b8540c5141766e48176d6dc657a9d12f29023a60645e466f060a0081472229.png"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3">Isabel Allende</h3>
                    <h4 className="subtitle ">Violeta</h4>
                </div>

                <div className="col-4 p-5">
                    <img
                        src="https://d22fxaf9t8d39k.cloudfront.net/2175915b8540c5141766e48176d6dc657a9d12f29023a60645e466f060a0081472229.png"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3">Isabel Allende</h3>
                    <h4 className="subtitle">Violeta</h4>
                </div>

                <div className="col-4 p-5">
                    <img
                        src="https://d22fxaf9t8d39k.cloudfront.net/2175915b8540c5141766e48176d6dc657a9d12f29023a60645e466f060a0081472229.png"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3">Isabel Allende</h3>
                    <h4 className="subtitle ">Violeta</h4>
                </div>

                <div className="col-4 p-5">
                    <img
                        src="https://d22fxaf9t8d39k.cloudfront.net/2175915b8540c5141766e48176d6dc657a9d12f29023a60645e466f060a0081472229.png"
                        style={{ width: "18rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3">Isabel Allende</h3>
                    <h4 className="subtitle">Violeta</h4>
                </div>
            </div>
        </div>
    </>
}
export default TheMostRead;
