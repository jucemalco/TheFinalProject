import React from "react";
import { Button } from "../Button";

const StatusError = (props) => {
  return (
    <div className="col-md-4 alert">
      <div className="alert alert-success" role="alert">
        <p>waiting for XXXXX to accept </p>

        <p className="mb-0">
          No se pudo realizar el MATCH porque tu o el otro usuario lo cancelaron
        </p>
        <hr />
        <div className="d-flex justify-content-around ">
          <Button title="Cancelar" />
          <Button title="Reintentar" />
        </div>
      </div>
    </div>
  );
};

export default StatusError;
