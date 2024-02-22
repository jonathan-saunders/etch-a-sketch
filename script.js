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

function generateGrid(e){
    let containerDiv = document.getElementById("containerDiv");
    let gridDiv = document.createElement("div");
    var color = colors[Math.floor(Math.random()*colors.length)];
    gridDiv.addEventListener("mouseenter", (event) => {
        gridDiv.style.backgroundColor = color;
    })
    gridDiv.className = "gridDiv";
    gridDiv.style.border = "1px solid black";
    gridDiv.style.height = "32px";
    gridDiv.style.width = "32px";
    containerDiv.appendChild(gridDiv);
}

let generate = 0;
let squares = 0;

/*document.getElementById("size").onclick = function(){
    squares = prompt("How many squares?");
    console.log(squares);
}

console.log(squares);
*/
while (generate < 961){
    generateGrid();
    generate++;
}

