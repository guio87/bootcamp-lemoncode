import { partida } from "./model";

export const numeroDado = (): number => {
  return Math.floor(Math.random() * 6) + 1;
};

export const comprobarSiPierde = (numero: number): Boolean => {
  return numero === 6;
};

export let sumarPuntos = (numDado: number) => {
  return partida.puntuacion + numDado;
};
export const actualizarPuntuacion = (puntosSumados: number) => {
  partida.puntuacion = puntosSumados;
};
