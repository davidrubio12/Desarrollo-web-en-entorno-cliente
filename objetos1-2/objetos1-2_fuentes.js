const exampletxt = `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. 
 He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. 
 The bedding was hardly able to cover it and seemed ready to slide off any moment.
 His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 
 "What's happened to me? " he thought. It wasn't a dream. His room, a proper human`;

const intxt = document.getElementById("intext");
intxt.innerText = exampletxt;
const outtxt = document.getElementById("outtext");

const tofind = document.getElementById("findw");
const toreplace = document.getElementById("replacew");
const toformat = document.getElementById("formatw");

function encontrar() {
  let intxtv = intxt.value;
  let tofindv = tofind.value;
  outtxt.innerText = intxtv.indexOf(tofindv);
  return intxtv.indexOf(tofindv);
}

function reemplazar() {
  let intxtv = intxt.value;
  let tofindv = tofind.value;
  let toreplacev = toreplace.value;
  let outtxtv = intxtv.replaceAll(tofindv, toreplacev);
  outtxt.innerText = outtxtv;
}

function darFormato() {
  let toformatv = toformat.value;
  let outtxtv = "";

  let pos = encontrar();

  if (pos != -1) {
    let intxtv = intxt.value;
    let tofindv = tofind.value;

    switch (toformatv) {
      case "B":
        outtxtv = intxtv.replaceAll(tofindv, tofindv.bold());
        break;
      case "b":
        outtxtv = intxtv.replaceAll(tofindv, tofindv.blink());
        break;
      case "G":
        outtxtv = intxtv.replaceAll(tofindv, tofindv.big());
        break;
      case "M":
        outtxtv = intxtv.replaceAll(tofindv, tofindv.toUpperCase());
        break;
      case "n":
        outtxtv = intxtv.replaceAll(tofindv, tofindv.toLowerCase());
        break;
      case "s":
        outtxtv = intxtv.replaceAll(tofindv, tofindv.small());
        break;
      default:
        outtxtv = "Opción inválida de formato";
    }
    outtxt.innerText = outtxtv;
  } else {
    outtxt.innerText = "Esa palabra no está en el texto";
  }
}
