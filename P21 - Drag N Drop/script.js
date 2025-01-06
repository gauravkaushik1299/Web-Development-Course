// Get the elements
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Add event listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Functions
function dragStart(e) {
  // Add hold class to the element
  this.className += " hold";
  // After 0ms, set the class to invisible
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd(e) {
  // Set the class to fill
  this.className = "fill";
}

function dragOver(e) {
  // Prevent the default action
  e.preventDefault();
}

function dragEnter(e) {
  // Prevent the default action
  e.preventDefault();
  // Add the hovered class to the element
  this.className += " hovered";
}

function dragLeave(e) {
  // Set the class to empty
  this.className = "empty";
}

function dragDrop(e) {
  // Set the class to empty
  this.className = "empty";
  // Append the fill element to the element
  this.append(fill);
}
