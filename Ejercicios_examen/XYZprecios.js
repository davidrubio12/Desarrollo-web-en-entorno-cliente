const minimo = document.getElementById("pricemin");
const maximo = document.getElementById("pricemax");
const iniciar = document.getElementById("btnbuscar");
const avisos = document.getElementById("avisos");
const consola = document.getElementById("consola");

iniciar.addEventListener("click", search);

function search() {
    avisos.innerText = "REALIZANDO BÚSQUEDA...";
    setTimeout(() => {
        
    }, 2000);
    avisos.innerText = "Busqueda finalizada";
    
     
}