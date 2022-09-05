const container = document.querySelector(".container");
const sizeGrid = document.querySelector(".grid-size");
const colorPicker = document.querySelector(".color-picker");
const resetBtn = document.querySelector(".resetBtn");
const eraseBtn = document.querySelector(".eraseBtn");
const sketchBtn = document.querySelector(".sketchBtn");
let size = sizeGrid.value;
let sketch = false;

function createGrid(size) {
  container.style.setProperty("--size", size);
  for (i = 0; i < size * size; i++) {
    const gridSize = document.createElement("div");
    gridSize.classList.add("pixel");

    // Erase cells
    eraseBtn.addEventListener("click", () => {
      gridSize.addEventListener("mouseover", () => {
        if (!sketch) return;
        gridSize.style.backgroundColor = "white";
      });
    });

    // Sketch cells
    sketchBtn.addEventListener("click", () => {
      gridSize.addEventListener("mouseover", () => {
        if (!sketch) return;
        gridSize.style.backgroundColor = colorPicker.value;
      });
    });

    container.appendChild(gridSize);
  }
}

// Continue to draw while mouse is pressed
window.addEventListener("mousedown", () => {
  sketch = true;
});

window.addEventListener("mouseup", () => {
  sketch = false;
});

function resetGrid() {
  container.innerHTML = "";
  createGrid(size);
}

resetBtn.addEventListener("click", resetGrid);

sizeGrid.addEventListener("keyup", () => {
  size = sizeGrid.value;
  resetGrid();
});

createGrid(size);
