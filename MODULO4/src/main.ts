import "./style.css";
let turno: number = 0;
const conseguirTurnoAnterior = (): void => {
  const tituloTurno = document.querySelector(".numero-turno");
  if (turno > 0 && tituloTurno) {
    turno = turno - 1;
    tituloTurno.textContent = turno.toString().padStart(2, "0");
  }
};

const conseguirTurnoSiguiente = (): void => {
  const tituloTurno = document.querySelector(".numero-turno");
  if (tituloTurno) {
    turno = turno + 1;
    tituloTurno.textContent = turno.toString().padStart(2, "0");
  }
};

const resetearTurno = (): void => {
  const resetTurno = document.querySelector(".numero-turno");
  if (resetTurno) {
    resetTurno.textContent = "00";
    turno = 0;
  }
};

const editarTurno = (): void => {
  const turnoInput = document.querySelector(".input-turno") as HTMLInputElement;
  if (turno && document.querySelector(".numero-turno")) {
    (document.querySelector(".numero-turno") as HTMLInputElement).textContent =
      turnoInput.value.padStart(2, "0");
    turno = parseInt(turnoInput.value);
  }
};

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
