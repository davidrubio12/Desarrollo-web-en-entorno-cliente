"use strict";

const texto = document.getElementById("intxt");

const area = document.getElementById("lienzo");

function escribir(t) {
  if(t.toLowerCase() == "domingo"){
    area.textContent = "Es donmigo";
  }else{
    area.textContent = "No es domingo"
  }
 

}

function activar() {
  let dato = texto.value;
  escribir(dato);
}
