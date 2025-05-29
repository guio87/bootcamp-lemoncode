import { vi } from "vitest";
import { EstadoPartida, partida } from "./model";
import {
  eligeNumero,
  controlarValorCarta,
  obtenerPuntos,
  gestionarEstadoPartida,
} from "./motor";
describe("motor.spec", () => {
  describe("eligeNumero", () => {
    it("debería de devolver un 3 cuando el número aleatorio sea un 0.3");
    //Arrange
    const resultadoEsperado: number = 3;
    vi.spyOn(Math, "random").mockReturnValue(0.3);
    //Act
    const resultado = eligeNumero();

    //Asert
    expect(resultadoEsperado).toBe(resultado);
  });

  it("debería de devolver un 3 cuando el número aleatorio sea un 0.5");
  //Arrange
  const resultadoEsperado: number = 5;
  vi.spyOn(Math, "random").mockReturnValue(0.5);
  //Act
  const resultado = eligeNumero();

  //Asert
  expect(resultadoEsperado).toBe(resultado);

  describe("controlarValorCarta", () => {
    it("Debería devolver 10 cuando el número de la carta es un 8", () => {
      //Arrange
      const resultadoEsperado: number = 10;
      const numeroCarta: number = 8;
      //Act
      const resultado = controlarValorCarta(numeroCarta);
      expect(resultadoEsperado).toBe(resultado);
    });
    it("deberia devolver 5 cuando el resultado de la carta es un 5", () => {
      //Arrange
      const resultadoEsperado: number = 5;
      const numeroCarta: number = 5;
      //Act
      const resultado = controlarValorCarta(numeroCarta);
      expect(resultadoEsperado).toBe(resultado);
    });
  });
  describe("obtenerPuntos", () => {
    it("debería devolver un 0.5 cuando el número de la carta es un 10", () => {
      //Arrange
      const resultadoEsperado: number = 0.5;
      const numeroCarta: number = 10;

      //Act
      const resultado = obtenerPuntos(numeroCarta);
      //Assert
      expect(resultadoEsperado).toBe(resultado);
    });
  });
  it("debería devolver un 0.5 cuando el número de la carta es un 10", () => {
    //Arrange
    const resultadoEsperado: number = 2;
    const numeroCarta: number = 2;

    //Act
    const resultado = obtenerPuntos(numeroCarta);
    //Assert
    expect(resultadoEsperado).toBe(resultado);
  });

  describe("gestionarEstadoPartida", () => {
    it("debería devolver seguir jugando cuando la puntuacion es menor a 7.5", () => {
      //Arrange
      const resultadoEsperado: EstadoPartida = "seguir_jugando";
      vi.spyOn(partida, "puntuacion", "get").mockReturnValue(2);

      //Act
      const resultado = gestionarEstadoPartida();

      //Assert
      expect(resultadoEsperado).toBe(resultado);
      vi;
    });
    it("debería devolver seguir jugando cuando la puntuacion es 7.5", () => {
      //Arrange
      const resultadoEsperado: EstadoPartida = "Ganar";
      vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);

      //Act
      const resultado = gestionarEstadoPartida();

      //Assert
      expect(resultadoEsperado).toBe(resultado);
      vi;
    });
    it("debería devolver perder cuando la puntuacion es mayor de 7.5", () => {
      //Arrange
      const resultadoEsperado: EstadoPartida = "Perder";
      vi.spyOn(partida, "puntuacion", "get").mockReturnValue(10);

      //Act
      const resultado = gestionarEstadoPartida();

      //Assert
      expect(resultadoEsperado).toBe(resultado);
      vi;
    });
  });
});
