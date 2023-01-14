import { Fragment } from "react";
import { PropTypes } from "prop-types"
import { revisarPresupuesto } from "./helpers"; 


const ControlPresupuesto = ({presupuesto, restante, eliminarPresupuesto, gastos}) => {
    return (  
        <Fragment>
            <div className="alert alert-primary"> 
            Presupuesto: ${presupuesto}
            </div>
            <div className = {revisarPresupuesto(presupuesto,restante)}>
            Restantes: ${restante}
            </div>
            <div>
                <button className="u-full-width boton-gasto"
                onClick={() => eliminarPresupuesto(gastos)}
                >
                Eliminar Gasto  &times; </button>
            </div>
        </Fragment>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
    eliminarPresupuesto: PropTypes.func.isRequired,
    gastos: PropTypes.array.isRequired
  } 
   
 
export default ControlPresupuesto;