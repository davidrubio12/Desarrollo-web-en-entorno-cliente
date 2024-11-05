const lienzo = document.getElementById("lienzo");
const usuario = document.getElementById("btnusuario");
const btnempresa = document.getElementById("btnempresa");
const btnciudad = document.getElementById("btnciudad");

const registros = listaUsuarios.split(';');

const listaRegistros = [];

for (let index = 0; index < registros.length; index+= 3) {
    let usuario = registros[index];
    let empresa = registros[index + 1];
    let ciudad = registros[index +2];
    
    listaRegistros.push({usuario,empresa,ciudad});
}

console.log(listaRegistros);

usuario.addEventListener("click", generar_tabla)
    

function generar_tabla() {
    let table = `<table>`;

    for (let index = 0; index < listaRegistros.length; index++) {
        table += `<th>`
        table += `<td>${listaRegistros[index].usuario} </td>`;
         table +=`</tr>`;
    }
    table += `</table>`;

    

    lienzo.innerHTML = table;

}

btnempresa.addEventListener("click",function (){
    let table = `<table>`;

    for (let index = 0; index < listaRegistros.length; index++) {
        table += `<th>`
        table += `<td>${listaRegistros[index].empresa} </td>`;
         table +=`</tr>`;
    }
    table += `</table>`;

    

    lienzo.innerHTML = table;
})

btnciudad.addEventListener("click",function (){
    let table = `<table>`;

    for (let index = 0; index < listaRegistros.length; index++) {
        table += `<th>`
        table += `<td>${listaRegistros[index].ciudad} </td>`;
         table +=`</tr>`;
    }
    table += `</table>`;

    

    lienzo.innerHTML = table;
})