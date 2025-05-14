import { muestraPuntuacion, reiniciarJuego, dameCarta, mePlanto } from "./ui";
import { partida } from "./model";

//CONTROLAR BOTONES
addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(partida.puntuacion);
});

const botonReiniciar = document.querySelector("#reiniciar");
if (
  botonReiniciar !== null &&
  botonReiniciar !== undefined &&
  botonReiniciar instanceof HTMLButtonElement
) {
  botonReiniciar.addEventListener("click", () => {
    reiniciarJuego();
  });
}

const botonPedirCarta = document.querySelector("#pedir-carta");
if (
  botonPedirCarta !== null &&
  botonPedirCarta !== undefined &&
  botonPedirCarta instanceof HTMLButtonElement
) {
  botonPedirCarta.addEventListener("click", dameCarta);
}

const botonPlantarse = document.querySelector("#plantarse");
if (
  botonPlantarse !== null &&
  botonPlantarse !== undefined &&
  botonPlantarse instanceof HTMLButtonElement
) {
  botonPlantarse.addEventListener("click", () => mePlanto());
}
