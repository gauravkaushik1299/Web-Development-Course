const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActiveCircle = 1;
next.addEventListener("click", () => {
  currentActiveCircle++;
  if (currentActiveCircle > circles.length) {
    currentActiveCircle = circles.length;
  }
  console.log(currentActiveCircle);
  update();
});

prev.addEventListener("click", () => {
  currentActiveCircle--;
  if (currentActiveCircle < 1) {
    currentActiveCircle = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActiveCircle) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const activeCircle = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircle.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActiveCircle === 1) {
    prev.disabled = true;
  } else if (currentActiveCircle === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
