import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

import PropTypes from "prop-types";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem(citas, JSON.stringify([]));
    }
  }, [citas]);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const handleDeleteButton = (id) => {
    const mascotaBorrada = citas.filter((cita) => cita.id !== id);
    setCitas(mascotaBorrada);
  };

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

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default App;
