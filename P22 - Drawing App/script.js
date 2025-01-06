const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const sizeDisplay = document.getElementById("size");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const color = document.getElementById("color");
const clear = document.getElementById("clear");

let brushSize = 10; // Default brush size

// Initialize size display
sizeDisplay.textContent = brushSize;

// Decrease brush size by 10
decrease.addEventListener("click", () => {
  if (brushSize > 10) { // Prevent going below 10
    brushSize -= 10;
    updateSizeDisplay();
  }
});

// Increase brush size by 10
increase.addEventListener("click", () => {
  if (brushSize < 100) { // Prevent exceeding 100 (arbitrary max)
    brushSize += 10;
    updateSizeDisplay();
  }
});

// Clear canvas
clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Function to update the size display
function updateSizeDisplay() {
  sizeDisplay.textContent = brushSize;
}

// Drawing-related code
let isPressed = false;
let x;
let y;

// Mouse down event to start drawing
canvas.addEventListener("mousedown", (event) => {
  isPressed = true;
  x = event.offsetX;
  y = event.offsetY;
});

// Mouse up event to stop drawing
canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

// Mouse move event for drawing
canvas.addEventListener("mousemove", (event) => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

// Function to draw a filled circle
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, brushSize, 0, Math.PI * 2);
  ctx.fillStyle = color.value;
  ctx.fill();
}

// Function to draw a line connecting two points
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color.value;
  ctx.lineWidth = brushSize * 2;
  ctx.stroke();
}

