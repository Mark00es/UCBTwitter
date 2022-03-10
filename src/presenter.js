import validador from "./validador";

const tittle = document.querySelector("#titulo-post");
const descip = document.querySelector("#descripcion-post");
const form = document.querySelector("#post-form");
const div = document.querySelector("#resultado-div");
      
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = tittle.value;
  const ti = validador(titulo);
  const descripcion = descip.value;
  div.innerHTML = "<p> Titulo: " +  ti + " Descripción: "+ descripcion+ "</p>";
});
