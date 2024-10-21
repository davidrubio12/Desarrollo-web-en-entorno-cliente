"use strict";

const texto = document.getElementById("intxt");
const texto1 = document.getElementById("intxt1");
const texto2 = document.getElementById("intxt2");

const area = document.getElementById("lienzo");


pares();
clave();

function pares() {

  for (let index = 0; index <= 30; index++) {
    if (index % 2 == 0) {
      console.log(index);
    }

  }

}

function clave() {
  let cont = 4;
  let clave = 0;
  while (cont > 0) {
     clave = prompt("Escribe una clave");

    if (clave != "David") {
      --cont;
      alert(" ERRORRR!!\n" + "Tienes " + cont + " intentos");
     
      

    } else {
      alert(" Clave correcta!");
        break;
    }

  }
  if (cont == 0) {
    alert(" Ya no tienes mas oportunidades\n");
  }

}


function escribir(t) {
  if (t > 0 && t < 130) {
    if (t >= 18) {
      area.textContent = t + " Es mayor de edad";
      return;

    }
    if (t >= 65) {
      area.textContent = t + " Esta jubilado"
    }
    area.textContent = t + " Es una edad validad"
  } else {
    area.textContent = " No es una edad validad"
  }


}

function activar() {
  let dato = texto.value;
  escribir(dato);
}

function activar1() {
  let dato = texto1.value;
  escribir(dato);
}
function activarClave() {
  let dato = texto2.value;
  clave(dato);
}

