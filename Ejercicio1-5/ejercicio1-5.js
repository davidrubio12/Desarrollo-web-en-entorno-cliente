const intxt = document.getElementById("intxt");
const outtxt = document.getElementById("outtxt");

function defaulType() {
  let type = intxt.value;

  let parsedNumber = Number(type);

  if (!isNaN(parsedNumber) && type.trim() !== "") {

    if (Number.isInteger(parsedNumber)) {

      if (parsedNumber > Number.MAX_SAFE_INTEGER ||parsedNumber < Number.MIN_SAFE_INTEGER) {
        //Si excede los limites de los enteros seguros.
        outtxt.innerText = "BigInt (Entero largo)";
      } else {
        outtxt.innerText = "Numero entero";
      }
    } else if (!isNaN(BigInt(type))) {
        // Si el valor es muy grande y puede ser convertido a BigInt
        outtxt.innerText = "BigInt (Entero largo)";
    }else {
      outtxt.innerText = "Numero decimal";
    }
  
   
  } else {
    outtxt.innerText = "String";
  }
}
