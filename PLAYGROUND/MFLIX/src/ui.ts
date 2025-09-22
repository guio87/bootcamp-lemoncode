import {
  Pelicula,
  nombreClases,
  TipoFlecha,
  ListaPeliculasConfiguracion,
} from "./modelo";
import { flechas } from "./constantes";
import { filtrarPeliculas } from "./motor";

const añadirFlecha = (contenedor: HTMLDivElement, tipo: TipoFlecha): void => {
  const divFlecha = document.createElement("div");
  divFlecha.className = `flecha-${tipo}`;

  const imgFlecha = document.createElement("img");
  imgFlecha.src = tipo === "izquierda" ? flechas.left : flechas.right;
  divFlecha.appendChild(imgFlecha);

  divFlecha.addEventListener("click", () => {
    if (tipo === "izquierda") {
      contenedor.scrollBy({
        left: -contenedor.clientWidth,
        behavior: "smooth",
      });
    } else {
      contenedor.scrollBy({
        left: contenedor.clientWidth,
        behavior: "smooth",
      });
    }
  });

  contenedor.appendChild(divFlecha);
};

const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
  const titulo = document.createElement("h2");
  titulo.textContent = tituloSeccion;
  return titulo;
};

const pintarFlechas = (peliculaContenedor: HTMLDivElement): void => {
  añadirFlecha(peliculaContenedor, "izquierda");
  añadirFlecha(peliculaContenedor, "derecha");
};

const pintarPelicula = (
  pelicula: Pelicula,
  peliculaContenedor: HTMLDivElement
): void => {
  const divPelicula = crearContenedor(
    nombreClases.pelicula,
    peliculaContenedor
  );
  divPelicula.innerHTML = `
      <img src ="${pelicula.imagen}" alt="${pelicula.titulo}"/>
      <h3>${pelicula.titulo}</h3>
      `;
};

const pintarPeliculas = (
  peliculas: Pelicula[],
  peliculaContenedor: HTMLDivElement
): void => {
  peliculas.forEach((pelicula) => {
    pintarPelicula(pelicula, peliculaContenedor);
  });
};

const crearContenedor = (
  nombreClase: string,
  contenedor: HTMLDivElement
): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add(nombreClase);
  div.id = nombreClase;
  contenedor.appendChild(div);
  return div;
};

const agregarTitulo = (
  tituloSeccion: string,
  contenedor: HTMLDivElement
): void => {
  const titulo = crearTitulo(tituloSeccion);
  contenedor.appendChild(titulo);
};

export const pintarListaPeliculas = (
  listaPeliculas: Pelicula[],
  configuracion: ListaPeliculasConfiguracion
): void => {
  // obtener el div principal
  const appDiv = document.getElementById("principal");
  if (appDiv && appDiv instanceof HTMLDivElement) {
    //crear un div para las peliculas
    const crearDivPeliculas = crearContenedor(nombreClases.pelicula, appDiv);
    //crear titulo
    agregarTitulo(configuracion.titulo, crearDivPeliculas);
    //crear un div lista de peliculas
    const divListaPeliculas = crearContenedor(
      nombreClases.listaPeliculas,
      crearDivPeliculas
    );
    //crear div contenedor de peliculas
    const divPeliculasContenedor = crearContenedor(
      nombreClases.peliculasContenedor,
      divListaPeliculas
    );
    const peliculasFiltradas = filtrarPeliculas(
      listaPeliculas,
      configuracion.filtro
    );
    // añadir flechas
    pintarFlechas(divPeliculasContenedor);
    //pintar peliculas
    pintarPeliculas(peliculasFiltradas, divPeliculasContenedor);
  } else {
    console.error("No se encontró el elemento");
  }
};
