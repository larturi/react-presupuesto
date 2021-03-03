import React, { useState, useEffect } from 'react';
import { Pregunta } from "./components/Pregunta";
import { Formulario } from "./components/Formulario";
import { Listado } from './components/Listado';
import { ControlPresupuesto } from './components/ControlPresupuesto';

function App() { 

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, setGastos ] = useState([]);
  const [ gasto, setGasto ] = useState({});
  const [ creargasto, setCrearGasto ] = useState(false);

  useEffect(() => {
    
    if (creargasto) {
      setGastos([
        ...gastos,
        gasto
      ]);

      setCrearGasto(false);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

    }
  }, [creargasto, gasto, gastos]);


  return (
     <div className="container">
       <header>
          <h1>Gasto semanal</h1>
       </header>

       <div className="contenido-principal contenido">

         {
            mostrarpregunta ?
            (  
              <Pregunta 
                setPresupuesto={ setPresupuesto }
                setRestante={ setRestante }
                actualizarPregunta={ actualizarPregunta }
               />
            ) : (
            <div className="row">
                <div className="one-half column">
                    <Formulario 
                      setGasto={ setGasto }
                      setCrearGasto={ setCrearGasto }
                    />
                </div>

                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />

                  <ControlPresupuesto 
                    presupuesto={ presupuesto }
                    restante={ restante }
                  />
                </div>
              </div>
            )

         }

       </div>
     </div>
  );
}

export default App;
