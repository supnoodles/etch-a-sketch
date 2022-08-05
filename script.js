const container = document.querySelector('.grid-container');
const clearBtn = document.querySelector('.btn-clear');
const slider = document.querySelector('.slider');
const sliderText = document.querySelector('.slider-container h3');

let mouseDown = false;

document.body.addEventListener('pointerdown', () => { mouseDown = true; });
document.body.addEventListener('pointerup', () => { mouseDown = false; });
clearBtn.addEventListener('click', clearColor);
slider.addEventListener('input', (e) => {
    removeGrid();
    createGrid(e.target.value);
    responsiveGridElems();
    changeSliderText(e.target.value);
});


// creates the grid within grid-container div
function createGrid(size) {
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);
                               grid-template-rows: repeat(${size}, 1fr);`
    let grid_elem;

    for (let i = 0; i < size ** 2; ++i) {
        grid_elem = document.createElement('div');
        grid_elem.className = 'grid-elem';
        container.appendChild(grid_elem);
    }
}

// removes grid elements from grid
function removeGrid() {
    const grid_elems = container.querySelectorAll(":scope > div");
    grid_elems.forEach((item) => item.remove());
}

// grid element change color
function changeColor(e) {
    if (e.type == 'pointerover' && !mouseDown) {
        return;
    }
    e.target.style.cssText = 'background-color: white';
}

//event listener for grid element color change
function responsiveGridElems() {
    let grid_elems = document.querySelectorAll('.grid-elem');
    grid_elems.forEach((grid_elem) => {
        grid_elem.addEventListener('pointerdown', changeColor);
        grid_elem.addEventListener('pointerover', changeColor);
    })
}

// clear button
function clearColor(base_color = '#333333') {
    let grid_elems = container.querySelectorAll(":scope > div");
    grid_elems.forEach((item) => item.style.cssText = `background-color: ${base_color};`);
}

// change slider text upon slider change
function changeSliderText(size) {
    sliderText.textContent = `${size}x${size}`;
}


// initial setup
createGrid(16);
responsiveGridElems();