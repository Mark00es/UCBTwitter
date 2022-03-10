function validador(titulo) {
    var resp = titulo  
    if(titulo.length < 50 && titulo != "")
        resp = titulo
    else
        alert("No es posible publicar este post")
    
        return titulo;
  }
  
  export default validador;
  