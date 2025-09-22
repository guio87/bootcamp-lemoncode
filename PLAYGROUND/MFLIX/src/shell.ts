import { peliculas } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  pintarListaPeliculas(peliculas, { titulo: "Todas las peliculas" });
  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas de aventuras",
    filtro: { genero: "Aventuras", caracteristica: "genero" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas de familiares",
    filtro: { genero: "Familiar", caracteristica: "genero" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas de Animación",
    filtro: { genero: "Animacion", caracteristica: "genero" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas más vistas",
    filtro: { caracteristica: "masVistas" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas con mejor calificación",
    filtro: { caracteristica: "calificacion" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas con premio",
    filtro: { caracteristica: "premios" },
  });
});
