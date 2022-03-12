import React from "react";


const EditData = () => {

    return (
        <div class="container loginback ">

            <h2 className="form-title text-white text-center mt-4">Editar Datos</h2>

            <form>
                
                <div className="col-md-6 text-white p-4">
                    <label for="formGroupExampleInput" className="form-label d-flex">Nombres</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
                </div>
               

                
                <div className="col-md-6 text-white p-4">
                    <label for="formGroupExampleInput2" className="form-label d-flex">Apellidos</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
                </div>
                

                <div class="col-md-6 text-white p-4">
                    <label for="inputEmail4" class="form-label d-flex">Email asociado cambiar</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>


                <div class=" col-12 p-4 mb-2 text-center">
                    <button type="submit" class="btn btn-outline-light gradient-custom-2 px-4">Guardar</button>
                </div>
            </form>
        </div>
    )

}


export default EditData;
