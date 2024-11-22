// create a 16x16 grid of square divs and append it div.container
let container = document.querySelector(".container");
for(let i = 0; i < 256; i++){
    let div = document.createElement("div");
    container.appendChild(div);
}