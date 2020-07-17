import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  //Array de citas donde almacenaremos las citas creadas
  const [citas, setCitas] = useState([]);

  //Función que recoja las citas que tengamos y agreguemos una nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column"></div>
        </div>
      </div>
      ;
    </Fragment>
  );
}

export default App;
