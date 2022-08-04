
// create 16x16 div grid
function createGrid(size) {
    const container = document.querySelector('.grid-container');
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);
                               grid-template-rows: repeat(${size}, 1fr);`
    let grid_elem;

    for (let i = 0; i < size**2; ++i) {
        grid_elem = document.createElement('div');
        grid_elem.className = 'grid-elem';
        container.appendChild(grid_elem);
    }
}

function removeGrid() {
    const container = document.querySelector('.grid-container');
    let grid_elems = container.querySelectorAll(":scope > div");

    grid_elems.forEach((item) => item.remove());
}

createGrid(16);
// etch and sketch mechanism

let mouseDown = false;
document.body.addEventListener('pointerdown', () => { mouseDown = true; });
document.body.addEventListener('pointerup', () => { mouseDown = false; });

function changeColor(e) {

    console.log(mouseDown);
    if (e.type == 'pointerover' && !mouseDown) {
        return;
    }


    e.target.style.cssText = 'background-color: white';


}

function responsiveGridElems() {
    let grid_elems = document.querySelectorAll('.grid-elem');
    grid_elems.forEach((grid_elem) => {
        grid_elem.addEventListener('pointerdown', changeColor);
        grid_elem.addEventListener('pointerover', changeColor);
    })
}

responsiveGridElems();

// clear button
function clearColor(base_color = '#333333') {
    const container = document.querySelector('.grid-container');
    let grid_elems = container.querySelectorAll(":scope > div");

    grid_elems.forEach((item) => item.style.cssText = `background-color: ${base_color};`);
}

const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', clearColor);

// slider
const slider = document.querySelector('.slider');
slider.addEventListener('input', (e) => { 
    removeGrid();
    createGrid(e.target.value);
    responsiveGridElems();
});