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
let gridSize = 34;
let gridDivSize = width/gridSize;
let gridSpace = 100/gridSize;

// Set the height and width of the container div
let containerDiv = document.getElementById("containerDiv");
containerDiv.style.height = `${height}px`;
containerDiv.style.width = `${width}px`;

// Test variable output
let testoutput = document.getElementById("testoutput");
testoutput.innerHTML = gridDivSize;
let gridSpaceLabel = document.getElementById("gridSpaceLabel");
gridSpaceLabel.innerHTML = gridSpace;

function createGrid(){
    let gridDiv = document.createElement("div");
    gridDiv.className = "gridDiv";
    gridDiv.style.flex = "1 0" + `${gridSpace}%`;
    //gridDiv.style.height = `${gridSpace}%`;
    containerDiv.appendChild(gridDiv);

    var color = colors[Math.floor(Math.random()*colors.length)];

    gridDiv.addEventListener("mouseenter", (event) => {
        gridDiv.style.backgroundColor = color;
    })
}

for (let i = 0; i < ((gridSize*gridSize)); i++){
    createGrid();
}



/*document.getElementById("size").onclick = function(){
    squares = prompt("How many squares?");
    gridDivSize = squares;

    createGrid();
}
*/




