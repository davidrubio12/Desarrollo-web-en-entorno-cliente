const rojo = document.getElementById("rojo");
const amarillo = document.getElementById("amarillo");
const verde = document.getElementById("verde");

let tiempo;

let empezar = () => {
    idtiempo = setTimeout(() => {
       enRojo() 
    }, 2000 );
}

function enRojo(){
    rojo.innerText="👎👎👎";
    idtiempo = setTimeout(enAmarillo,3000);
}

function enAmarillo(){
    amarillo.innerText="🙌🙌🙌";
    idtiempo = setTimeout(enVerde,1000);
}

function enVerde(){
    verde.innerText="👍👍👍";
    idtiempo= setTimeout(()=>{
            rojo.innerText="";
            amarillo.innerText="";
            verde.innerText="";

    }, 1000)
}
function parar(){
    clearTimeout(idtiempo);

    rojo.innerText="";
    amarillo.innerText="";
    verde.innerText="";
}