import {} from "./model";
let puntuacion = 0;
export const numeroDado = (): number => {
  return Math.floor(Math.random() * 6) + 1;
};

export const comprobarSiPierde = (numero: number): Boolean => {
  if (numero === 6) {
    return true;
  } else {
    return false;
  }
};

export let sumarPuntos = (numDado: number) => {
  return (puntuacion = puntuacion + numDado);
};

export const resetCero = () => {
  puntuacion = 0;
};
