function createGrid(x) {
    for (let rows = 0; rows < x; rows ++) {
        for (let columns = 0; columns < x; columns ++) {

        const container = document.querySelector('#container');

        const grid = document.createElement('div');
        grid.classList.add('grid')

        container.appendChild(grid);
        
        if (columns === x) {
            document.createElement('br');
        }
        }
    }
}

createGrid(16);



