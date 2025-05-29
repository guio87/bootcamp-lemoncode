import { EstadoPartida, partida } from "./model";

//ELEGIR NÚMERO
export const eligeNumero = (): number => {
  return Math.floor(Math.random() * 10);
};

//CONTROLAR VALOR CARTA
export const controlarValorCarta = (carta: number): number => {
  if (carta > 7) {
    return carta + 2;
  }
  return carta;
};

export const obtenerPuntos = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
};

export const sumarPuntos = (puntos: number) => {
  return puntos + partida.puntuacion;
};

export const actualizarPuntuacion = (nuevosPuntos: number) => {
  partida.puntuacion = nuevosPuntos;
};

export const gestionarEstadoPartida = (): EstadoPartida => {
  if (partida.puntuacion === 7.5) {
    partida.estadoPartida = "Ganar";
  } else if (partida.puntuacion > 7.5) {
    partida.estadoPartida = "Perder";
  }
  return partida.estadoPartida;
};
