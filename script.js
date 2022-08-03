
const container = document.querySelector('.grid-container');
let grid_elem;

for (let i = 0; i < 256; ++i) {
    grid_elem = document.createElement('div');
    grid_elem.className = 'grid-elem';
    container.appendChild(grid_elem);
}