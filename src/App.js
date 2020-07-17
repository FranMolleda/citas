import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Array de citas donde almacenaremos las citas creadas
  const [citas, setCitas] = useState([]);

  //Función que recoja las citas que tengamos y agreguemos una nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  //Función para eliminar citas

  const handleDeleteButton = (id) => {
    const mascotaBorrada = citas.filter((cita) => cita.id !== id);
    setCitas(mascotaBorrada);
  };

  //Declaramos título para que ponga Agrega tus citas o administr tus citas dependiendo de si hemos creado alguna o no.
  const titulo =
    citas.length === 0 ? "Agrega tus citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, idx) => (
              <Cita
                // Le pasamos la cita que estamos iterando en el map
                cita={cita}
                key={idx}
                citas={citas}
                setCitas={setCitas}
                handleDeleteButton={handleDeleteButton}
              />
            ))}
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
}

export default App;
