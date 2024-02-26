const colors = [
    "red", "blue", "green", "yellow", "orange", "purple", "cyan", "magenta", 
    "lime", "pink", "teal", "indigo", "brown", "black", "white", "gray",
    "maroon", "navy", "olive", "silver", "aquamarine", "coral", "crimson",
    "darkorange", "darkorchid", "darksalmon", "darkturquoise", "firebrick",
    "goldenrod", "hotpink", "khaki", "lightcoral", "lightseagreen",
    "mediumorchid", "mediumspringgreen", "orangered", "powderblue",
    "rosybrown", "royalblue", "seagreen", "sienna", "slateblue",
    "springgreen", "steelblue", "tomato", "turquoise", "violet", "wheat"
  ];

const height = 500;
const width = 500;
const sizeButton = document.getElementById('size');
const resetButton = document.getElementById('reset');
const rainbowButton = document.getElementById('rainbow');

containerDiv.innerHTML = "";
containerDiv.style.height = `${height}px`;
containerDiv.style.width = `${width}px`;

function createGrid(gridSpace){
    let gridDiv = document.createElement("div");
    gridDiv.className = "gridDiv";
    gridDiv.style.flex = "1 0" + `${gridSpace}%`;
    containerDiv.appendChild(gridDiv);

    var color = "black";

    gridDiv.addEventListener("mouseover", (event) => {
        gridDiv.style.backgroundColor = color;
    })

    rainbowButton.addEventListener('click', event => {
        color = colors[Math.floor(Math.random()*colors.length)];
    })

}

sizeButton.addEventListener('click', event => {
    let gridSize;
    do {
        gridSize = window.prompt("What size? (must be 100 or less)");
    } while (gridSize > 100 || isNaN(gridSize) || gridSize.trim() === "");

    let gridSpace = 100/gridSize;
    let containerDiv = document.getElementById("containerDiv");
    containerDiv.innerHTML = "";
    containerDiv.style.height = `${height}px`;
    containerDiv.style.width = `${width}px`;

    for (let i = 0; i < (gridSize*gridSize); i++){
        createGrid(gridSpace);
    }

    resetButton.addEventListener('click', event => {
        containerDiv.innerHTML = "";
        for (let i = 0; i < (16*16); i++){
            createGrid(6.25);
        }
    });
});










