
// create 16x16 div grid
const container = document.querySelector('.grid-container');
let grid_elem;

for (let i = 0; i < 256; ++i) {
    grid_elem = document.createElement('div');
    grid_elem.className = 'grid-elem';
    container.appendChild(grid_elem);
}

// etch and sketch mechanism

let mouseDown = false;
document.body.addEventListener('mousedown', () => { mouseDown = true; });
document.body.addEventListener('mouseup', () => { mouseDown = false; });

function changeColor(e) {

    console.log(mouseDown);
    if (e.type == 'mouseover' && !mouseDown) {
        return;
    }


    e.target.style.cssText = 'background-color: white';


}

let grid_elems = document.querySelectorAll('.grid-elem');
grid_elems.forEach((grid_elem) => {
    grid_elem.addEventListener('mousedown', changeColor);
    grid_elem.addEventListener('mouseover', changeColor);
})
