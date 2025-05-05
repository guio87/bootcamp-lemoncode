import { numeroDado, comprobarSiPierde, resetCero, sumarPuntos } from "./motor";
let puntuacionGlobal = 0;
export const iniciarJuego = () => {
  let numDado = numeroDado();
  muestraDado(numDado);
  muestraImagenOculta();

  const pierdeOGana = comprobarSiPierde(numDado);
  if (pierdeOGana === true) {
    mostrarMensaje("Lo siento, has perdido");
    refresh();
  }
  puntuacionGlobal = sumarPuntos(numDado);
  actualizaPuntuacion(puntuacionGlobal);
  if (puntuacionGlobal >= 50) {
    mostrarMensaje("Felicidades, has ganado");
    refresh();
  }
  return puntuacionGlobal;
};
const refresh = () => {
  deshabilitarBtnPlantarse();
  deshabilitarBtnTirar();
  mostrarBotonReiniciar();
};
export const plantarse = () => {
  refresh();
  mostrarMensaje(" Te has plantado con " + puntuacionGlobal + " puntos");
};

export const reiniciar = () => {
  habilitarBtnPlantarse();
  habilitarBtnTirar();
  ocultarMensaje();
  actualizaPuntuacion(0);
  resetCero();
  ocultarBotonReiniciar();
};

export const muestraDado = (numero: number): void => {
  const dado: HTMLImageElement | null = document.querySelector("#dado");

  if (dado) {
    dado.setAttribute(
      "src",
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara" +
        numero +
        ".png"
    );
  }
};

export const muestraImagenOculta = (): void => {
  const dado: HTMLImageElement | null = document.querySelector("#dado");
  dado?.setAttribute("style", "display: block; margin: 0 auto;");
};

export const mostrarMensaje = (mensaje: string): void => {
  const mensajeResultado: HTMLElement | null =
    document.querySelector("#mensaje-resultado");

  if (mensajeResultado) {
    mensajeResultado.setAttribute("style", "display: block; margin: 0 auto;");
    mensajeResultado.innerHTML = mensaje;
  }
};

export const ocultarMensaje = (): void => {
  const mensajeResultado: HTMLElement | null =
    document.querySelector("#mensaje-resultado");

  if (mensajeResultado) {
    mensajeResultado.setAttribute("style", "display: none;");
  }
};
const mostrarBotonReiniciar = (): void => {
  const botonReiniciar = document.querySelector("#reiniciar");
  if (
    botonReiniciar !== null &&
    botonReiniciar !== undefined &&
    botonReiniciar instanceof HTMLButtonElement
  ) {
    botonReiniciar?.setAttribute("style", "display:block");
  }
};

const ocultarBotonReiniciar = (): void => {
  const botonReiniciar = document.querySelector("#reiniciar");
  if (
    botonReiniciar !== null &&
    botonReiniciar !== undefined &&
    botonReiniciar instanceof HTMLButtonElement
  ) {
    botonReiniciar?.setAttribute("style", "display:none");
  }
};

const deshabilitarBtnPlantarse = (): void => {
  const botonPlantarse = document.querySelector("#plantarse");
  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.disabled = true;
  }
};

const habilitarBtnPlantarse = (): void => {
  const botonPlantarse = document.querySelector("#plantarse");
  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.disabled = false;
  }
};

const deshabilitarBtnTirar = (): void => {
  const botonTirarDado = document.querySelector("#tirar");
  if (
    botonTirarDado !== null &&
    botonTirarDado !== undefined &&
    botonTirarDado instanceof HTMLButtonElement
  ) {
    botonTirarDado.disabled = true;
  }
};

const habilitarBtnTirar = (): void => {
  const botonTirarDado = document.querySelector("#tirar");
  if (
    botonTirarDado !== null &&
    botonTirarDado !== undefined &&
    botonTirarDado instanceof HTMLButtonElement
  ) {
    botonTirarDado.disabled = false;
  }
};

export const actualizaPuntuacion = (puntos: number) => {
  const campoPuntos = document.querySelector("#puntuacion-obtenida");
  if (campoPuntos) {
    campoPuntos.innerHTML = "Puntos : " + puntos;
  }
};
