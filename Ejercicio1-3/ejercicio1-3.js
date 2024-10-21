const dia = document.getElementById("day");
const mes = document.getElementById("month");
const anio = document.getElementById("year");

const diames = document.getElementById("weekday");

function calcularDia() {
  let diav = dia.value;
  let mesv = mes.value - 1;
  let aniov = anio.value;

  let fecha = new Date(aniov, mesv, diav);

  let diamesv = fecha.getDay();

  switch (diamesv) {
    case 0:
      diames.innerText = "El dia de la semana de: " + fecha + " es Domingo";

      break;
    case 1:
      diames.innerText = "El dia de la semana de: " + fecha + " es Lunes";

      break;
    case 2:
      diames.innerText = "El dia de la semana de: " + fecha + " es Martes";

      break;
    case 3:
      diames.innerText = "El dia de la semana de: " + fecha + " es Miercoles";

      break;
    case 4:
      diames.innerText = "El dia de la semana de: " + fecha + " es Jueves";

      break;
    case 5:
      diames.innerText = "El dia de la semana de: " + fecha + " es Viernes";

      break;
    case 6:
      diames.innerText = "El dia de la semana de: " + fecha + " es Sabado";

      break;

    default:
        diames.innerText = "No existe esa fecha";
      break;
  }
}
