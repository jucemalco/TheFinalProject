import React, { useContext } from "react";
import { AiOutlineHeart } from 'react-icons/ai';

const Card = (props) => {
    //const { store, actions } = useContext(Context);
    return <div className="card shadow-sm border-0"  style={{ width: "16rem", height: "auto" }}>
            <div className="card-body">
                <img src="https://feriachilenadellibro.cl/wp-content/uploads/2021/05/9789562477062.jpg" style={{ width: "200px", height: "300px" }} className="card-img-top" alt="..." />
                <h5 className="card-title">El Señor de los Anillos</h5>
                <h6>La Comunidad del Anillo</h6>
                <p className="card-text">
                    <dl>
                        <dt> Autor: J. R. R. Tolkien</dt>
                        <dd>Editorial: Minotauro </dd>
                    </dl>
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a> {""}
                <button className={`btn btn-outline-warning`} onClick={{}}>
                    <AiOutlineHeart />
                </button>
            </div>
    </div>
}

export default Card;

