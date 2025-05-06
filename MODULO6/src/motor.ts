import { partida } from "./model";

import {
  disableBotonPedirCarta,
  disableBotonPlantarse,
  mostrarBotonReiniciar,
  ocultarTextoGanar,
  ocultarTextoPerder,
  muestraPuntuacion,
  mostrarBotonPedirCarta,
  enableBotonPlantarse,
  ocultarBotonReiniciar,
  mostrarReversoCarta,
  vaciarMensajePlantar,
  mostrarMensaje,
  obtenerUrlCarta,
  mostrarCarta,
} from "./ui";

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

export const verSiPierdo = () => {
  if (partida.puntuacion > 7.5) {
    gameOver();
  }
};

//PERDER
export const gameOver = (): void => {
  const gameOverText: HTMLHeadingElement | null =
    document.querySelector(".game-over");
  if (gameOverText instanceof HTMLHeadingElement) {
    gameOverText.style.display = "block";
  }
  disableBotonPedirCarta();
  disableBotonPlantarse();
  mostrarBotonReiniciar();
};

//REINICIAR JUEGO
export const reiniciarJuego = (): void => {
  partida.puntuacion = 0;
  ocultarTextoGanar();
  ocultarTextoPerder();
  muestraPuntuacion(partida.puntuacion);
  mostrarBotonPedirCarta();
  enableBotonPlantarse();
  ocultarBotonReiniciar();
  mostrarReversoCarta();
  vaciarMensajePlantar();
};

//PLANTARSE
export const mePlanto = (): void => {
  if (partida.puntuacion <= 4) {
    mostrarMensaje("Has sido muy conservador");
    mostrarBotonReiniciar();
    disableBotonPedirCarta();
    disableBotonPlantarse();
  } else if (partida.puntuacion === 5) {
    mostrarMensaje("Te ha entrado el canguelo eh?");
    mostrarBotonReiniciar();
    disableBotonPedirCarta();
    disableBotonPlantarse();
  } else if (partida.puntuacion === 6 || partida.puntuacion === 7) {
    mostrarMensaje("Casi casi...");
    mostrarBotonReiniciar();
    disableBotonPedirCarta();
    disableBotonPlantarse();
  } else if (partida.puntuacion === 7.5) {
    mostrarMensaje("¡ Lo has clavado! ¡Enhorabuena!");
    mostrarBotonReiniciar();
    disableBotonPedirCarta();
    disableBotonPlantarse();
  }
};

//PEDIR CARTA
export const dameCarta = (): void => {
  const numeroAleatorio = eligeNumero();
  const carta = controlarValorCarta(numeroAleatorio);
  console.log(carta);
  const url = obtenerUrlCarta(carta);
  mostrarCarta(url);
  const puntosCarta = obtenerPuntos(carta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion(partida.puntuacion);
  verSiPierdo();
};
