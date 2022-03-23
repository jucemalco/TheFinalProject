import React from "react";
import "./AcceptDeleteMatch.css";

const AcceptDeleteMatch = () => {

    return (
        <div id="container">
            <div className="card text-center mt-1">
                <div className="card-header ">
                    <h3>Tienes Match Pendientes</h3>

                </div>
                <div className="card-body" >
                    <h5 className="card-title fw-bold" >Favor tener en consideración</h5>
                    <p className="card-text fw-light" >El libro que deseas intercambiar debe estar en muy buen estado, es decir, no debe: tener hojas sueltas, tapas y lomo despegado, haber estado mojado, estar manchado o contar con rayones en su portada o en el interior que dificulten su lectura.</p>
                    <div class=" col-12 p-4 mb-2 text-center">
                        <button type="submit" class="btn btn-outline-light mb-2 m-2 p-2 gradient-custom-1 px-4">Aceptar Match</button>
                        <button type="submit" class="btn btn-outline-light mb-2 m-2 p-2 gradient-custom-1 px-4">Eliminar Match</button>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default AcceptDeleteMatch;