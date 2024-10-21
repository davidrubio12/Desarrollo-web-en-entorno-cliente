
 const outtxt = document.getElementById("outtxt");


 function cambioColor() {
    
    const intervalID = setInterval(() => {
        outtxt.style.backgroundColor = getColor();

    }, 500);

    function getColor() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6,'0')}`;
    }
    

 }