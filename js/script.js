let canvas = document.getElementById("snack");
let context = canvas.getContext("2d");
let box = 32;
let snack = [];

function criarBG(){
    context.fillStyle = "tomato";
    context.fillRect(0,0, 16 * box, 16 * box);
}

function criarCobrinha(){

}

criarBG();