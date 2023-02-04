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
    let validValue = false;
    while (validValue == false){
        let promptValue = prompt("How many squares per side do you want?");
        if ((promptValue > 100) || (promptValue < 10) || (promptValue == null)){
            alert("Please enter a number between 10 and 100.");
        } else if (promptValue && !isNaN(promptValue)){
            promptValue = Number(promptValue);
            if ((promptValue <= 100) && (promptValue >= 10)){
                validValue = true;
            }
        }
        divNumber = Number(promptValue);
        clearGrid();
        const newDivs = document.getElementById('grid');
        while (newDivs.firstChild){ 
            newDivs.removeChild(newDivs.firstChild);
        }
    }
    defaultDivs(divNumber);
    defaultColor();
}


function clearGrid(){
    const whiteDivs = document.getElementsByClassName('new-divs');
    [...whiteDivs].forEach(whiteDiv =>{whiteDiv.style.backgroundColor = "white"});
}

function defaultColor(){
    removeEventLstnr();
    const changeColor = document.querySelectorAll('.new-divs');
    changeColor.forEach(function(e){
        e.addEventListener("mouseover", makeBlack);
        e.addEventListener("mousedown", makeBlack);
        e.addEventListener("mouseover", defaultOpacity);
        e.addEventListener("mousedown", defaultOpacity);
    });
}    


function randomColor(){
    removeEventLstnr();
    const changeColor = document.querySelectorAll('.new-divs');
    changeColor.forEach(function(e){
        e.addEventListener("mouseover", makeColorful);
        e.addEventListener("mousedown", makeColorful);
        e.addEventListener("mouseover", defaultOpacity);
        e.addEventListener("mousedown", defaultOpacity);
    });
}
   

function eraser(){
    removeEventLstnr();
    const changeColor = document.querySelectorAll('.new-divs');
    changeColor.forEach(function(e){
        e.addEventListener("mouseover", makeWhite);
        e.addEventListener("mousedown", makeWhite);
        e.addEventListener("mouseover", defaultOpacity);
        e.addEventListener("mousedown", defaultOpacity);
    });
}


function rgb(){
    let red = String(Math.floor(Math.random() * 255));
    let green = String(Math.floor(Math.random() * 255));
    let blue = String(Math.floor(Math.random() * 255));
    return `rgb(${red}, ${green}, ${blue})`;
}


function opacityIncrement(){
    removeOpacity();
    const changeColor = document.querySelectorAll('.new-divs');
    changeColor.forEach(function(e){
        e.addEventListener("mouseover", opacityEvent);
        e.addEventListener("mousedown", opacityEvent);
    });
}

function removeEventLstnr(){
    const allDivs = document.querySelectorAll('.new-divs')
        for (const newDivs of allDivs){
            newDivs.removeEventListener("mousedown", opacityEvent);
            newDivs.removeEventListener("mouseover", opacityEvent);
            newDivs.removeEventListener("mousedown", makeBlack);
            newDivs.removeEventListener("mouseover", makeBlack);
            newDivs.removeEventListener("mousedown", makeColorful);
            newDivs.removeEventListener("mouseover", makeColorful);
            newDivs.removeEventListener("mousedown", makeWhite);
            newDivs.removeEventListener("mouseover", makeWhite);
        }
}
function removeOpacity(){
    const allDivs = document.querySelectorAll('.new-divs')
        for (const newDivs of allDivs){
            newDivs.removeEventListener("mousedown", defaultOpacity);
            newDivs.removeEventListener("mouseover", defaultOpacity);
        }
}

function opcty(event){
    let opacityIncr = Number(event.target.style.opacity);
        if (opacityIncr < 1) {
        event.target.style.opacity = (Number(opacityIncr) + 0.1);
        } else if (opacityIncr = 1){
        event.target.style.opacity = 0.1;
        }
}

function opacityEvent(event){
    if (event.buttons == 1) {
        MAKE_BLACK(event);
        opcty(event);
    };
}

function defaultOpacity(event){
    if (event.buttons == 1) {
        event.target.style.opacity = 1;
    };
}

function makeBlack(event){
    if (event.buttons == 1) {
        MAKE_BLACK(event);
    };
}

function makeColorful(event){
    if (event.buttons == 1) {
        RGB(event);
    };
}

function makeWhite(event){
    if (event.buttons == 1) {
        ERASER(event);
    };
}

const eraseButton = document.getElementById("eraser")
const blackButton = document.getElementById("black");
const clearTheGrid = document.getElementById("clear");
const changeSize = document.getElementById("size");
const rgbButton = document.getElementById("rgb");
const shadingButton = document.getElementById("shading");

eraseButton.onclick = () => eraser();
blackButton.onclick = () => defaultColor();
rgbButton.onclick = () => randomColor();
shadingButton.onclick = () => opacityIncrement()
clearTheGrid.onclick = () => clearGrid();
changeSize.onclick = () => createDivs();

defaultDivs(divNumber);
defaultColor();
