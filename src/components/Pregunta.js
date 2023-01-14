import { Fragment, useState } from "react";
import { PropTypes } from "prop-types"
import Error from "./Error";


const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
  
// Definir el state
const [cantidad, guardarCantidad] = useState(0);
const [error, guardarError] = useState(false);


// Función que lee el presupuesto
const definirPresupuesto = e => {
   guardarCantidad(parseInt(e.target.value, 10))

}  

// Submit para definir presupuesto   
const agregarPresupuesto = e => {
    e.preventDefault();


// Validar
if(cantidad < 1 || isNaN(cantidad) ) {
    guardarError(true);
    return;
}

// Si se pasa la validación
guardarError(false);
guardarPresupuesto(cantidad);
guardarRestante(cantidad);
actualizarPregunta(false)



}

    return ( 
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>
            {error ? <Error mensaje="EL PRESUPUESTO ES INCORRECTO"/> : null}

            <form 
             onSubmit={agregarPresupuesto}
            >
                <input
                className="u-full-width"
                type="number"
                placeholder="Ingresa tu presupuesto"
                onChange={definirPresupuesto}
                />

                <button
                type="submit"
                className="u-full-width boton-dp"
                >Definir presupuesto
                </button>
            </form>
        </Fragment>
     );

    }

    Pregunta.propTypes = {
        guardarPresupuesto: PropTypes.func.isRequired,
        guardarRestante: PropTypes.func.isRequired,
        actualizarPregunta: PropTypes.func.isRequired
      } 
 
export default Pregunta;