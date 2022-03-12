import React, { useContext } from "react";

const Details = (props) => {
    return <div className="container">
        <div className="row align-items-start">
            <div className="col">
                <img src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg" className="img-thumbnail" style={{ width: "300px", height: "300px", display: "inline-block", }} alt="..."></img>
            </div>
            <div className="col">
                <h1>Titulo</h1>
                <h5>Reseña</h5>
                <p>Ea nisi ea aliquip occaecat excepteur veniam nisi. Aute officia cupidatat occaecat cupidatat duis nostrud dolore eiusmod voluptate est. Qui mollit aliquip enim duis quis. Labore adipisicing magna magna ipsum mollit elit non veniam excepteur ipsum.</p>
                <a href="#" className="btn btn-primary">Añadir Favoritos</a> {""}
                <a href="#" className="btn btn-primary">Hacer Match</a> {""}
            </div>
            <div className="col">
                <h1>Usuario</h1>
                <div className="row-cols-md-3">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Autor</h1>
            <p>Adipisicing veniam nostrud voluptate consectetur qui velit veniam deserunt officia veniam Lorem. Mollit amet exercitation sit nostrud sit minim culpa consequat. Duis laborum aliqua Lorem pariatur proident dolore aliquip enim eu ut incididunt occaecat tempor minim. Exercitation voluptate eiusmod ut mollit cupidatat.</p>

        </div>
    </div>
}


export default Details;