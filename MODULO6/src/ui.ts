export {} from "./motor";
export {} from "./model";

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
export const mostrarBotonReiniciar = (): void => {
  const botonReiniciar: HTMLButtonElement | null =
    document.querySelector("#reiniciar");
  if (botonReiniciar instanceof HTMLButtonElement) {
    botonReiniciar.style.display = "block";
  }
};

//INHABILITAR BOTON PEDIR CARTA
export const disableBotonPedirCarta = (): void => {
  const botonPedirCarta: HTMLButtonElement | null =
    document.querySelector("#pedir-carta");
  if (botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.disabled = true;
  }
};

//MOSTRAR BOTON PEDIR CARTA
export const mostrarBotonPedirCarta = (): void => {
  const botonPedirCarta: HTMLButtonElement | null =
    document.querySelector("#pedir-carta");
  if (botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.disabled = false;
  }
};

//INHABILITAR BOTON PLANTARSE
export const disableBotonPlantarse = (): void => {
  const botonPlantarse: HTMLButtonElement | null =
    document.querySelector("#plantarse");
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = true;
  }
};

//HABILITAR BOTON PLANTARSE
export const enableBotonPlantarse = (): void => {
  const botonPlantarse: HTMLButtonElement | null =
    document.querySelector("#plantarse");
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = false;
  }
};

//OCULTAR TEXTO GANAR
export const ocultarTextoGanar = (): void => {
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
export const ocultarTextoPerder = (): void => {
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
export const ocultarBotonReiniciar = (): void => {
  const botonReiniciar: HTMLButtonElement | null =
    document.querySelector("#reiniciar");
  if (botonReiniciar instanceof HTMLButtonElement) {
    botonReiniciar.style.display = "none";
  }
};

//MOSTRAR REVERSO CARTA
export const mostrarReversoCarta = (): void => {
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
export const vaciarMensajePlantar = (): void => {
  const mensajePlantar: HTMLElement = document.querySelector(
    ".mensajePlantar"
  ) as HTMLElement;
  mensajePlantar.innerHTML = "";
};

export const mostrarMensaje = (mensaje: string) => {
  const mensajePlantar = document.querySelector(".mensajePlantar");

  if (mensajePlantar && mensajePlantar instanceof HTMLParagraphElement) {
    mensajePlantar.innerText = mensaje;
  }
};
