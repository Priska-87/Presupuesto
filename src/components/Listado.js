import Gasto from "./Gasto";
import { PropTypes } from "prop-types"


const Listado = ({gastos}) =>  ( 
    <div className="gastos-realizados">
        <h2>Listado de gastos</h2>
        {gastos.map(gasto => (
          <Gasto 
          gasto = {gasto}
          key={gasto.id}
          />
        ))}
    </div>
 );

Listado.propTypes = {
  gastos: PropTypes.array.isRequired
} 
 
export default Listado;