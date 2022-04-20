
function makeGrid(a,b) {
    let tbl = document.getElementById("pixelCanvas")

    for (let i = 0; i < a; i++) {
        let myRow = document.createElement("tr");
        myRow.id = "row" + i; 

        tbl.appendChild(myRow);
        let rowW = document.getElementById("row" + i);
        
        for( let j = 0; j < b; j++) {
            let myCell = document.createElement("td");

            rowW.appendChild(myCell);
        }
    }
}



