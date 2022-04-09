import React from "react";
import "./TheMostRead.css";
import Navbar from "../Navbar/Navbar";
import Footer2 from "../FotterLogueado/Footer2";



const TheMostRead = () => {

    return <>
    <Navbar />
<div className="container theMostRead ">
        <div className="title-most-read mt-3 p-4">
            <h1 style={{fontFamily:"sans-serif", color:"#ddd5dd"}} >Los Más Leídos</h1>
            <hr style={{color:"#ddd5dd"}}></hr>
        </div>

        <div className="text">
            <h5 style={{fontFamily:"sans-serif", color:"#ddd5dd"}} className="card-title">¿Cuáles son los libros más leídos actualmente?</h5>
            <p id="card-text" >Si te gusta estar al tanto de los últimos best sellers y la actualidad literaria o si quieres regalar un libro e ir a lo seguro, lo que necesitas es conocer cuáles son los libros más leídos. En <strong>BookMatch</strong>  encuentra los libros más populares, esos de los que todo el mundo está hablando, los libros más recomendados entre lectores, los más valorados por la crítica, premiados con diferentes galardones y los best sellers internacionales y déjate inspirar por el panorama de la actualidad literaria para encontrar tus próximas lecturas o los mejores libros. Solo tienes que hacer <strong>Match.</strong></p>
        </div>
       
        <div className="container">
            <div className="row mt-4">
            <div className="col-sm col-md col-lg mt-4">
                    <img className="books"
                        src=" https://images.cdn1.buscalibre.com/fit-in/360x360/41/c6/41c6728c29427d4465d6e2ea92bad627.jpg"
                        alt="..."
                        style={{ width: "10rem"}}/>
                    <h3 className="title mt-3 fw-bold fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>La Razón de estar contigo</h3>
                    <h6 className="subtitle fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>W. Bruce Cameron</h6>
                </div>
                <div className="col-sm col-md col-lg mt-4">
                    <img className="books"
                        src="https://images.cdn1.buscalibre.com/fit-in/180x180/04/9f/049f77440748c7cf8f56367d18878040.jpg"
                        alt="..."
                        style={{ width: "10rem"}}/>
                    <h3 className="title mt-3 fw-bold fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Violeta</h3>
                    <h6 className="subtitle fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Isabel Allende</h6>
                </div>

                <div className="col-sm col-md col-lg mt-4" >
                    <img className="books"
                        src=" https://images.cdn1.buscalibre.com/fit-in/360x360/dc/e6/dce635d842eee09468be8f5d457078e1.jpg"
                        alt="..."
                        style={{ width: "10rem"}}/>
                    <h3 className="title mt-3 fw-bold fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>El Duque y Yo</h3>
                    <h6 className="subtitle fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Julia Quinn</h6>
                </div> 
                <div className="col-sm col-md col-lg mt-4">

                    <img className="books"
                        src="https://images.cdn3.buscalibre.com/fit-in/360x360/7b/7b/7b7bf32b7a73f485173346787d30c0d1.jpg"
                        style={{ width: "10rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Fleur Mi Desesperada Decisión</h3>
                    <h6 className="subtitle fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Ariana Godoy</h6>
                </div>
                <div className="col-sm col-md col-lg mt-4">
                    <img className="books"
                        src="https://images.cdn3.buscalibre.com/fit-in/180x180/f0/9d/f09d20b4839727210e19c90ebcaba2d4.jpg"
                        style={{ width: "10rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Boulevard</h3>
                    <h6 className="subtitle fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Flor M. Salvador</h6>
                </div>

                <div className="col-sm col-md col-lg mt-4">
                    <img className="books"
                        src="https://images.cdn2.buscalibre.com/fit-in/360x360/8e/fb/8efb6703fa83d3fe61f3489297a4bf83.jpg"
                        style={{ width: "10rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Todo Lo Que Nunca Fuimos</h3>
                    <h6 className="subtitle fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Alice Kellen</h6>
                </div>

                <div className="col-sm col-md col-lg mt-4">
                    <img className="books"
                        src="https://images.cdn1.buscalibre.com/fit-in/360x360/1c/9e/1c9ef778046810a390fb4e6419f19811.jpg"
                        style={{ width: "10rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Todo Lo Que Somos Juntos</h3>
                    <h6 className="subtitle fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Alice Kellen</h6>
                </div>

                <div className="col-sm col-md col-lg mt-4"> 
                    <img className="books"
                        src="https://images.cdn1.buscalibre.com/fit-in/360x360/e7/20/e7206087d6a11eefd053f31d1582159f.jpg"
                        style={{ width: "10rem" }}
                        alt="..."
                    />
                    <h3 className="title mt-3 fw-bold fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Joana Marcús</h3>
                    <h6 className="subtitle fs-6" style={{fontFamily:"sans-serif", color:"#ddd5dd"}}>Trilogía Fuego #1 Cidudades de Humo</h6>
                </div>

                
            </div>
        </div>
        </div>
        <Footer2 />
    </>
}
export default TheMostRead;

// col-sm col-md col-lg