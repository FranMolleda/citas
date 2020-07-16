import React, { Fragment, useState } from "react";

const Formulario = () => {
  //Crear state en citas
  //Creamos las keys con el mismo nombre que la propiedad name de cada input
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //Función que se ejecuta cada vez que escribimos en un Input
  //Hacemos una copia de cita, para que no elimine la información que vamos metiendo en los diferentes campos
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  //Hacemos destructuring para no tener que escribir citas.mascota, etc.
  //Añadimos value a cada input con el nombre de cada input para después poder resetearlo.

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario presiona agregar cita

  //e.preventDefault se utiliza para que no haga algo por defecto. En el caso de los formularios es para evitar que se vean los datos en el navegador.

  const submitCita = (e) => {
    e.preventDefautl();
    console.log("Enviando...");
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button submit="submit" className="u-full-width button-primary">
          Añadir Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
