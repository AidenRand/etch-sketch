const container = document.querySelector(".container");
const sizeGrid = document.querySelector(".grid-size");
const colorPicker = document.querySelector(".color-picker");
const resetBtn = document.querySelector(".resetBtn");
const eraseBtn = document.querySelector(".eraseBtn");
const sketchBtn = document.querySelector(".sketchBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
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
    eraseBtn.addEventListener("click", () => {
      gridSize.addEventListener("mousedown", () => {
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
    sketchBtn.addEventListener("click", () => {
      gridSize.addEventListener("mousedown", () => {
        gridSize.style.backgroundColor = colorPicker.value;
      });
    });

    // Rainbow sketch
    rainbowBtn.addEventListener("click", () => {
      gridSize.addEventListener("mouseover", () => {
        if (!sketch) return;
        let colorNum = Math.floor(Math.random() * 16777215).toString(16);
        gridSize.style.background = "#" + colorNum;
      });
    });
    rainbowBtn.addEventListener("click", () => {
      gridSize.addEventListener("mousedown", () => {
        if (!sketch) return;
        let colorNum = Math.floor(Math.random() * 16777215).toString(16);
        gridSize.style.background = "#" + colorNum;
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
