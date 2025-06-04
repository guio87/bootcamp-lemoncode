import { vi } from "vitest";
import { numeroDado, comprobarSiPierde } from "./motor";
describe("motor.espec", () => {
  describe("numeroDado", () => {
    it("debería de devolver un 3 cuando el número aleatorio sea 0.3");
    //Arrange
    const resultadoaEsperado = 2;
    vi.spyOn(Math, "random").mockReturnValue(0.2);
    //Act
    const resultado = numeroDado();
    //Assert
    expect(resultadoaEsperado).toBe(resultado);
  });
  describe("numeroDado", () => {
    it("debería de devolver un 1 cuando el número aleatorio sea 0.1");
    //Arrange
    const resultadoaEsperado = 1;
    vi.spyOn(Math, "random").mockReturnValue(0.1);
    //Act
    const resultado = numeroDado();
    //Assert
    expect(resultadoaEsperado).toBe(resultado);
  });
  describe("numeroDado", () => {
    it("debería de devolver un 5 cuando el número aleatorio sea 0.5");
    //Arrange
    const resultadoaEsperado = 4;
    vi.spyOn(Math, "random").mockReturnValue(0.5);
    //Act
    const resultado = numeroDado();
    //Assert
    expect(resultadoaEsperado).toBe(resultado);
  });
  describe("comprobarSiPierde", () => {
    it("debería devolver un 6 cuando sea true", () => {
      //Arrange
      const valorTrue = true;
      //Act

      const resultado = comprobarSiPierde(6);
      //Assert
      expect(resultado).toBe(valorTrue);
    });

    it("debería devolver un 6 cuando sea false", () => {
      //Arrange
      const valorTrue = false;

      //Act
      const resultado = comprobarSiPierde(5);

      //Assert
      expect(resultado).toBe(valorTrue);
    });
  });
});
