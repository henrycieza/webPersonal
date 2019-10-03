function validar(){
    var nombre;
    var apellido;
    var correo;
    var mensaje;
    var expresion;

    expresion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    mensaje = document.getElementById("mensaja").value;

    if(nombre === "" || apellido ==="" || correo === "" || mensaje ===" "){
        alert("todos los campos son obligatorios");
        return false;
      
    }else if(nombre.length > 30) {
        alert("el nombre no debe superar 30 caracteres");
        return false;
    }else if(nombre.length > 80) {
        alert("el apellido no debe superar 80 caracteres");
        return false;
    }else if(correo.length > 100){
        alert("el correo no debe superar 100 caracteres");
        return false;
    }else if(!expresion.test(correo)){
        alert("el correo no es valido");
        return false;
    }else if(mensaje.length > 250){
        alert("el mensaje no debe superar 250 caracteres");
        return false;
    }     
}