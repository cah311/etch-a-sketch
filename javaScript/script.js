
function makeGrid() {
    
    let x = prompt("Grid Size...");

    let tbl = document.getElementById("pixelCanvas")

    for (let i = 0; i < x; i++) {
        let myRow = document.createElement("tr");
        myRow.id = "row" + i; 

        tbl.appendChild(myRow);
        let rowW = document.getElementById("row" + i);
        
        for( let j = 0; j < x; j++) {
            let myCell = document.createElement("td");
            myCell.id = "td";
            rowW.appendChild(myCell);
        }
    }
}

makeGrid();

const canvas = document.getElementById('pixelCanvas');

canvas.addEventListener('mouseover', function changeColor() {
    let cellColor = document.getElementById("colorPicker").value;
    
    document.getElementById('td').style.backgroundColor = cellColor;
        
});

//document.getElementById('colorPicker').addEventListener('input',changeColor);

