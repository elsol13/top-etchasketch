const container = document.getElementById('container');
container.style.display="flex";

function createGrid() {
    for (let i=0; i<256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.append(square);
    }
}

createGrid();