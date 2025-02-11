import "./style.css";

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

interface MusicGroup {
  nombre: string;
  añoFundacion: number;
  activos: boolean;
  generoMusical: string;
}

const grupoMusicalA: MusicGroup = {
  nombre: "The Beatles",
  añoFundacion: 1960,
  activos: false,
  generoMusical: popRock,
};

const grupoMusicalB: MusicGroup = {
  nombre: "Queen",
  añoFundacion: 1970,
  activos: true,
  generoMusical: rock,
};

const grupoMusicalC: MusicGroup = {
  nombre: "Ludwig van Beethoven",
  añoFundacion: 1770,
  activos: false,
  generoMusical: clasica,
};

const grupoMusicalD: MusicGroup = {
  nombre: "The Rolling Stones",
  añoFundacion: 1962,
  activos: true,
  generoMusical: hardRock,
};

const estiloTitulo =
  "background-color:blue; font-size: 24px; font-weight: bold;";

console.log(`%c${grupoMusicalA.nombre}`, estiloTitulo);
console.log(
  grupoMusicalA.añoFundacion,
  grupoMusicalA.activos,
  grupoMusicalA.generoMusical
);

console.log(`%c${grupoMusicalB.nombre}`, estiloTitulo);
console.log(
  grupoMusicalB.añoFundacion,
  grupoMusicalB.activos,
  grupoMusicalB.generoMusical
);

console.log(`%c${grupoMusicalC.nombre}`, estiloTitulo);
console.log(
  grupoMusicalC.añoFundacion,
  grupoMusicalC.activos,
  grupoMusicalC.generoMusical
);

console.log(`%c${grupoMusicalD.nombre}`, estiloTitulo);
console.log(
  grupoMusicalD.añoFundacion,
  grupoMusicalD.activos,
  grupoMusicalD.generoMusical
);
