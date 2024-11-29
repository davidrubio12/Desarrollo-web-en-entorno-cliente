"use strict";

const texto = document.getElementById("intxt");

const area = document.getElementById("lienzo");




function escribir(t) {
    
  // for (let index = 2; index <= t; index++) {
  //   let num = index % 2 ;
  //   if(num == 0){
  //     area.innerHTML += index  + "<br>" ;
  //   }
    
  // }

   for (let index = t; index >= 1; index--) {
    
    let num = index % 2;

    if(num != 0){
      area.innerHTML += index + "<br>";
    }

   }
  
   
  
 

}

function activar() {
  let dato = texto.value;
  if(dato > 2){
  escribir(dato);
  }else
  alert("el numero tiene que ser mayor que 2");
}
