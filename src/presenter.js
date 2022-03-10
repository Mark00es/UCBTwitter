import validador from "./validador";
import validadorDescrip from "./validarDescripcion";

const tittle = document.querySelector("#titulo-post");
const descip = document.querySelector("#descripcion-post");
const form = document.querySelector("#post-form");
const div = document.querySelector("#resultado-div");
      
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = tittle.value;
  const ti = validador(titulo);
  const descripcion = descip.value;
  const de = validadorDescrip(descripcion);
  div.innerHTML = "<p> Titulo: " +  ti + " Descripción: "+ de+ "</p>";
});
