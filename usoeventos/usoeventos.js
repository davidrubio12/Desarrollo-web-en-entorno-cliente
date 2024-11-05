function saludar() {
  alert("Muy buenas, empezamos!");
}

const tstart = setTimeout(() => {
  alert("Hola! Vamos a estudiar el uso de eventos");
  comenzar();
}, 5000);

function iniciar() {
  //  document.getElementById("blk1").removeEventListener("mouseover",cambiarAzul);
  //  document.getElementById("blk1").removeEventListener("click",activarBloque2);
  //  document.getElementById("blk1").removeEventListener("dblclick",activarBloque3);
  document.getElementById("blk2").removeEventListener("mousemove", pintarCoord);
  document
    .getElementById("blk2")
    .removeEventListener("mouseleave", activarTexto);
  document.getElementById("blk2").removeEventListener("mousedown", fijarTexto);
  document.getElementById("blk2").removeEventListener("mouseup", cambiarColor2);
  document.getElementById("blk3").removeEventListener("click", muestraTexto3);

  document.getElementById("blk1").style.backgroundColor = "darkgreen";
  document.getElementById("blk3").style.resize = "both";
}

function ocultar3() {
  document.getElementById("txt4").onkeydown = function () {
    if (confirm("Vas a borrar el tercer rectángulo, ¿estas seguro?")) {
      document.getElementById("blk3").style.visibility = "hidden";
    }
  };
}

function mostrar3() {
  document.getElementById("txt4").onkeyup = function () {
    if (confirm("¿estas seguro de querer mostrar el tercer rectángulo?")) {
      document.getElementById("blk3").style.visibility = "visible";
    }
  };
}

function salir() {
  let cerrar = () => {
    console.log("Esta aplicación se ha cerrado");
    // window.close();
  };

  const adios = setTimeout(cerrar, 3000);

  alert("Este ejercicio se autodestruirá");
}

function cambiarAzul() {
  document.getElementById("blk1").style.backgroundColor = "blue";
}

function pintarCoord(ev) {
  const dial = document.getElementById("blk2dial");
  dial.show();
  dial.innerText = `X = ${ev.clientX} ; Y = ${ev.clientY}`;
}

function fijarTexto(ev) {
  document.getElementById("blk2").removeEventListener("mousemove", pintarCoord);
  document
    .getElementById("blk2")
    .removeEventListener("mouseleave", activarTexto);
}

function cambiarColor2(ev) {
  document.getElementById("blk2").style.backgroundColor = "yellow";
}

function muestraTexto3() {
  const blk3 = document.getElementById("blk3");
  let wblk3 = blk3.style.width;
  let hblk3 = blk3.style.height;
  blk3.innerHTML = `Ancho: ${wblk3}; Alto: ${hblk3}`;
  blk3.style.textAlign = "center";
}

function accionarTecla(ev) {
  if (ev.key == "R" || ev.key == "r") iniciar();
  if (ev.key == "H" || ev.key == "h") ocultar3();
  if (ev.key == "B" || ev.key == "b") mostrar3();
  if (ev.key == "Q" || ev.key == "q") salir();
}

function activarTeclas(ev) {
  const txt4 = document.getElementById("txt4");
  if (ev.key == "S" || ev.key == "s") {
    txt4.disabled = false;
    txt4.addEventListener("keypress", accionarTecla);
  }
  txt4.focus();
}

function activarTexto() {
  document.getElementById("blk4").style.visibility = "visible";
  document.addEventListener("keypress", activarTeclas);
}

function activarBloque2() {
  document.getElementById("blk2").addEventListener("mousemove", pintarCoord);
  document.getElementById("blk2").addEventListener("mouseleave", activarTexto);
  document.getElementById("blk2").addEventListener("mousedown", fijarTexto);
  document.getElementById("blk2").addEventListener("mouseup", cambiarColor2);
}

function activarBloque3() {
  document.getElementById("blk3").style.resize = "both";
  document.getElementById("blk3").addEventListener("change", muestraTexto3);
}

function comenzar() {
  document.getElementById("blk1").addEventListener("mouseover", cambiarAzul);
  document.getElementById("blk1").addEventListener("click", activarBloque2);
  document.getElementById("blk1").addEventListener("dblclick", activarBloque3);
}
