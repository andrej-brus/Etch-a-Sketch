const MAKE_BLACK = event => event.target.style.backgroundColor = "black";
const ERASER = event => event.target.style.backgroundColor = "white";
const RGB = event => event.target.style.backgroundColor = rgb();
let divNumber = 16;

function defaultDivs(divNumber){
    let i = 0;
    for (i = 0; i < (divNumber * divNumber); i++){
        grid.style.gridTemplateColumns = `repeat(${divNumber}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${divNumber}, 1fr)`;
        newDivs = document.createElement("div");
        newDivs.classList.add("new-divs")     
        document.getElementById('grid').appendChild(newDivs);
    }
}


function createDivs(){
    let promptValue = prompt("How many squares per side do you want?");
    divNumber = Number(promptValue);
    clearGrid();
    const newDivs = document.getElementById('grid');
    while (newDivs.firstChild){ 
            newDivs.removeChild(newDivs.firstChild);
    }
    defaultDivs(divNumber);
    defaultColor();
}


function clearGrid(){
    const whiteDivs = document.getElementsByClassName('new-divs');
    [...whiteDivs].forEach(whiteDiv =>{whiteDiv.style.backgroundColor = "white"});
}

function defaultColor(){
    const changeColor = document.querySelectorAll('.new-divs');
    changeColor.forEach(function(e){
        e.addEventListener("mouseover", event => {
            if (event.buttons == 1) MAKE_BLACK(event);
            e.addEventListener("mousedown", () => {
            MAKE_BLACK;
            })    
        });
    });
}

function randomColor(){
    const changeColor = document.querySelectorAll('.new-divs');
    changeColor.forEach(function(e){
        e.addEventListener("mouseover", event => {
            if (event.buttons == 1) RGB(event);
            e.addEventListener("mousedown", () => {
            RGB;
            })    
        });
    });
}    

function eraser(){
    const changeColor = document.querySelectorAll('.new-divs');
    changeColor.forEach(function(e){
        e.addEventListener("mouseover", event => {
            if (event.buttons == 1) ERASER(event);
            e.addEventListener("mousedown", () => {
            ERASER;
            })    
        });
    });
}

function rgb(){
    let red = String(Math.floor(Math.random() * 255));
    let green = String(Math.floor(Math.random() * 255));
    let blue = String(Math.floor(Math.random() * 255));
    return `rgb(${red}, ${green}, ${blue})`;
}

const eraseButton = document.getElementById("eraser")
const blackButton = document.getElementById("black");
const clearTheGrid = document.getElementById("clear");
const changeSize = document.getElementById("size");
const rgbButton = document.getElementById("rgb");

eraseButton.onclick = () => eraser();
blackButton.onclick = () => defaultColor();
rgbButton.onclick = () => randomColor();
clearTheGrid.onclick = () => clearGrid();
changeSize.onclick = () => createDivs();

defaultDivs(divNumber);
defaultColor();
