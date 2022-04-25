//prompt for grid size and generate cells 
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
    return x;
}

makeGrid();



//select color then change individual cells while mouse hover
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
   

    
    td.className = 'selected';
    td.style.backgroundColor = cellColor;

})

//remove all cells, ask a new grid size, then create new grid
function resetGrid() {
    
    let tbl = document.getElementById("pixelCanvas")
    let cells = document.getElementsByTagName('td')
    
    let cellRow = document.getElementById('row0') ;
    
    for (x = 0;  x <= cells.length; ) {
        console.log(cellRow)
        
        tbl.removeChild(cellRow); 
        x++;
        let rowNum = "row" + x;
        cellRow = document.getElementById(rowNum);
        console.log(cellRow)
        
        
    }
    makeGrid();
}