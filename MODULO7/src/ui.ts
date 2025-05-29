import {
  actualizarPuntuacion,
  controlarValorCarta,
  eligeNumero,
  obtenerPuntos,
  sumarPuntos,
  gestionarEstadoPartida,
} from "./motor";
import { partida } from "./model";

//MOSTRAR PUNTUACION
export const muestraPuntuacion = (puntuacion: number): void => {
  const puntosMostrados = document.querySelector("#puntos-num");
  if (puntosMostrados && puntosMostrados.textContent) {
    puntosMostrados.textContent = puntuacion.toString();
  }
};

//OBTENER URL CARTA
export const obtenerUrlCarta = (carta: number): string => {
  switch (carta) {
    case 1:
      return "1_as-copas.jpg";
    case 2:
      return "2_dos-copas.jpg";
    case 3:
      return "3_tres-copas.jpg";
    case 4:
      return "4_cuatro-copas.jpg";
    case 5:
      return "5_cinco-copas.jpg";
    case 6:
      return "6_seis-copas.jpg";
    case 7:
      return "7_siete-copas.jpg";
    case 10:
      return "10_sota-copas.jpg";
    case 11:
      return "11_caballo-copas.jpg";
    case 12:
      return "12_rey-copas.jpg";
    default:
      return "";
  }
};

//MOSTRAR CARTA
export const mostrarCarta = (urlCarta: string): void => {
  const cartaImg = document.querySelector("#carta-mostrada");

  if (cartaImg && cartaImg instanceof HTMLImageElement) {
    cartaImg.setAttribute(
      "src",
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/" +
        urlCarta
    );
  }
};

//MOSTRAR BOTON REINICIAR
const mostrarBotonReiniciar = (): void => {
  const botonReiniciar: HTMLButtonElement | null =
    document.querySelector("#reiniciar");
  if (botonReiniciar instanceof HTMLButtonElement) {
    botonReiniciar.style.display = "block";
  }
};

//INHABILITAR BOTON PEDIR CARTA
const disableBotonPedirCarta = (): void => {
  const botonPedirCarta: HTMLButtonElement | null =
    document.querySelector("#pedir-carta");
  if (botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.disabled = true;
  }
};

//MOSTRAR BOTON PEDIR CARTA
const mostrarBotonPedirCarta = (): void => {
  const botonPedirCarta: HTMLButtonElement | null =
    document.querySelector("#pedir-carta");
  if (botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.disabled = false;
  }
};

//INHABILITAR BOTON PLANTARSE
const disableBotonPlantarse = (): void => {
  const botonPlantarse: HTMLButtonElement | null =
    document.querySelector("#plantarse");
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = true;
  }
};

//HABILITAR BOTON PLANTARSE
const enableBotonPlantarse = (): void => {
  const botonPlantarse: HTMLButtonElement | null =
    document.querySelector("#plantarse");
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = false;
  }
};

//OCULTAR TEXTO GANAR
const ocultarTextoGanar = (): void => {
  const winnerText: HTMLHeadingElement | null =
    document.querySelector(".winner");
  if (
    winnerText &&
    winnerText instanceof HTMLHeadingElement &&
    winnerText.style.display === "block"
  ) {
    winnerText.style.display = "none";
  }
};

//OCULTAR TEXTO PERDER
const ocultarTextoPerder = (): void => {
  const gameOverText: HTMLHeadingElement | null =
    document.querySelector(".game-over");
  if (
    gameOverText &&
    gameOverText instanceof HTMLHeadingElement &&
    gameOverText.style.display === "block"
  ) {
    gameOverText.style.display = "none";
  }
};

// OCULTAR BOTON REINICIAR
const ocultarBotonReiniciar = (): void => {
  const botonReiniciar: HTMLButtonElement | null =
    document.querySelector("#reiniciar");
  if (botonReiniciar instanceof HTMLButtonElement) {
    botonReiniciar.style.display = "none";
  }
};

//MOSTRAR REVERSO CARTA
const mostrarReversoCarta = (): void => {
  const cartaVuelta: HTMLImageElement | null =
    document.querySelector("#carta-mostrada");
  if (cartaVuelta instanceof HTMLImageElement) {
    cartaVuelta.setAttribute(
      "src",
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg?raw=true"
    );
  }
};

//VACIAR MENSAJE PLANTAR
const vaciarMensajePlantar = (): void => {
  const mensajePlantar: HTMLElement = document.querySelector(
    ".mensajePlantar"
  ) as HTMLElement;
  mensajePlantar.innerHTML = "";
};

const mostrarMensaje = (mensaje: string) => {
  const mensajePlantar = document.querySelector(".mensajePlantar");

  if (mensajePlantar && mensajePlantar instanceof HTMLParagraphElement) {
    mensajePlantar.innerText = mensaje;
  }
};

const verSiPierdo = () => {
  if (gestionarEstadoPartida() === "Perder") {
    gameOver();
  }
};

//PERDER
const gameOver = (): void => {
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
