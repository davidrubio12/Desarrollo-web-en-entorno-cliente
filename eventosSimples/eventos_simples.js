const palabra = document.getElementById("palabra");
const texto = document.getElementById("texto");
const salida = document.getElementById("salida");
const start = document.getElementById("start");

const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const dorado = document.getElementById("dorado");

let bloque = "";
function iniciarPagina() {
    dorado.addEventListener("contextmenu", (evento)=>{
        evento.preventDefault();
    });
}

function buscarPalabra() {
    let palabraAbuscar = palabra.value;
    let textoCompleto = texto.value;

    let hayPalabra = textoCompleto.indexOf(palabraAbuscar);
    
    if (hayPalabra != -1) {
        salida.innerText = "Hay palabra";
    }else{
        salida.innerText = "No hay palabra"
    }
}

function activaCuadro(miColor) {
     let miBloque = "";
    // if (miColor == "dorado") {
    //     miBloque = miColor;
    // }else{
    //     miBloque =bloque;
    // }

    miBloque = (miColor == null) ? bloque : miColor;

    switch (miBloque) {
        case "rojo":
            salida.innerText="Estas sobre el cuadro rojo";
            break;
        case "verde":
            salida.innerText="Has salido del cuadro verde";
            break;
        case "azul":
            salida.innerText="Has entrado en el cuadro azul";
            break;
        case "dorado":
            salida.innerText="Te mueves en el cuadro amarillo";
            break;
        default:
            salida.innerText="";
    
    }
}

start.addEventListener("click",buscarPalabra);

palabra.addEventListener("keyup",function ()  {
    palabra.style.backgroundColor="lightpink";
    setTimeout(() => {
        palabra.style.backgroundColor="while";
    }, 1000);
})

rojo.addEventListener("mouseover", () => {
    bloque = "rojo";
    activaCuadro();
})

verde.addEventListener("mouseleave", () => {
    bloque = "verde";
    activaCuadro();
})

azul.addEventListener("mouseenter", () => {
    bloque = "azul";
    activaCuadro();
})

dorado.addEventListener("mousemove",activaCuadro.bind(this, "dorado"));

dorado.addEventListener("contextmenu", () => {
    salida.innerText = "Has pulsado el boton derecho";
})

iniciarPagina(); 