const dia = document.getElementById("day");
const mes = document.getElementById("month");
const anno = document.getElementById("year");

const diasem = document.getElementById("weekday");

function calcularDia() {
  let diav = dia.value;
  let mesv = mes.value - 1;
  let annov = anno.value;

  let fecha = new Date(annov, mesv, diav);

  console.log(fecha.toString());

  console.log(fecha.getDay());

  switch (fecha.getDay()) {
    case 0:
      diasem.innerText = "Domingo";
      break;
    case 1:
      diasem.innerText = "Lunes";
      break;
    case 2:
      diasem.innerText = "Martes";
      break;
    case 3:
      diasem.innerText = "Miercoles";
      break;
    case 4:
      diasem.innerText = "Jueves";
      break;
    case 5:
      diasem.innerText = "Viernes";
      break;
    case 6:
      diasem.innerText = "Sabado";
      break;
    default:
      diasem.innerText = "No existe esa fecha";
  }
}
