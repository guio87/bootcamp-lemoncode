interface Partida {
  puntuacion: number;
}

export const crearPartidaVacia = (): Partida => {
  return {
    puntuacion: 0,
  };
};

export const partida: Partida = crearPartidaVacia();
