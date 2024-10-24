const tableroIn = document.getElementById("tablero");




function generarTablero() {
    
    let tableHTML = "<table>";
    for(let i = 0; i< 8; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < 8; j++) {

            // const color = cambioColor();
            // tableHTML += `<td class='celda' style='background-color:${color}'></td>`; 
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    tableHTML += `<td class='celda' style='background-color:white'></td>`;
                }else{
                    tableHTML += `<td class='celda' style='background-color:black'></td>`;
                }
            } else {
                
            
            if (j % 2 == 0) {
                tableHTML += `<td class='celda' style='background-color:black'></td>`;
            }else{
                tableHTML += `<td class='celda' style='background-color:while'></td>`;
            }
        }

        }
        tableHTML += "</tr>";
    }

    tableHTML += "</table>"

    tableroIn.innerHTML = tableHTML;

}
//Sin esto la tabla no sale por que no se genera la tabla ya que la pagina esta completa, con window.onload cuando la pagina este completa
//se carga la funccion y genera todo lo demas
window.onload = generarTablero; 


function cambioColor () {
    
    const rgb = `rgb(${Math.floor(Math.random()* 256)},
                     ${Math.floor(Math.random()* 256)},
                     ${Math.floor(Math.random()* 256)})`;

                     return rgb
}

