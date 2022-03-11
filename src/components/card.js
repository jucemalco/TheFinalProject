import React, { useContext } from "react";
import { AiOutlineHeart } from 'react-icons/ai';

const Card = (props) => {
    //const { store, actions } = useContext(Context);
    return <div>
        <div className="container">
        <div className="card" style={{ width: "16rem" }}>
            <img src="https://feriachilenadellibro.cl/wp-content/uploads/2021/05/9789562477062.jpg" style={{ width: "200px", height: "300px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    <dl>
                        <dt>{props.autor}</dt>
                        <dd>Editorial: {props.editorial}</dd>
                    </dl>
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a> {""}
                <button className={`btn btn-outline-warning`} onClick={{}}>
                    <AiOutlineHeart />
                </button>
            </div>
        </div>
        </div>
    </div>
}

export default Card;

