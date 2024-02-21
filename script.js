function generateGrid(e){
    let containerDiv = document.getElementById("containerDiv");
    let gridDiv = document.createElement("div");
    gridDiv.style.border = "1px solid black";
    gridDiv.style.height = "60px";
    gridDiv.style.width = "60px";
    containerDiv.appendChild(gridDiv);
}

let generate = 0;

while (generate < 300){
    generateGrid();
    generate++;
}
