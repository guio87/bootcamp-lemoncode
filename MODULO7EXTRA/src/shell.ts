import { iniciarJuego, plantarse, reiniciar } from "./ui";

const btnTirar = document.querySelector("#tirar") as HTMLButtonElement;
if (btnTirar) {
  btnTirar.addEventListener("click", () => iniciarJuego());
}

const btnPlantarse = document.querySelector("#plantarse") as HTMLButtonElement;
if (btnPlantarse) {
  btnPlantarse.addEventListener("click", () => plantarse());
}

const btnReiniciar = document.querySelector("#reiniciar") as HTMLButtonElement;
if (btnReiniciar) {
  btnReiniciar.addEventListener("click", () => reiniciar());
}
