const container = document.getElementsByClassName("container")[0];
const grid = document.createElement("div");
grid.setAttribute("id", "grid");
// grid.textContent = "Should be grid";

grid.style.display = 'grid';
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";



for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      grid.appendChild(gridCell);
    }
  }

container.appendChild(grid);
