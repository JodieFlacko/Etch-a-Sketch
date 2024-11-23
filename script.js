function createGrid(size){
    for(let i = 0; i < size * size; i++){
        function changeBackground(){
            return `${flexProperty}; background-color: rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()});`;
        }
        function incrementOpacity(){
            if(opacity < 100) opacity += 10;
        }
        function changeSquareStyle(){
            incrementOpacity();
            square.style.cssText = changeBackground() + `opacity: ${opacity}%;`;
        }

        let square = document.createElement("square");
        let squareSize = calcSquareSize(size);
        let flexProperty = `flex: 1 1 ${squareSize}%;`;
        let opacity = 0;
        let initSquareStyle = flexProperty + ` opacity: ${opacity};`;
        square.style.cssText = initSquareStyle;
        container.appendChild(square);
        // Adds event listeners to square and remove it when not necessary anymore
        square.addEventListener("mouseenter", changeSquareStyle);
    }
}

function calcSquareSize(gridSize){
    return ((1 / gridSize) * 100).toFixed(5);
}

function removeGrid(){
    let grid = document.querySelectorAll(".container > square");
    for(square of grid){
        container.removeChild(square);
    }
}
function getUserInput(){
    let userInput = prompt("Enter the number of squares per side for the new grid: ");
    while(userInput > 100 || userInput < 0 || isNaN(userInput)) {
        userInput = prompt("Please enter a number between 0 and 100: ");
    }
    return userInput;
    
}
function randomNumber(){
    //between 0 and 255 (both included)
    return Math.floor((Math.random() * 256));
}
// create a 16x16 grid of square divs and append it square.container
let container = document.querySelector(".container");
let squaresPerSide = 16;
createGrid(squaresPerSide);
// button creates a new grid with desired size
let btn = document.querySelector("button");
btn.addEventListener("click", () =>{
    let userInput = getUserInput();
    removeGrid();
    createGrid(userInput);
});


