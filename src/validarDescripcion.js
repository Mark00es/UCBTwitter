function validadorDescrip(descrip) {
    var resp = descrip  
    if(descrip.length < 150)
        resp = descrip
    else
        alert("No es posible publicar este post")
    
        return resp;
  }
  
  export default validadorDescrip;
  