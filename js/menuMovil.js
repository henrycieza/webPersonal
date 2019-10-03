console.log("dentro de js");
let eventMenu = document.querySelector("#btnMenu");

 eventoCheckbox = eventMenu.addEventListener("change", function(){
      if(this.checked){
            console.log("dentro del if");
            showMenu();
            
            
      }else{
            console.log("dentro del else");
            hideMenu();
      }

 }

 )

function showMenu(){
    console.log("dentro de show menu ");
    let menu = document.getElementById("menuDisp");
    menu.style.display = "block";
    menu.style.zIndex = "0";
    eventoCheckbox.removeEventListener("click", showMenu);
    eventoCheckbox.addEventListener("click", hideMenu);
    console.log("fin de show ");
}

function hideMenu(){  

    console.log("dentro de hide menu ");
  let menu = document.getElementById("menuDisp");
  menu.style.display = "none";
  menu.style.zIndex = "-100";
  eventoCheckbox.removeEventListener("click", hideMenu);
  eventoCheckbox.addEventListener("click", showMenu);
  console.log("fin de hide ");
  };

  