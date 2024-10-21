const pantalla = document.getElementById("Horas");



function calcularHora() {
    
    const today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    

    pantalla.innerHTML = h + ":" + m + ":" + s + " Madrid" + "<br>" 
                        + checkHour(h - 6) + ":" + m + ":" + s + " Pekin" + "<br>"
                        + checkHour(h - 6) + ":" + m + ":" + s + " Nueva York" + "<br>"
                        + checkHour(h - 7) + ":" + m + ":" + s + " Bogotá" + "<br>"
                        + checkHour(h + 9) + ":" + m + ":" + s + " Sidney" + "<br>"
    setInterval(calcularHora,1000);

}

function checkTime(i) {
    if ( i < 10) {
        i = "0" + i
    }
    return i
}
function checkHour(i) {
    if( i > 24){
        i = i - 24;
    }
     if ( i < 0) {
       i = 24 - (-i);
    }
    
    if ( i < 10) {
        i = "0" + i
    }
    return i
}
