const num = document.getElementById("numero");

let tmp;
let chosen;

function chooseNumber() {
    chosen = Math.round(Math.random()*90);
    escribirNumber();
}

function escribirNumber(){
    num.textContent = chosen;
}

function iniciar(){
    tmp = setInterval(chooseNumber,3000);
}

function parar(){
    clearInterval (tmp);

}
