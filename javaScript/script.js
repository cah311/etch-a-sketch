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

function resetGrid() {
    
  
    
    let tbl = document.getElementById("pixelCanvas")
    let cells = document.getElementsByTagName('td')
    
    let cellRow = document.getElementById('row0') ;
    
    // console.log(cells.length)
    
    // console.log(cellRow)
    // let x = "row" + 1;
    // console.log(x)
    // cellRow = document.getElementById(x) ;

    // console.log(cellRow)


    for (x = 0;  x <= cells.length; ) {
        console.log(cellRow)
        
        
        x++;
        let rowNum = "row" + x;
        cellRow = document.getElementById(rowNum);
        console.log(cellRow)
        tbl.removeChild(cellRow); 
        
    }
    
    // while (cells.length >= 0) {
        
       
    //     tbl.removeChild(cellRow); 
        
        

        
    // }

    

    // for (k = x; k != 0; k --) {
    //     pixelCanvas.removeChild(cellRow);
    // }

    

    // let x = prompt("Grid Size...");


    // for (let i = 0; i < x; i++) {
    //     let myRow = document.createElement("tr");
    //     myRow.id = "row" + i; 

    //     tbl.appendChild(myRow);
    //     let rowW = document.getElementById("row" + i);
        
    //     for( let j = 0; j < x; j++) {
    //         let myCell = document.createElement("td");
    //         myCell.id = "td" + j;
    //         rowW.appendChild(myCell);
    //     }
    // }
}