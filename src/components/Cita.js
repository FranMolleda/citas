import React from "react";

const Cita = ({ cita, handleDeleteButton }) => {
  const { mascota, propietario, fecha, hora, sintomas, id } = cita;

  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        {" "}
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>

      <button
        type="button"
        className="button eliminar u-full-width"
        onClick={() => handleDeleteButton(id)}
      >
        Borrar citas &times;
      </button>
    </div>
  );
};

export default Cita;
