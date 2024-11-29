const marcador = document.getElementById("marcador");

const principal = document.getElementById("principal");

let contador = 10;

let intervalo;

function descontar(){
    contador--;
    marcador.innerText = contador;
    if(contador == 0){
        clearInterval(intervalo);
        explotar();
        marcador.innerText = "";
    }
}

function empezar(){
    principal.innerText= "";
    intervalo = setInterval(descontar , 1000)

}

function explotar(){
    principal.innerText="💣💣💣 🔥🔥🔥 ⚡⚡⚡";

    contador = 10;
}
function cancelar(){
    clearInterval(intervalo);
    contador = 10;
    marcador.innerText = "";
    principal.innerText= "";
}

