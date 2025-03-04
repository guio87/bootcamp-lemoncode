import "./style.css";
let turno: number = 0;
const conseguirTurnoAnterior = (): void => {
  const tituloTurno = document.querySelector(".numero-turno");
  if (
    turno > 0 &&
    tituloTurno !== null &&
    tituloTurno !== undefined &&
    tituloTurno instanceof HTMLHeadingElement
  ) {
    turno = turno - 1;
    tituloTurno.textContent = turno.toString().padStart(2, "0");
  }
};

const conseguirTurnoSiguiente = (): void => {
  const tituloTurno = document.querySelector(".numero-turno");
  if (
    tituloTurno !== null &&
    tituloTurno !== undefined &&
    tituloTurno instanceof HTMLHeadingElement
  ) {
    turno = turno + 1;
    tituloTurno.textContent = turno.toString().padStart(2, "0");
  }
};

const resetearTurno = (): void => {
  const resetTurno = document.querySelector(".numero-turno");
  if (
    resetTurno !== null &&
    resetTurno !== undefined &&
    resetTurno instanceof HTMLHeadingElement
  ) {
    resetTurno.textContent = "00";
    turno = 0;
  }
};

const editarTurno = (): void => {
  const turnoInput = document.querySelector(".input-turno");
  const tituloTurno = document.querySelector(".numero-turno");
  if (
    turno !== null &&
    turno !== undefined &&
    turnoInput instanceof HTMLInputElement
  ) {
    if (tituloTurno && tituloTurno instanceof HTMLHeadingElement) {
      turno = parseInt(turnoInput.value);
      tituloTurno.textContent = turno.toString().padStart(2, "0");
    }
  }
};

const cargarAplicacion = (): void => {
  const botonAnterior = document.getElementById("btn-anterior");
  if (
    botonAnterior !== null &&
    botonAnterior !== undefined &&
    botonAnterior instanceof HTMLButtonElement
  ) {
    botonAnterior.addEventListener("click", conseguirTurnoAnterior);
  }

  const botonSiguiente = document.getElementById("btn-siguiente");
  if (
    botonSiguiente !== null &&
    botonSiguiente !== undefined &&
    botonSiguiente instanceof HTMLButtonElement
  ) {
    botonSiguiente.addEventListener("click", conseguirTurnoSiguiente);
  }

  const botonReiniciar = document.getElementById("btn-reiniciar");
  if (
    botonReiniciar !== null &&
    botonReiniciar !== undefined &&
    botonReiniciar instanceof HTMLButtonElement
  ) {
    botonReiniciar.addEventListener("click", resetearTurno);
  }

  const botonEditarTurno = document.getElementById("btn-editar");
  if (
    botonEditarTurno !== null &&
    botonEditarTurno !== undefined &&
    botonEditarTurno instanceof HTMLButtonElement
  ) {
    botonEditarTurno.addEventListener("click", editarTurno);
  }
};

document.addEventListener("DOMContentLoaded", cargarAplicacion);
