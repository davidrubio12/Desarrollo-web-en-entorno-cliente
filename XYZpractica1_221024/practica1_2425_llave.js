const cronos = document.getElementById("crono");
const intxt = document.getElementById("posiciones");
const table = document.getElementById("tablero");

const llave = 1 + (Math.random() * 20);




function start() {
    tablero();



    let num = 60;

    const intervalID = setInterval(() => {
        if (num > 0) {
            cronos.innerText = num;
            num--;
        } else {
            clearInterval(intervalID);

        }
    }, 1000);

    setTimeout(() => {
        alert("Se acabo el tiempo");
    }, 60000);



}

function buscarLlave() {


    let posiciones = intxt.value.toString;

    const posicion = posiciones.split(",");

    for (let index = 0; index < posicion.length; index++) {
        const element = array[index];




    }


}



function tablero() {
    const filas = 20;
    const columnas = 20;
    let contenidoTabla = '';
    contenidoTabla += `<table>`
    for (let i = 0; i < filas; i++) {
        contenidoTabla += `<tr>`;

        for (let j = 0; j < columnas; j++) {
            contenidoTabla += `<td class="celda>${i},${j} </td>`;
        }

        contenidoTabla += `</tr>`;
    }
    contenidoTabla += `<table>`
    table.innerHTML = contenidoTabla;
}


function calcularPosicion() {

}





