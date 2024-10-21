const outtxt = document.getElementById("outtxt");

function bingo() {

    const intervalID = setInterval(() => {
        outtxt.innerText = Math.round((Math.random() * 75) + 1);
    }, 3000);
    
}