
const intxt = document.getElementById("intxt");
const outtxt = document.getElementById("outtxt");


function cuentaAtras() {
    let num = intxt.value;

    const intervalID = setInterval(() => {
        if (num > 0) {
            outtxt.innerText = num;
            num--;
        } else {
            clearInterval(intervalID);
            outtxt.innerText = "Fin cuenta Atras";
        }
    }, 1000);
}