var boton = document.getElementById("btn-menu");
function devuelteMenu(){
    var menu = document.getElementById("opcMenu");
    if(menu.classList.contains("navlist")){
        console.log("mostrar");
    }else{
        console.log("ocultar");
    }
    
}

boton.addEventListener("click", devuelteMenu);