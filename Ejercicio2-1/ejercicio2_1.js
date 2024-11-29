"use strict";
  function sueldo(){
  let sueldo = prompt("Escribe el sueldo del operario");
  let anios = prompt("Escribe los años de antiguedad");
  
  if(sueldo < 500 && anios >=10){
    alert("su sueldo es: " + (sueldo * 3));
   return;
  }
  if(sueldo < 500 && anios < 10){
    alert("su sueldo es: " + sueldo *2);
    return;
  }
  if(sueldo > 500){
    alert("Su sueldo es: " + sueldo);
    return;
  }
 }

 sueldo();


// const texto = document.getElementById("intxt");

// const area = document.getElementById("lienzo");

// function escribir(t) {
//   if(t.toLowerCase() == "domingo"){
//     area.textContent = "Es donmigo";
//   }else{
//     area.textContent = "No es domingo"
//   }
 

// }

// function activar() {
//   let dato = texto.value;
//   escribir(dato);
// }


