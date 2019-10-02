$(document).ready(main);

var cont = 1;
function main(){
  $('.menuDesplegable').click(function(){
    if(cont == 1){
      document.getElementById('menuMovil').animate({
        left:'0'
      });
      cont = 0;
    }else{
      cont = 1;
      document.getElementById('menuMovil').animate({
        left:'-100%'
      });
    }
  });
}