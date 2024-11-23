function createGrid(size){
    for(let i = 0; i < size * size; i++){
        let div = document.createElement("div");
        // formula to get the percentage of each div width;
        let percentage = ((1 / size) * 100).toFixed(5);
        let flexProperty = `flex: 1 1 ${percentage}%;`;
        let opacity = 10;
        div.style.cssText = flexProperty;
        container.appendChild(div);
        // Adds event listeners to div and remove it when not necessary anymore
        const changeBackground = () => {
            div.style.cssText = `${flexProperty};  
            background-color: rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()});
            opacity: ${opacity}%`;
            if(opacity < 100) opacity += 10;
        }
        div.addEventListener("mouseenter", changeBackground);
    }
}

function removeGrid(){
    let grid = document.querySelectorAll(".container > div");
    for(div of grid){
        container.removeChild(div);
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
// create a 16x16 grid of square divs and append it div.container
let container = document.querySelector(".container");
let squaresPerSide = 16;
createGrid(squaresPerSide);
let btn = document.querySelector("button");
btn.addEventListener("click", () =>{
    let userInput = getUserInput();
    removeGrid();
    createGrid(userInput);
});


