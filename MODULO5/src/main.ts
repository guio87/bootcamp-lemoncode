import "./style.css";

let puntuacion: number = 0;
//MOSTRAR PUNTUACION
const muestraPuntuacion = (puntuacion: number): void => {
  const puntosMostrados: HTMLElement = document.querySelector(
    "#puntos-num"
  ) as HTMLElement;
  if (puntosMostrados && puntosMostrados.textContent) {
    puntosMostrados.textContent = puntuacion.toString();
  }
};

//PEDIR CARTA
const dameCarta = (): void => {
  let carta: number = Math.floor(Math.random() * 12);
  if (carta === 8 || carta === 9) {
    carta += 2;
  } else if (carta === 0) {
    carta = 1;
  }
  console.log(carta);
  mostrarCarta(carta);
  sumarPuntuacion(carta);
};

//MOSTRAR CARTA
const mostrarCarta = (carta: number): void => {
  const cartaImg = document.querySelector(
    "#carta-mostrada"
  ) as HTMLImageElement;
  switch (carta) {
    case 1:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
      );
      break;
    case 2:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
      );
      break;
    case 3:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
      );
      break;
    case 4:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
      );
      break;
    case 5:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
      );
      break;
    case 6:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
      );
      break;
    case 7:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
      );
      break;
    case 10:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
      );
      break;
    case 11:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
      );
      break;
    case 12:
      cartaImg?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
      );
      break;
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
  const resultado: HTMLElement = document.querySelector(
    ".puntos"
  ) as HTMLHeadingElement;
  resultado.style.display = "none";
  const gameOverText: HTMLHeadingElement = document.querySelector(
    ".game-over"
  ) as HTMLHeadingElement;
  gameOverText.style.display = "block";
  ocultarBotonPedirCarta();
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

//OCULTAR BOTON PEDIR CARTA
const ocultarBotonPedirCarta = (): void => {
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

//REINICIAR JUEGO
const reiniciarJuego = (): void => {
  puntuacion = 0;

  const winnerText: HTMLHeadingElement = document.querySelector(
    ".winner"
  ) as HTMLHeadingElement;
  if (winnerText && winnerText.style.display === "block") {
    winnerText.style.display = "none";
  }
  const gameOverText: HTMLHeadingElement = document.querySelector(
    ".game-over"
  ) as HTMLHeadingElement;
  if (gameOverText && gameOverText.style.display === "block") {
    gameOverText.style.display = "none";
  }
  muestraPuntuacion(puntuacion);
  const resultado: HTMLElement = document.querySelector(
    ".puntos"
  ) as HTMLHeadingElement;
  resultado.style.display = "block";
  mostrarBotonPedirCarta();
  const botonReiniciar = document.querySelector("#reiniciar");
  if (botonReiniciar instanceof HTMLButtonElement) {
    botonReiniciar.style.display = "none";
  }
  const cartaVuelta = document.querySelector(
    "#carta-mostrada"
  ) as HTMLImageElement;
  cartaVuelta.setAttribute(
    "src",
    "https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg?raw=true"
  );
  const mensajePlantar: HTMLElement = document.querySelector(
    ".mensajePlantar"
  ) as HTMLElement;
  mensajePlantar.innerHTML = "";
};

//PLANTARSE
const mePlanto = (): void => {
  const mensajePlantar: HTMLElement = document.querySelector(
    ".mensajePlantar"
  ) as HTMLElement;

  if (puntuacion <= 4) {
    mensajePlantar.innerText = "Has sido muy conservador";
    mostrarBotonReiniciar();
    ocultarBotonPedirCarta();
  } else if (puntuacion === 5) {
    mensajePlantar.innerText = "Te ha entrado el canguelo eh?";
    mostrarBotonReiniciar();
    ocultarBotonPedirCarta();
  } else if (puntuacion === 6 || puntuacion === 7) {
    mensajePlantar.innerText = "Casi casi...";
    mostrarBotonReiniciar();
    ocultarBotonPedirCarta();
  } else if (puntuacion === 7.5) {
    mensajePlantar.innerText = "¡ Lo has clavado! ¡Enhorabuena!";
    mostrarBotonReiniciar();
    ocultarBotonPedirCarta();
  }
};

//CONTROLAR BOTONES
addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(puntuacion);
});

const botonReiniciar: HTMLButtonElement = document.querySelector(
  "#reiniciar"
) as HTMLButtonElement;
if (botonReiniciar !== null && botonReiniciar !== undefined) {
  botonReiniciar.addEventListener("click", () => {
    reiniciarJuego();
  });
}

const botonPedirCarta: HTMLButtonElement = document.querySelector(
  "#pedir-carta"
) as HTMLButtonElement;
if (
  botonPedirCarta !== null &&
  botonPedirCarta !== undefined &&
  botonPedirCarta instanceof HTMLButtonElement
) {
  botonPedirCarta.addEventListener("click", dameCarta);
}

const botonPlantarse: HTMLButtonElement = document.querySelector(
  "#plantarse"
) as HTMLButtonElement;
if (
  botonPlantarse !== null &&
  botonPlantarse !== undefined &&
  botonPlantarse instanceof HTMLButtonElement
) {
  botonPlantarse.addEventListener("click", () => mePlanto());
}
