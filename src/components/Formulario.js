import { useState } from "react";
import Error from "./Error";
import { PropTypes } from "prop-types"
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

const [nombre, guardarNombre] = useState('');
const [cantidad, guardarCantidad] = useState(0);
const [fecha, guardarFecha] = useState('');
const [error, guardarError] = useState(false);


// Cuando el usuario agrega el gasto
const agregarGasto = e => { 
  e.preventDefault();

// validar gasto
if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' || fecha.trim() === '' ) {
    guardarError(true);
    return;  
  }

  guardarError(false);

  // Construir el gasto 

  const gasto = {
    nombre,
    cantidad,
    fecha,
    id: shortid.generate()

  }

  // Pasar el gasto al componente principal
  guardarGasto(gasto);
  guardarCrearGasto(true); 

  // Resetear el form 
  guardarNombre("");
  guardarCantidad(0);
  guardarFecha('');

}



return (
<form
  onSubmit={agregarGasto}
>
    <h2>Agrega tus gastos aquí</h2>

    {error ? <Error mensaje="TODOS LOS CAMPOS SON OBLIGATORIOS"/> : null}

    <div className="campo">
     <label>NOMBRE GASTO</label>
     <input 
     className="u-full-width"
     type="text"
     placeholder="Ej: viáticos"
     value={nombre}
     onChange={e => guardarNombre(e.target.value)}
     />
     
    </div>

    <div className="campo">
     <label>CANTIDAD GASTO</label>
     <input 
     className="u-full-width"
     type="number"
     placeholder="Ej: 300"
     value={cantidad}
     onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
     />
    </div>

    <div className="campo">
     <label>FECHA GASTO</label>
     <input 
     className="u-full-width"
     type="date"
     value={fecha}
     onChange={e => guardarFecha(e.target.value)}
     />
    </div>

    <button
    className="u-full-width boton-gasto">Agregar Gasto</button>


</form>


)};


Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
} 

 
export default Formulario;