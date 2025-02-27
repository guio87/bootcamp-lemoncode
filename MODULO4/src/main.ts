import "./style.css";

let conseguir_turno_anterior = (): void => {
  let turno = document.getElementsByClassName("numero-turno")[0];
  if (turno) {
    let turnoNumber: number = parseInt(turno.textContent || "0");
    if (turnoNumber > 0) {
      turnoNumber = turnoNumber - 1;
    }
    turno.textContent = turnoNumber.toString().padStart(2, "0");
  }
};

let conseguir_turno_siguiente = (): void => {
  let turno = document.getElementsByClassName("numero-turno")[0];
  if (turno) {
    let turnoNumber: number = parseInt(turno.textContent || "0");
    turnoNumber = turnoNumber + 1;
    turno.textContent = turnoNumber.toString().padStart(2, "0");
  }
};

let resetear_turno = (): void => {
  let turno = document.getElementsByClassName("numero-turno")[0];
  if (turno) {
    turno.textContent = "00";
  }
};

let editar_turno = (): void => {
  let turno = document.getElementsByClassName(
    "input-turno"
  )[0] as HTMLInputElement;
  if (
    turno &&
    document.getElementsByClassName("numero-turno")[0] &&
    document.getElementsByClassName("input-turno")[0]
  ) {
    let turnoValue = turno.value.padStart(2, "0");
    document.getElementsByClassName("numero-turno")[0].textContent = turnoValue;
  }
};

document
  .getElementById("btn-anterior")
  ?.addEventListener("click", conseguir_turno_anterior);
document
  .getElementById("btn-siguiente")
  ?.addEventListener("click", conseguir_turno_siguiente);

document
  .getElementById("btn-reiniciar")
  ?.addEventListener("click", resetear_turno);

document.getElementById("btn-editar")?.addEventListener("click", editar_turno);
