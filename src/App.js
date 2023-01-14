import Pregunta from "./components/Pregunta";
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";



function App() {

  
const [presupuesto, guardarPresupuesto] = useState(0);
const [restante, guardarRestante] = useState(0);
const [mostrarpregunta, actualizarPregunta] = useState(true);
const [gastos, guardarGastos] = useState([]);
const [gasto, guardarGasto] = useState({});
const [creargasto, guardarCrearGasto] = useState(false);


// useEffect que actualiza el restante

useEffect(() => {

    if(creargasto) { 
      // Agrega el nuevo presupuesto
        guardarGastos([
          ...gastos,
          gasto      
        ]) 


      
    // Resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);      

      //Resetear a false 
      guardarCrearGasto(false); 
      
      }

    }, [gasto, gastos, creargasto, restante])

    
// Eliminar presupuesto
 
const eliminarPresupuesto = (gastos) => {
  guardarGastos([]);
  guardarPresupuesto(0);
  guardarRestante(0);
  actualizarPregunta(true)
  
}


  return (

<div className="container">
    <header>
      <h1>Presupuesto</h1>
        <div className="contenido-principal contenido">
          { mostrarpregunta 
          ? 
           (<Pregunta
                guardarPresupuesto = {guardarPresupuesto}
                guardarRestante = {guardarRestante}
                actualizarPregunta = {actualizarPregunta}
          
            />) 
          : 
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                 guardarGasto={guardarGasto}
                 guardarCrearGasto={guardarCrearGasto}
                  />
                </div>

                <div className="one-half column">
                  <Listado
                  gastos={gastos}
                   
                  />

                  <ControlPresupuesto 
                  presupuesto = {presupuesto}
                  restante = {restante}
                  eliminarPresupuesto = {eliminarPresupuesto}
                  gastos={gastos}
                  />
                </div>
              </div>
            ) 
          }
      </div>
  </header> 
</div>
  );
}

export default App;
