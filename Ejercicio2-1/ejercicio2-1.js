const intxt = document.getElementById("intxt");
const outtxt = document.getElementById("outtxt");

const letras=[];
const intervalID = setInterval(() => {
    outtxt.innerText = "Introduce un dni sin las letras , -1 para terminar";
    empezar();

}, 20000);
    function empezar() {
        
        let num = intxt.value;
        let cadena = num.length;
        if (num.length != 8 && num != -1) {
            outtxt.innerText = "Numero introducido no valido";
        }

            if (num == -1) {

                if (letras.length == 0) {

                    outtxt.innerText = "no se ha introducido ningun DNI"

                    return

                } else {

                    for (let index = 0; index < letras.length; index++) {

                        outtxt.innerText = letras[index];
                        
                    }
                    return
                }
                
            } else {

                letraDni(num);
                
            }


        
    


}

    function letraDni(n) {
         let letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";
        letras.push(letrasValidas[n % 23]) ;
        outtxt.innerText = "Numero introducido correctamente"
    }