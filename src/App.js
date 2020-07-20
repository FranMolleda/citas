import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

//Importamos propTypes que ya viene por defecto en React. Abajo del todo antes del export default lo documentaremos.
import PropTypes from "prop-types";

function App() {
  //citas en LocalStorage.
  //Lo implementamos parra almacenar los datos y que no se pierdan al recargar. LocalStorage solo almacena strings, por eso lo pasamos a JSON
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  //Array de citas donde almacenaremos las citas creadas
  const [citas, setCitas] = useState(citasIniciales);

  //UseEffect para realizar ciertas operaciones cuando el state cambia o cuando está listo
  //Al final ponemos array vacío para que se ejecute solo una vez. Si dentro de este array vacío, le metemos "citas", se ejecutará cuando este array se monte o cambie
  useEffect(() => {
    //Le pasamos otra vez la variable citasIniciales (copiada de arriba), sólo para quen o salte el warning en consola:
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem(citas, JSON.stringify([]));
    }
  }, [citas]);

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

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default App;
