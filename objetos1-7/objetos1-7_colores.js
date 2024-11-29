const canvas = document.getElementById("canvas");

let tmp;

function selectColor() {
  let rgb = [0, 0, 0];
  let color = "";

  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.round(Math.random() * 255);
  }
  color = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  console.log(color);
  return color;
}

function setColor() {
  canvas.style.setProperty("background-color", selectColor());
}

function activar() {
  tmp = setInterval(setColor, 500);
}

function parar() {
  clearInterval(tmp);
}
