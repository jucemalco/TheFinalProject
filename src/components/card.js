import React, { useContext } from "react";
import { AiOutlineHeart } from 'react-icons/ai';

const Card = (props) => {
    //const { store, actions } = useContext(Context);
    return <div className="card shadow-sm border-0" style={{ width: "16rem", height: "auto" }}>
        <div className="card-body">
            <img src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg" style={{ width: "250px", height: "250px" }} className="card-img-top" alt="..." />
            <p className="card-text">
                <dl>
                    <dt>{props.title}</dt>
                    <dt>{props.autor}</dt>
                    <dd>{props.editorial} </dd>
                </dl>
            </p>
            <a href="#" className="btn btn-primary">Quiero ver más</a> {""}
            <button className={`btn btn-outline-warning`} onClick={{}}>
                <AiOutlineHeart />
            </button>
        </div>
    </div>
}

export default Card;

