
var blackInk = true;
var color = "black";
var gridSize = 25;

var mainContainer = document.getElementById("container");
var blackColorBtn = document.getElementById("btn-black-color");
var generateGridBtn = document.getElementById("btn-generate-grid");
var generateRandomColorBtn = document.getElementById("btn-generate-random-color");
var clearAllBtn = document.getElementById("btn-clear-all");
var eraserBtn = document.getElementById("btn-eraser");


blackColorBtn.addEventListener("click", function (e) {

    blackInk = true;
    color = "black";
   

});

generateGridBtn.addEventListener("click", function (e) {
    var input = Number(prompt("Enter new grid", "50"));
        console.log("input: "+input);
        
    if (input > 0) {
        
        clearGrid();
        gridSize = input;
        createGrid(input)
    }

});

generateRandomColorBtn.addEventListener("click", function (e) {

   
    blackInk = false;
    color = "random";

     
});
eraserBtn.addEventListener("click",function(e){
    color = "white";
});

clearAllBtn.addEventListener("click",function(e){
    clearGrid();
    createGrid(gridSize);
});

function createGrid(dimension = 25) { //default value

    for (i = 0; i < dimension * dimension; i++) {
        const div = document.createElement('div');
        div.setAttribute = ('id', 'box');
        div.addEventListener("mouseover", changeColor);
        div.style.width = 600 / dimension + 'px';
        div.style.height = 600 / dimension + 'px';
        div.style.boxShadow = '0px 0px 0px 1px black inset';
        div.style.display = 'inline-block';
        div.style.float = 'left';
        mainContainer.appendChild(div);
    }
}



function changeColor() {
    if (blackInk) {
        this.style.backgroundColor = color;
    } else if(color == "white") {
         this.style.backgroundColor = color;
    }else{
        this.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    }

    console.log("changing color");
}

function clearGrid() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

createGrid(gridSize);