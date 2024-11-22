function createGrid(size){
    for(let i = 0; i < size; i++){
        let div = document.createElement("div");
        container.appendChild(div);
        // Adds event listeners to div and remove it when not necessary anymore
        const changeBackground = () => {
            div.style.backgroundColor = "blue";
            div.removeEventListener("mouseenter", changeBackground);
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
// create a 16x16 grid of square divs and append it div.container
let container = document.querySelector(".container");
squaresPerSide = 256;
createGrid(squaresPerSide);