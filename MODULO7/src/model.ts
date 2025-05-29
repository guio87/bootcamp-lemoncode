export type EstadoPartida = "Ganar" | "Perder" | "seguir_jugando";
interface Partida {
  puntuacion: number;
  estadoPartida: EstadoPartida;
}

export const crearPartidaVacia = (): Partida => {
  return {
    puntuacion: 0,
    estadoPartida: "seguir_jugando",
  };
};

export const partida: Partida = crearPartidaVacia();
