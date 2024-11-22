// create a 16x16 grid of square divs and append it div.container
let container = document.querySelector(".container");
for(let i = 0; i < 256; i++){
    let div = document.createElement("div");
    container.appendChild(div);
    // Adds event listeners to div and remove it when not necessary anymore
    const changeBackground = () => {
        div.style.backgroundColor = "blue";
        div.removeEventListener("mouseenter", changeBackground);
    }
    div.addEventListener("mouseenter", changeBackground);
    
}