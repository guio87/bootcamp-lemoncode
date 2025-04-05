import "./style.css";

let puntuacion: number = 0;
//MOSTRAR PUNTUACION
const muestraPuntuacion = (puntuacion: number): void => {
  const puntosMostrados = document.querySelector("#puntos-num");
  if (puntosMostrados && puntosMostrados.textContent) {
    puntosMostrados.textContent = puntuacion.toString();
  }
};

//ELEGIR NÚMERO
const eligeNumero = (): number => {
  return Math.floor(Math.random() * 10);
};

//CONTROLAR VALOR CARTA
const controlarValorCarta = (carta: number): number => {
  if (carta > 7) {
    return carta + 2;
  }
  return carta;
};

//OBTENER URL CARTA
const obtenerUrlCarta = (carta: number): string => {
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

//PEDIR CARTA
const dameCarta = (): void => {
  const numeroAleatorio = eligeNumero();
  const carta = controlarValorCarta(numeroAleatorio);
  console.log(carta);
  const url = obtenerUrlCarta(carta);
  mostrarCarta(url);
  const puntusCarta = obtenerPuntos(carta);
  const puntosSumados = sumarPuntos(puntusCarta);
  actualizarPuntuacion(puntosSumados);
  sumarPuntuacion(carta);
  verSiPierdo();
};

//MOSTRAR CARTA
const mostrarCarta = (urlCarta: string): void => {
  const cartaImg = document.querySelector("#carta-mostrada");

  if (cartaImg && cartaImg instanceof HTMLImageElement) {
    cartaImg.setAttribute(
      "src",
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/" +
        urlCarta
    );
  }
};

const obtenerPuntos = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
};

const sumarPuntos = (puntos: number) => {
  return puntos + puntuacion;
};

const actualizarPuntuacion = (nuevosPuntos: number) => {
  puntuacion = nuevosPuntos;
};

const verSiPierdo = () => {
  if (puntuacion > 7.5) {
    gameOver();
  }
};

//SUMAR PUNTUACION
const sumarPuntuacion = (carta: number): void => {
  if (carta === 10 || carta === 11 || carta === 12) {
    puntuacion += 0.5;
  } else if (carta <= 7) {
    puntuacion += carta;
  }
  muestraPuntuacion(puntuacion);
  if (puntuacion > 7.5) {
    gameOver();
  }
};

//PERDER
const gameOver = (): void => {
  // const resultado: HTMLElement = document.querySelector(
  //   ".puntos"
  // ) as HTMLHeadingElement;
  // resultado.style.display = "none";
  const gameOverText: HTMLHeadingElement = document.querySelector(
    ".game-over"
  ) as HTMLHeadingElement;
  gameOverText.style.display = "block";
  disableBotonPedirCarta();
  disableBotonPlantarse();
  mostrarBotonReiniciar();
};

//MOSTRAR BOTON REINICIAR
const mostrarBotonReiniciar = (): void => {
  const botonReiniciar: HTMLButtonElement = document.querySelector(
    "#reiniciar"
  ) as HTMLButtonElement;
  if (botonReiniciar instanceof HTMLButtonElement) {
    botonReiniciar.style.display = "block";
  }
};

//INHABILITAR BOTON PEDIR CARTA
const disableBotonPedirCarta = (): void => {
  const botonPedirCarta: HTMLButtonElement = document.querySelector(
    "#pedir-carta"
  ) as HTMLButtonElement;
  if (botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.disabled = true;
  }
};

//MOSTRAR BOTON PEDIR CARTA
const mostrarBotonPedirCarta = (): void => {
  const botonPedirCarta: HTMLButtonElement = document.querySelector(
    "#pedir-carta"
  ) as HTMLButtonElement;
  if (botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.disabled = false;
  }
};

//INHABILITAR BOTON PLANTARSE
const disableBotonPlantarse = (): void => {
  const botonPlantarse: HTMLButtonElement = document.querySelector(
    "#plantarse"
  ) as HTMLButtonElement;
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = true;
  }
};

//HABILITAR BOTON PLANTARSE
const enableBotonPlantarse = (): void => {
  const botonPlantarse: HTMLButtonElement = document.querySelector(
    "#plantarse"
  ) as HTMLButtonElement;
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = false;
  }
};

//OCULTAR TEXTO GANAR
const ocultarTextoGanar = (): void => {
  const winnerText: HTMLHeadingElement = document.querySelector(
    ".winner"
  ) as HTMLHeadingElement;
  if (winnerText && winnerText.style.display === "block") {
    winnerText.style.display = "none";
  }
};

//OCULTAR TEXTO PERDER
const ocultarTextoPerder = (): void => {
  const gameOverText: HTMLHeadingElement = document.querySelector(
    ".game-over"
  ) as HTMLHeadingElement;
  if (gameOverText && gameOverText.style.display === "block") {
    gameOverText.style.display = "none";
  }
};

// OCULTAR BOTON REINICIAR
const ocultarBotonReiniciar = (): void => {
  const botonReiniciar = document.querySelector("#reiniciar");
  if (botonReiniciar instanceof HTMLButtonElement) {
    botonReiniciar.style.display = "none";
  }
};

//MOSTRAR REVERSO CARTA
const mostrarReversoCarta = (): void => {
  const cartaVuelta = document.querySelector(
    "#carta-mostrada"
  ) as HTMLImageElement;
  cartaVuelta.setAttribute(
    "src",
    "https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg?raw=true"
  );
};

//VACIAR MENSAJE PLANTAR
const vaciarMensajePlantar = (): void => {
  const mensajePlantar: HTMLElement = document.querySelector(
    ".mensajePlantar"
  ) as HTMLElement;
  mensajePlantar.innerHTML = "";
};
//REINICIAR JUEGO
const reiniciarJuego = (): void => {
  puntuacion = 0;
  ocultarTextoGanar();
  ocultarTextoPerder();
  muestraPuntuacion(puntuacion);
  // const resultado: HTMLElement = document.querySelector(
  //   ".puntos"
  // ) as HTMLHeadingElement;
  // resultado.style.display = "block";
  mostrarBotonPedirCarta();
  enableBotonPlantarse();
  ocultarBotonReiniciar();
  mostrarReversoCarta();
  vaciarMensajePlantar();
};

//PLANTARSE
const mePlanto = (): void => {
  if (puntuacion <= 4) {
    mostrarMensaje("Has sido muy conservador");
    mostrarBotonReiniciar();
    disableBotonPedirCarta();
    disableBotonPlantarse();
  } else if (puntuacion === 5) {
    mostrarMensaje("Te ha entrado el canguelo eh?");
    mostrarBotonReiniciar();
    disableBotonPedirCarta();
    disableBotonPlantarse();
  } else if (puntuacion === 6 || puntuacion === 7) {
    mostrarMensaje("Casi casi...");
    mostrarBotonReiniciar();
    disableBotonPedirCarta();
    disableBotonPlantarse();
  } else if (puntuacion === 7.5) {
    mostrarMensaje("¡ Lo has clavado! ¡Enhorabuena!");
    mostrarBotonReiniciar();
    disableBotonPedirCarta();
    disableBotonPlantarse();
  }
};

const mostrarMensaje = (mensaje: string) => {
  const mensajePlantar = document.querySelector(".mensajePlantar");

  if (mensajePlantar && mensajePlantar instanceof HTMLParagraphElement) {
    mensajePlantar.innerText = mensaje;
  }
};

//CONTROLAR BOTONES
addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(puntuacion);
});

const botonReiniciar = document.querySelector("#reiniciar");
if (botonReiniciar !== null && botonReiniciar !== undefined) {
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
