
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
            myCell.id = "td" + j;
            rowW.appendChild(myCell);
        }
    }
}
makeGrid();


// document.getElementById('td2').addEventListener('mouseover', changeColor)

// function changeColor(cell) {
//     let cellColor = document.getElementById("colorPicker").value;
    
//     cell.target.style.backgroundColor = cellColor;
        
// };

 
let table = document.querySelector('#pixelCanvas')
let selectedCells = table.getElementsByClassName('selected');

table.addEventListener('mouseover', function(e) {
    let td = e.target;

    if (td.tagName !== 'TD'){
        return
    }

    if (selectedCells.length) {
        selectedCells[0].className = ''
    }
    let cellColor = document.getElementById("colorPicker").value;
    td.style.backgroundColor = cellColor;

    
    td.className = 'selected';


})