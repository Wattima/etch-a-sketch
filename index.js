const container = document.getElementsByClassName("container")[0];
const grid = document.createElement("div");
grid.setAttribute("id", "grid");
// grid.textContent = "Should be grid";
let cells = 16;



grid.style.display = 'grid';
grid.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${cells}, 1fr)`;



for (let i = 0; i < cells; i++) {
    for (let j = 0; j < cells; j++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      grid.appendChild(gridCell);
    }
  }

cells = prompt("Enter number of cells");

container.appendChild(grid);
